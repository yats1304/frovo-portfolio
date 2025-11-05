import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const emailAddress = formData.get("emailAddress") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const website = formData.get("website") as string;
    const organization = formData.get("organization") as string;
    const collaborationType = formData.get("collaborationType") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const file = formData.get("file") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const attachments = [];
    if (file) {
      const buffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(buffer),
      });
    }

    // ============ EMAIL 1: TO YOU ============
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
            .description-section { background-color: #f9f9f9; border-radius: 6px; padding: 15px; margin-top: 20px; border: 1px solid #eee; }
            .description-label { color: #FF6B2B; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 10px; }
            .description-value { color: #555; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; }
            .footer { background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
            .badge { display: inline-block; background-color: #FF6B2B; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Partnership Request</h1>
            </div>
            <div class="content">
              <p style="color: #666; font-size: 14px; margin-bottom: 20px; line-height: 1.6;">
                Hi! You've received a new partnership inquiry. Here are the details:
              </p>
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${emailAddress}" style="color: #FF6B2B; text-decoration: none;">${emailAddress}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phoneNumber}" style="color: #FF6B2B; text-decoration: none;">${phoneNumber}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Organization</div>
                <div class="field-value">${organization}</div>
              </div>
              ${
                website && website !== "N/A"
                  ? `
                <div class="field-group">
                  <div class="field-label">Website</div>
                  <div class="field-value"><a href="${website}" target="_blank" style="color: #FF6B2B; text-decoration: none;">${website}</a></div>
                </div>
              `
                  : ""
              }
              <div class="field-group">
                <div class="field-label">Collaboration Type</div>
                <div class="field-value"><span class="badge">${collaborationType}</span></div>
              </div>
              <div class="field-group">
                <div class="field-label">Location</div>
                <div class="field-value">${location}</div>
              </div>
              <div class="description-section">
                <span class="description-label">Message</span>
                <div class="description-value">${description}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Reply to ${emailAddress} to get in touch.</p>
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
            .points { margin: 25px 0; padding-left: 20px; }
            .points li { margin-bottom: 12px; color: #555; line-height: 1.6; }
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
              <h1>Thank You for Applying!</h1>
              <p>We've received your partnership request</p>
            </div>
            <div class="content">
              <div class="greeting">
                Hi <span class="highlight">${fullName}</span>,
              </div>
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin-bottom: 20px;">
                Thank you for your interest in partnering with Frovo! We're excited about the possibility of collaborating with you. Your application has been successfully submitted and received.
              </p>
              
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 20px 0;">
                <strong>Here's what happens next:</strong>
              </p>
              <ul class="points" style="list-style: none; color: #555; font-size: 15px;">
                <li>Our team will review your partnership request</li>
                <li>We'll evaluate your proposal thoroughly</li>
                <li>You'll hear back from us within 3-5 business days</li>
              </ul>

              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 25px 0;">
                In the meantime, if you have any questions, feel free to reach out to us at <strong>hello@frovo.in</strong>
              </p>

              <div style="text-align: center;">
                <a href="https://frovo.in" class="cta-button">Visit Our Website</a>
              </div>

              <p style="color: #888; font-size: 13px; line-height: 1.6; margin-top: 30px; text-align: center;">
                We appreciate your interest and look forward to the possibility of working together!
              </p>
            </div>
            <div class="footer">
              <p><strong>Frovo - Your Partnership Partner</strong></p>
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
      subject: `New Partnership Request from ${fullName}`,
      html: adminEmailHtml,
      attachments,
    });

    // ============ SEND EMAIL 2 (TO USER) ============
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailAddress,
      subject: `Thank You for Your Partnership Application - Frovo`,
      html: userEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully to both parties",
    });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send emails", details: error.message },
      { status: 500 }
    );
  }
}
