const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

// @desc    Register new user
// @route   POST /api/signup
// @access  Public
const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists with this email.' });
    }

    // Create user
    const user = await User.create({ name, email, password });

    res.status(201).json({
      message: 'Signup successful.',
      token: generateToken(user._id),
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error); // handled by error middleware
  }
};

// @desc    Login user
// @route   POST /api/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter email and password.' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.json({
      message: 'Login successful.',
      token: generateToken(user._id),
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error); // handled by error middleware
  }
};


module.exports = {
  signup,
  login
};