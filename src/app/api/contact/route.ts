import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, userType, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "Frovo Contact <onboarding@resend.dev>",
      to: ["yatishsc22hcompe@student.mes.ac.in"],
      replyTo: email,
      subject: `New ${userType} Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
          <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h2 style="color: #FF6B2B; border-bottom: 3px solid #FFD700; padding-bottom: 10px; margin-bottom: 20px;">
               New ${userType} Contact
            </h2>
            
            <div style="background: #FFF5F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #FF6B2B;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #FF6B2B;">Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #FF6B2B;">Type:</strong> ${userType}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #FF6B2B;">
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #666;">${message}</p>
              </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            
            <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
              Sent from Frovo Contact Form on ${new Date().toLocaleString(
                "en-IN",
                { timeZone: "Asia/Kolkata" }
              )} IST
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
