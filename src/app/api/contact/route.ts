import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, role, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ============ EMAIL 1: TO YOU (ADMIN) ============
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #FF6B2B 0%, #FF8F5C 100%); padding: 30px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
            .content { padding: 30px; }
            .field-group { margin-bottom: 18px; border-left: 3px solid #FF6B2B; padding-left: 15px; }
            .field-label { color: #FF6B2B; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field-value { color: #333; font-size: 15px; margin-top: 5px; word-break: break-word; }
            .message-box { background-color: #f9f9f9; border-radius: 6px; padding: 15px; margin-top: 20px; border: 1px solid #eee; }
            .message-label { color: #FF6B2B; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 10px; }
            .message-value { color: #555; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; }
            .footer { background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
            .badge { display: inline-block; background-color: #FF6B2B; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Message</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Frovo Contact Form</p>
            </div>
            <div class="content">
              <p style="color: #666; font-size: 14px; margin-bottom: 20px; line-height: 1.6;">
                You've received a new message from the contact form. Here are the details:
              </p>
              <div class="field-group">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #FF6B2B; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">User Type</div>
                <div class="field-value"><span class="badge">${role}</span></div>
              </div>
              <div class="message-box">
                <span class="message-label">Message</span>
                <div class="message-value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Reply directly to ${email} to respond to this inquiry.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // ============ EMAIL 2: TO USER ============
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #FF6B2B 0%, #FF8F5C 100%); padding: 40px 30px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 32px; font-weight: 600; }
            .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.95; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px; }
            .highlight { color: #FF6B2B; font-weight: 600; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #FF6B2B 0%, #FF8F5C 100%); color: white; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 20px; }
            .footer { background-color: #f5f5f5; padding: 30px; text-align: center; border-top: 1px solid #ddd; }
            .footer p { margin: 8px 0; font-size: 14px; color: #666; }
            .social { margin-top: 20px; }
            .social a { display: inline-block; margin: 0 10px; color: #FF6B2B; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Message Received!</h1>
              <p>Thank you for reaching out to Frovo</p>
            </div>
            <div class="content">
              <div class="greeting">
                Hi <span class="highlight">${name}</span>,
              </div>
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin-bottom: 20px;">
                Thank you for contacting Frovo! We've received your message and appreciate you taking the time to reach out to us.
              </p>
              
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 20px 0;">
                <strong>Here's what happens next:</strong>
              </p>
              <ul style="list-style: none; color: #555; font-size: 15px; margin: 0; padding: 0;">
                <li style="margin-bottom: 12px; line-height: 1.6;">Our team will review your message</li>
                <li style="margin-bottom: 12px; line-height: 1.6;">We'll get back to you as soon as possible</li>
                <li style="margin-bottom: 12px; line-height: 1.6;">Typically within 24 hours</li>
              </ul>

              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 25px 0;">
                If you need urgent assistance, feel free to reach out via WhatsApp at <strong>+91-9035598876</strong> or call us directly.
              </p>

              <div style="text-align: center;">
                <a href="https://wa.me/919035598876?text=Hello%20Frovo!" class="cta-button">Chat on WhatsApp</a>
              </div>

              <p style="color: #888; font-size: 13px; line-height: 1.6; margin-top: 30px; text-align: center;">
                We look forward to connecting with you!
              </p>
            </div>
            <div class="footer">
              <p><strong>Frovo - Grab & Go 24/7</strong></p>
              <p>© 2025 Frovo. All rights reserved.</p>
              <div class="social">
                <a href="https://www.instagram.com/frovo.in/">YouTube</a>
                <a href="https://www.linkedin.com/company/frovo/posts/?feedView=all">LinkedIn</a>
                <a href="https://www.instagram.com/frovo.in/">Instagram</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // ============ SEND EMAIL 1 (TO YOU) ============
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: adminEmailHtml,
    });

    // ============ SEND EMAIL 2 (TO USER) ============
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We Received Your Message - Frovo`,
      html: userEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
