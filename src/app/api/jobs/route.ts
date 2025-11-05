import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const linkedin = formData.get("linkedin") as string;
    const resume = formData.get("resume") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const resumeAttachments = [];
    if (resume) {
      const buffer = await resume.arrayBuffer();
      resumeAttachments.push({
        filename: resume.name,
        content: Buffer.from(buffer),
      });
    }

    // ============ EMAIL 1: TO YOU (HR) ============
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
            .footer { background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
            .badge { display: inline-block; background-color: #FF6B2B; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Job Application</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Position: ${position}</p>
            </div>
            <div class="content">
              <p style="color: #666; font-size: 14px; margin-bottom: 20px; line-height: 1.6;">
                A new candidate has applied for the position. Here are their details:
              </p>
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #FF6B2B; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phoneNumber}" style="color: #FF6B2B; text-decoration: none;">${phoneNumber}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Position Applied For</div>
                <div class="field-value"><span class="badge">${position}</span></div>
              </div>
              <div class="field-group">
                <div class="field-label">Years of Experience</div>
                <div class="field-value">${experience} years</div>
              </div>
              ${
                linkedin
                  ? `
                <div class="field-group">
                  <div class="field-label">LinkedIn Profile</div>
                  <div class="field-value"><a href="${linkedin}" target="_blank" style="color: #FF6B2B; text-decoration: none;">View LinkedIn</a></div>
                </div>
              `
                  : ""
              }
              ${
                resume
                  ? `
                <div class="field-group">
                  <div class="field-label">Resume</div>
                  <div class="field-value">Resume attached: ${resume.name}</div>
                </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              <p style="margin: 0;">Review this application and contact the candidate at ${email}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // ============ EMAIL 2: TO CANDIDATE ============
    const candidateEmailHtml = `
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
              <h1>Application Received!</h1>
              <p>We've got your application for ${position}</p>
            </div>
            <div class="content">
              <div class="greeting">
                Hi <span class="highlight">${fullName}</span>,
              </div>
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin-bottom: 20px;">
                Thank you for applying to the <strong>${position}</strong> position at Frovo! We're impressed by your interest in joining our team. Your application has been successfully submitted and received.
              </p>
              
              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 20px 0;">
                <strong>Here's what happens next:</strong>
              </p>
              <ul class="points" style="list-style: none; color: #555; font-size: 15px;">
                <li>Our HR team will review your application</li>
                <li>We'll evaluate your resume and experience</li>
                <li>If we're interested, we'll contact you within 5-7 business days</li>
              </ul>

              <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 25px 0;">
                In the meantime, feel free to explore more about Frovo and our culture. If you have any questions, reach out to us at <strong>join@frovo.in</strong>
              </p>

              <div style="text-align: center;">
                <a href="https://frovo.in" class="cta-button">Learn More About Frovo</a>
              </div>

              <p style="color: #888; font-size: 13px; line-height: 1.6; margin-top: 30px; text-align: center;">
                We appreciate your interest in Frovo and wish you the best with your application!
              </p>
            </div>
            <div class="footer">
              <p><strong>Frovo - Building Amazing Teams</strong></p>
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

    // ============ SEND EMAIL 1 (TO HR) ============
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Job Application for ${position} - ${fullName}`,
      html: adminEmailHtml,
      attachments: resumeAttachments,
    });

    // ============ SEND EMAIL 2 (TO CANDIDATE) ============
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your Application Received - ${position} - Frovo`,
      html: candidateEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to submit application", details: error.message },
      { status: 500 }
    );
  }
}
