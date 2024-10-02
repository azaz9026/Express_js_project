const express = require("express");
const { home, createUser } = require("../controllers/user_contorller.js"); // Fixed typo

const router = express.Router();

// Define routes
router.get("/", home);
router.post("/users", createUser); // Changed to /users for consistency

module.exports = router;
