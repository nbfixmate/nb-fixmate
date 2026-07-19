import { Resend } from "resend";
import { business } from "../config/business";
import type { QuoteFormInput } from "./quote-schema";

interface SendQuoteEmailOptions {
  data: QuoteFormInput;
  serviceLabel: string;
}

const brand = {
  primary: "#FD7C2F",
  accent: "#334155",
  foreground: "#111111",
  muted: "#525252",
  border: "#E5E7EB",
  surface: "#F8F9FA",
  white: "#FFFFFF",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? `tel:${digits}` : `tel:${digits}`;
}

function formatMultilineHtml(value: string): string {
  return escapeHtml(value.trim()).replaceAll("\n", "<br />");
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

function stackedField(label: string, valueHtml: string): string {
  return `<tr>
<td style="padding:0 0 16px;">
<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${brand.muted};">${escapeHtml(label)}</p>
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.45;color:${brand.foreground};">${valueHtml}</p>
</td>
</tr>`;
}

function fullWidthButton(
  label: string,
  href: string,
  variant: "primary" | "secondary" = "secondary",
): string {
  const isPrimary = variant === "primary";

  return `<tr>
<td style="padding:0 0 10px;">
<a href="${escapeHtml(href)}" style="display:block;padding:14px 18px;border:1px solid ${isPrimary ? brand.primary : brand.border};border-radius:2px;background:${isPrimary ? brand.primary : brand.white};color:${brand.foreground};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-align:center;text-decoration:none;">
${escapeHtml(label)}
</a>
</td>
</tr>`;
}

function buildTeamEmailHtml({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): string {
  const phoneHref = formatPhoneHref(data.phone);
  const replyHref = `mailto:${data.email}?subject=${encodeURIComponent(`Re: Your NB Fixmate quote enquiry`)}`;
  const message = data.message?.trim() || "No message provided";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New quote enquiry</title>
</head>
<body style="margin:0;padding:0;background:${brand.surface};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
New quote from ${escapeHtml(data.fullName)} in ${escapeHtml(data.suburb)} for ${escapeHtml(serviceLabel)}.
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};padding:24px 12px;">
<tr>
<td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${brand.white};border:1px solid ${brand.border};border-radius:2px;overflow:hidden;">
<tr>
<td style="padding:22px 24px;background:${brand.accent};">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${brand.primary};">NB Fixmate admin</p>
<h1 style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.25;color:${brand.white};">New quote enquiry</h1>
<p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.82);">${escapeHtml(serviceLabel)} · ${escapeHtml(data.suburb)}</p>
</td>
</tr>
<tr>
<td style="padding:24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};border:1px solid ${brand.border};border-radius:2px;">
<tr>
<td style="padding:18px 20px;">
<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${brand.muted};">Customer</p>
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;line-height:1.3;color:${brand.foreground};">${escapeHtml(data.fullName)}</p>
<p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${brand.muted};">
<a href="${escapeHtml(phoneHref)}" style="color:${brand.accent};text-decoration:none;">${escapeHtml(data.phone)}</a><br />
<a href="mailto:${escapeHtml(data.email)}" style="color:${brand.accent};text-decoration:none;">${escapeHtml(data.email)}</a>
</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 24px 8px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${stackedField("Service required", escapeHtml(serviceLabel))}
${stackedField("Suburb", escapeHtml(data.suburb))}
${stackedField("Preferred date", escapeHtml(data.preferredDate ?? "Not specified"))}
</table>
</td>
</tr>
<tr>
<td style="padding:0 24px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};border:1px solid ${brand.border};border-radius:2px;">
<tr>
<td style="padding:16px 18px;">
<p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${brand.muted};">Message</p>
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${brand.foreground};">${formatMultilineHtml(message)}</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 24px 24px;">
<p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${brand.muted};">Quick actions</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${fullWidthButton("Reply by email", replyHref, "primary")}
${fullWidthButton(`Call ${data.phone}`, phoneHref)}
${fullWidthButton("Open WhatsApp", business.whatsapp.url)}
</table>
<p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:${brand.muted};">Tip: reply directly to this email to message ${escapeHtml(firstName(data.fullName))}.</p>
</td>
</tr>
<tr>
<td style="padding:16px 24px;background:${brand.surface};border-top:1px solid ${brand.border};">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${brand.muted};">Automatic notification from the NB Fixmate website quote form.</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function buildCustomerEmailHtml({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Thanks for your enquiry</title>
</head>
<body style="margin:0;padding:0;background:${brand.surface};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
We received your quote enquiry. NB Fixmate will follow up shortly.
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};padding:24px 12px;">
<tr>
<td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${brand.white};border:1px solid ${brand.border};border-radius:2px;overflow:hidden;">
<tr>
<td style="height:4px;background:${brand.primary};font-size:0;line-height:0;">&nbsp;</td>
</tr>
<tr>
<td style="padding:28px 24px 8px;">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${brand.primary};">Thanks for contacting us</p>
<h1 style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;color:${brand.foreground};">Thanks, ${escapeHtml(firstName(data.fullName))}</h1>
<p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${brand.muted};">Your enquiry has been received. NB Fixmate will review your details and follow up shortly. There is no obligation to book.</p>
</td>
</tr>
<tr>
<td style="padding:16px 24px 8px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.surface};border:1px solid ${brand.border};border-radius:2px;">
<tr>
<td style="padding:18px 20px;">
<p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${brand.muted};">Enquiry summary</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${stackedField("Service", escapeHtml(serviceLabel))}
${stackedField("Suburb", escapeHtml(data.suburb))}
${stackedField("Preferred date", escapeHtml(data.preferredDate ?? "Not specified"))}
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:16px 24px 28px;">
<p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${brand.muted};">Need to speak with us sooner? Call or message NB Fixmate anytime.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${fullWidthButton(`Call ${business.phone.display}`, business.phone.telUrl, "primary")}
${fullWidthButton("Chat on WhatsApp", business.whatsapp.url)}
</table>
</td>
</tr>
<tr>
<td style="padding:16px 24px;background:${brand.surface};border-top:1px solid ${brand.border};">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${brand.muted};">If you did not submit this enquiry, you can ignore this email or contact ${escapeHtml(business.email.current)}.</p>
<p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${brand.muted};">${escapeHtml(business.displayName)} · ${escapeHtml(business.tagline)} · ${escapeHtml(business.address.publicLocation)}</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function buildTeamEmailText({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): string {
  return [
    "New quote enquiry",
    "",
    `Customer: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${serviceLabel}`,
    `Suburb: ${data.suburb}`,
    `Preferred date: ${data.preferredDate ?? "Not specified"}`,
    `Message: ${data.message?.trim() || "No message provided"}`,
    "",
    `Reply to this email to contact ${data.fullName}.`,
  ].join("\n");
}

