const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');
require('dotenv').config();
const upload = require('../middlewares/multer.middleware');

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

exports.updateProfile = async (req, res) => {
  const userId = req.id;
  const { full_name, email, nis, msisdn, birthdate, gender } = req.body;
  let profile_image_url = req.file ? req.file.path : null;

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedProfileData = { full_name, email, nis, msisdn, birthdate, gender };
    if (profile_image_url) updatedProfileData.profile_image_url = 'https://sqlyze-api.onrender.com/' + profile_image_url;

    const profile = await Profile.update(updatedProfileData,
      { where: { user_id: user.id } },
      { returning: true } // This will return the updated profile
    );

    if (!profile) {
      return res.status(400).json({ message: 'Failed to update profile' });
    }

    return res.status(200).json({
      status: 'SUCCESS',
      code: 200,
      message: 'Profile updated successfully',
      result: profile,
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: 'FAILED',
      message: 'Failed to update profile',
      error: error.message,
    });
  }
};


