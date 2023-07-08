const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');
require('dotenv').config();

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.id },
      include: Profile
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      status: 'SUCCESS',
      code: 200,
      message: 'Profile fetched successfully',
      result: user.Profile,
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      status: "FAILED",
      message: "Profile fetching failed",
      error: error.message,
    });
  }
};

