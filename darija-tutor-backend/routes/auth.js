const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  // Handle user registration
});

router.post("/login", async (req, res) => {
  // Handle user login
});

module.exports = router;
