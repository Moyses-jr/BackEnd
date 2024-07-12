const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const users = [];

router.post(
  "/register",
  [body("username").notEmpty(), body("password").isLength({ min: 6 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { username, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: "User registered successfully" });
  }
);

// Login de usuário
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const accessToken = jwt.sign(
    { username: user.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ accessToken });
});

module.exports = router;
