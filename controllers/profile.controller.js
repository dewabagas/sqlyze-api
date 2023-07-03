const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');
require('dotenv').config();

exports.getProfile = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    const user = await User.findOne({ 
      where: { id: decoded.id },
      include: Profile
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      status: 'SUCCESS',
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
