import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Configure the nodemailer transporter
    // Note: Since you are using Gmail, you MUST generate an "App Password" 
    // inside your Google Account Security settings. Standard passwords will not work.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kinjawadekaradi112@gmail.com",
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    });

    // Read the HTML template from the root directory
    const templatePath = path.join(process.cwd(), "template.html");
    const htmlTemplate = fs.readFileSync(templatePath, "utf-8");

    // Send the email to the user who requested the demo
    await transporter.sendMail({
      from: '"nexalaya Team" <kinjawadekaradi112@gmail.com>',
      to: email, 
      subject: "Your nexalaya Campus Demo Request",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please check server logs." },
      { status: 500 }
    );
  }
}
