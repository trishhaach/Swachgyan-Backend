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
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address from environment variable
        pass: process.env.EMAIL_PASS  // Your Gmail password from environment variable
      }
    });

    const mailOptions = {
      from: email, // Sender email address (the user who filled out the form)
      to: 'swachyaan@gmail.com', // Receiver email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ message: "Contact form submitted successfully" });
      }
    });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
