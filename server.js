const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/authApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(bodyParser.json());

// Sign Up Route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).send("User created");
});

// Log In Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY);
  res.status(200).json({ token, username: user.username });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
