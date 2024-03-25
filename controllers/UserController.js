const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.register = async (req, res) => {
  try {
    // Check if user exists
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) return res.status(400).send('Username already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.send({ user: savedUser });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Username not found');

    // Check password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header('Authorization', token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
};
