const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');
require('dotenv').config();
const upload = require('../middlewares/multer.middleware');
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');

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
  const { full_name, email, nis, msisdn, birthdate, gender, profile_image } = req.body;

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let profile_image_url;
    if (profile_image) {
      // Convert base64 image to raw buffer
      const imageBuffer = Buffer.from(profile_image, 'base64');

      // Generate a unique file name
      const fileName = `profile_image_${new Date().getTime()}.png`; // Or jpg, or whatever format the image is

      // Define the directory
      const dir = path.join(__dirname, '../public/uploads/');

      // Create directory if it doesn't exist
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the image file to your server's disk
      fs.writeFileSync(path.join(dir, fileName), imageBuffer);
      profile_image_url = `https://sqlyze-api.onrender.com/uploads/${fileName}`;
    }

    const updatedProfileData = { full_name, email, nis, msisdn, birthdate, gender };
    if (profile_image_url) updatedProfileData.profile_image_url = profile_image_url;

    const profile = await Profile.update(updatedProfileData,
      { where: { user_id: userId } },
      { returning: true }
    );

    if (!profile || profile[0] === 0) {
      return res.status(400).json({ message: 'Failed to update profile' });
    }

    const updatedProfile = await Profile.findOne({ where: { user_id: userId } });

    return res.status(200).json({
      status: 'SUCCESS',
      code: 200,
      message: 'Profile updated successfully',
      result: updatedProfile,
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



