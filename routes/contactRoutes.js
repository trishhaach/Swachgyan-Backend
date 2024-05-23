const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");

// Route to submit contact form
router.post("/", contactControllers.submitContactForm);

module.exports = router;
