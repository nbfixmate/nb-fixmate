import { Resend } from "resend";
import { business } from "../config/business";
import type { QuoteFormInput } from "./quote-schema";

interface SendQuoteEmailOptions {
  data: QuoteFormInput;
  serviceLabel: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildQuoteEmailHtml({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): string {
  const rows = [
    ["Full name", data.fullName],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Service", serviceLabel],
    ["Suburb", data.suburb],
    ["Preferred date", data.preferredDate ?? "Not specified"],
    ["Message", data.message ?? "No message provided"],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:160px;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;vertical-align:top;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111111;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 12px;">New quote enquiry</h1>
      <p style="margin:0 0 20px;">A new quote request was submitted via the ${escapeHtml(business.displayName)} website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${rowHtml}
      </table>
    </div>
  `;
}

export async function sendQuoteEmail({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): Promise<{ id?: string }> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail =
    import.meta.env.RESEND_FROM_EMAIL ??
    `${business.displayName} <onboarding@resend.dev>`;
  const toEmail =
    import.meta.env.QUOTE_TO_EMAIL ?? business.email.current;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(apiKey);
  const subject = `Quote request: ${serviceLabel} in ${data.suburb}`;

  const { data: result, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject,
    html: buildQuoteEmailHtml({ data, serviceLabel }),
    text: [
      "New quote enquiry",
      "",
      `Full name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${serviceLabel}`,
      `Suburb: ${data.suburb}`,
      `Preferred date: ${data.preferredDate ?? "Not specified"}`,
      `Message: ${data.message ?? "No message provided"}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }

  return { id: result?.id };
}
