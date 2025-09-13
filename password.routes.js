const express = require("express");
const router = express.Router();
const { savePassword, getPasswords, deletePassword } = require("../controllers/password.controller");
const authMiddleware = require("../middleware/authMiddleware");

// Save password
router.post("/", authMiddleware, savePassword);

// Get passwords by user (old route)
router.get("/", authMiddleware, getPasswords);

//  Get all passwords (same function, just cleaner route)
router.get("/all", authMiddleware, getPasswords);

//  Delete password by ID
router.delete("/:id", authMiddleware, deletePassword);

module.exports = router;
