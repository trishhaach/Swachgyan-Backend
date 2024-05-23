const nodemailer = require("nodemailer");
const ContactModel = require("../models/contactmodel");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (message.split(/\s+/).length > 100) {
      return res.status(400).json({ message: "Message exceeds 100 words limit" });
    }

    const newSubmission = new ContactModel({ name, email, subject, message });
    await newSubmission.save();

    // Sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail.com',
      port:465,
      secure:false,
      auth: {
        user: 'swachgyaan@gmail.com',
        pass: 'agdg jsut iwss zecr', // Your Gmail password from environment variable
      }
    });
    await transporter.sendMail({
      from: email, // Sender email address (the user who filled out the form)
      to: 'swachgyaan@gmail.com', // Receiver email address
      subject: subject,
      text: `Message: ${message}`
    });

    console.log("Confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw new Error("Error occurred while sending confirmation email.");
  }
}