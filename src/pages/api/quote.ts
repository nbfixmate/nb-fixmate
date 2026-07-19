import type { APIRoute } from "astro";
import { getQuoteServiceOptions } from "../../lib/quote-form";
import { quoteFormSchema } from "../../lib/quote-schema";
import { sendQuoteEmail } from "../../lib/send-quote-email";

export const prerender = false;

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("content-type")?.includes("application/json") !== true) {
    return jsonResponse({ ok: false, error: "Invalid content type." }, 415);
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const parsed = quoteFormSchema.safeParse(payload);

  if (!parsed.success) {
    return jsonResponse(
      {
        ok: false,
        error: "Please check the form details and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      400,
    );
  }

  // Honeypot trips are treated as success so bots get no signal.
  if (parsed.data.website) {
    return jsonResponse({ ok: true });
  }

  const serviceOptions = await getQuoteServiceOptions();
  const serviceLabel =
    serviceOptions.find((option) => option.value === parsed.data.service)
      ?.label ?? parsed.data.service;

  try {
    await sendQuoteEmail({
      data: parsed.data,
      serviceLabel,
    });
  } catch (error) {
    console.error("Quote email failed:", error);
    return jsonResponse(
      {
        ok: false,
        error: "Unable to send your enquiry right now. Please try again shortly.",
      },
      500,
    );
  }

  return jsonResponse({ ok: true });
};
