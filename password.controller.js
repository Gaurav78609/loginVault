const Password = require("../models/Password");

// Save Password
exports.savePassword = async (req, res) => {
  const { title, username, password } = req.body;
  try {
    const newPass = new Password({
      user: req.user.id,
      title,
      username,
      password,
    });
    await newPass.save();
    res.json(newPass);
  } catch (err) {
    res.status(500).json({ msg: "Error saving password" });
  }
};

// Get All Passwords
exports.getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ user: req.user.id });
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching passwords" });
  }
};

//  DELETE Password by ID
exports.deletePassword = async (req, res) => {
  const id = req.params.id;
  try {
    const password = await Password.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!password) {
      return res.status(404).json({ msg: "Password not found" });
    }

    res.json({ msg: "Password deleted successfully", id });
  } catch (err) {
    console.error("❌ Error deleting password:", err.message);
    res.status(500).json({ msg: "Error deleting password" });
  }
};
