import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, organization, email, interest, message } = body;

    if (!firstName || !lastName || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Infrastructure Alpha Fund <noreply@ainfrapower.com>",
      to: "jamesj@ainfrapower.com",
      replyTo: email,
      subject: `New Inquiry: ${interest} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #08111F; border-bottom: 2px solid #C8922A; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 140px;">Name</td>
              <td style="padding: 8px 12px;">${firstName} ${lastName}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: 600; color: #555;">Organization</td>
              <td style="padding: 8px 12px;">${organization || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: 600; color: #555;">Interest</td>
              <td style="padding: 8px 12px;">${interest}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; white-space: pre-wrap;">${message}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Submitted via ainfrapower.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
