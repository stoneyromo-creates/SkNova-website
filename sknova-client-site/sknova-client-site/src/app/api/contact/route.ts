import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "stoneyromo@gmail.com";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "SKNova Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New inquiry from ${escapeHtml(name)} — SKNova Web Design`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a855f7;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${escapeHtml(phone || "Not provided")}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service</td><td style="padding: 8px;">${escapeHtml(service || "Not specified")}</td></tr>
          </table>
          <h3 style="color: #a855f7;">Message</h3>
          <p style="background: #f4f4f4; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
