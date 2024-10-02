const express = require("express");
const { home, createUser, getUsers, editUser, deleteUser } = require("../controllers/user_contorller.js"); // Fixed typo

const router = express.Router();

// Define routes
router.get("/", home);
router.post("/users", createUser); // Changed to /users for consistency
router.get("/getusers", getUsers)
router.put("/edituser/:id", editUser)
router.delete("/deleteuser/:id", deleteUser)



module.exports = router;