function buildCustomerEmailText({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): string {
  return [
    `Hi ${firstName(data.fullName)},`,
    "",
    "Thanks for contacting NB Fixmate. Your enquiry has been received and we will follow up shortly.",
    "",
    "Enquiry summary",
    `Service: ${serviceLabel}`,
    `Suburb: ${data.suburb}`,
    `Preferred date: ${data.preferredDate ?? "Not specified"}`,
    "",
    `Call: ${business.phone.display}`,
    `WhatsApp: ${business.whatsapp.url}`,
    "",
    "There is no obligation to book.",
  ].join("\n");
}

function getEnv(name: keyof ImportMetaEnv): string | undefined {
  const fromProcess = process.env[name];
  if (typeof fromProcess === "string" && fromProcess.length > 0) {
    return fromProcess;
  }

  const fromImportMeta = import.meta.env[name];
  if (typeof fromImportMeta === "string" && fromImportMeta.length > 0) {
    return fromImportMeta;
  }

  return undefined;
}

export async function sendQuoteEmail({
  data,
  serviceLabel,
}: SendQuoteEmailOptions): Promise<{ id?: string }> {
  const apiKey = getEnv("RESEND_API_KEY");
  const fromEmail =
    getEnv("RESEND_FROM_EMAIL") ??
    `${business.displayName} <onboarding@resend.dev>`;
  const toEmail = getEnv("QUOTE_TO_EMAIL") ?? business.email.current;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(apiKey);
  const subject = `Quote request: ${serviceLabel} in ${data.suburb}`;

  const { data: teamResult, error: teamError } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject,
    html: buildTeamEmailHtml({ data, serviceLabel }),
    text: buildTeamEmailText({ data, serviceLabel }),
  });

  if (teamError) {
    throw new Error(teamError.message);
  }

  const { error: customerError } = await resend.emails.send({
    from: fromEmail,
    to: [data.email],
    replyTo: toEmail,
    subject: "We received your NB Fixmate quote enquiry",
    html: buildCustomerEmailHtml({ data, serviceLabel }),
    text: buildCustomerEmailText({ data, serviceLabel }),
  });

  if (customerError) {
    console.error("Customer confirmation email failed:", customerError);
  }

  return { id: teamResult?.id };
}
