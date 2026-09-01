const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "build")));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email address
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Configuration Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

// POST endpoint for consultation form
app.post("/api/consultation", async (req, res) => {
  try {
    const { name, phone, email, course } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !course) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Company email address (where the consultation request will be sent)
    // Uses COMPANY_EMAIL if set, otherwise falls back to SMTP_USER (same email for sending/receiving)
    const companyEmail =
      process.env.COMPANY_EMAIL ||
      process.env.SMTP_USER ||
      "info@globalvisionedu.com";

    // Email content
    // Send email FROM company email TO company email
    // Reply-To is set to user's email so replies go directly to the user
    const mailOptions = {
      from: `"${process.env.SENDER_NAME || "Global Vision Education"}" <${process.env.SMTP_USER}>`, // From company email (matches SMTP auth)
      to: companyEmail, // Company receives the email
      replyTo: `${name} <${email}>`, // Replies go directly to the user
      subject: `New Free Consultation Request - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
              }
              .header {
                background: linear-gradient(180deg, #006772 0%, #06B795 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .content {
                padding: 20px 0;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f9f9f9;
                border-left: 4px solid #006772;
              }
              .field-label {
                font-weight: bold;
                color: #006772;
                margin-bottom: 5px;
              }
              .field-value {
                color: #333;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Free Consultation Request</h2>
              </div>
              <div class="content">
                <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #006772;">
                  <p style="margin: 0; font-weight: bold; color: #006772; font-size: 14px;">📧 Contact Information:</p>
                  <p style="margin: 5px 0 0 0; color: #0F242E; font-size: 16px;"><strong>${name}</strong> - <a href="mailto:${email}" style="color: #006772; text-decoration: none;">${email}</a></p>
                </div>
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #006772; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Phone Number:</div>
                  <div class="field-value">${phone}</div>
                </div>
                <div class="field">
                  <div class="field-label">Course Interest:</div>
                  <div class="field-value">${course}</div>
                </div>
              </div>
              <div class="footer">
                <p>This consultation request was submitted through the Global Vision Education website.</p>
                <p style="background-color: #d1fae5; padding: 10px; border-radius: 6px; margin-top: 10px;">
                  <strong>💬 Reply to this email to respond directly to ${name} at ${email}</strong>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Free Consultation Request
        
        Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Course Interest: ${course}
        
        This consultation request was submitted through the Global Vision Education website.
        Reply to this email to contact: ${name} (${email})
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    // Send success response
    res.status(200).json({
      success: true,
      message:
        "Consultation request submitted successfully. We will contact you soon!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit consultation request. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// POST endpoint for contact form
app.post("/api/contact", async (req, res) => {
  console.log("\n=== CONTACT FORM SUBMISSION RECEIVED ===");
  console.log("Timestamp:", new Date().toISOString());
  console.log("Request body:", JSON.stringify(req.body, null, 2));
  console.log("SMTP_USER:", process.env.SMTP_USER ? "Set" : "NOT SET");
  console.log("SMTP_PASS:", process.env.SMTP_PASS ? "Set" : "NOT SET");
  console.log(
    "COMPANY_EMAIL:",
    process.env.COMPANY_EMAIL || "Not set (using SMTP_USER)",
  );

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject, and message are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Company email address (where the contact request will be sent)
    // Uses COMPANY_EMAIL if set, otherwise falls back to SMTP_USER (same email for sending/receiving)
    const companyEmail =
      process.env.COMPANY_EMAIL ||
      process.env.SMTP_USER ||
      "info@globalvisionedu.com";

    console.log("Company email (recipient):", companyEmail);
    console.log("SMTP user (sender):", process.env.SMTP_USER);
    console.log("User email (reply-to):", email);

    // Email content
    // Send email FROM company email TO company email
    // Reply-To is set to user's email so replies go directly to the user
    const mailOptions = {
      from: `"${process.env.SENDER_NAME || "Global Vision Education"}" <${process.env.SMTP_USER}>`, // From company email (matches SMTP auth)
      to: companyEmail, // Company receives the email
      replyTo: `${name} <${email}>`, // Replies go directly to the user
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
              }
              .header {
                background: linear-gradient(180deg, #006772 0%, #06B795 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .content {
                padding: 20px 0;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f9f9f9;
                border-left: 4px solid #006772;
              }
              .field-label {
                font-weight: bold;
                color: #006772;
                margin-bottom: 5px;
              }
              .field-value {
                color: #333;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #006772;">
                  <p style="margin: 0; font-weight: bold; color: #006772; font-size: 14px;">📧 Contact Information:</p>
                  <p style="margin: 5px 0 0 0; color: #0F242E; font-size: 16px;"><strong>${name}</strong> - <a href="mailto:${email}" style="color: #006772; text-decoration: none;">${email}</a></p>
                </div>
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #006772; text-decoration: none;">${email}</a></div>
                </div>
                ${
                  phone
                    ? `
                <div class="field">
                  <div class="field-label">Phone Number:</div>
                  <div class="field-value">${phone}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="field-label">Subject:</div>
                  <div class="field-value">${subject}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This contact form submission was sent through the Global Vision Education website.</p>
                <p style="background-color: #d1fae5; padding: 10px; border-radius: 6px; margin-top: 10px;">
                  <strong>💬 Reply to this email to respond directly to ${name} at ${email}</strong>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone Number: ${phone}` : ""}
        Subject: ${subject}
        Message: ${message}
        
        This contact form submission was sent through the Global Vision Education website.
        Reply to this email to contact: ${name} (${email})
      `,
    };

    // Send email
    console.log("Attempting to send email...");
    console.log("Email to:", companyEmail);
    console.log("Email from:", process.env.SMTP_USER);
    console.log("Reply-To:", `${name} <${email}>`);

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Contact form email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Email response:", info.response);

    // Send success response
    res.status(200).json({
      success: true,
      message: "Thank you for your message! We will respond within 24 hours.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ ERROR sending contact form email:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error response:", error.response);
    console.error("Full error:", error);

    // More detailed error handling
    let errorMessage = "Failed to send your message. Please try again later.";

    if (error.code === "EAUTH") {
      errorMessage =
        "Email authentication failed. Please check SMTP credentials.";
      console.error(
        "⚠️ SMTP Authentication Error - Check your .env file SMTP_USER and SMTP_PASS",
      );
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "Cannot connect to email server. Please check SMTP settings.";
      console.error("⚠️ SMTP Connection Error - Check SMTP_HOST and SMTP_PORT");
    } else if (error.response) {
      console.error("SMTP Response Error:", error.response);
      errorMessage = `Email server error: ${error.response}`;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
