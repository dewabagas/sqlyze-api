const bcrypt = require('bcrypt');
const { User, Profile, UserMaterial } = require('../models');
const { generateToken } = require("../middlewares/auth");

exports.register = async (req, res) => {
  const { full_name, email, nis, password, role, msisdn, birthdate, gender, profile_image_url } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({ email, password: hash, role });

    if (user) {
      const profile = await Profile.create({
        user_id: user.id,
        full_name,
        nis,
        email,
        msisdn,
        birthdate,
        gender,
        profile_image_url
      });

      await UserMaterial.create({
        user_id: user.id,
        material_id: 1,  // ID of the first learning material
        is_unlocked: true
      });

      const token = generateToken({ id: user.id, email: user.email });

      return res.status(201).json({
        status: 'SUCCESS',
        code: 200,
        message: 'User created',
        result: user,
        profile,
        token,
      });
    }

  } catch (error) {
    console.error(error);
    return res.status(503).json({ message: 'User creation failed' });
  }
};



exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    const token = generateToken({ id: user.id, email: user.email });

    return res.status(200).json({
      status: 'SUCCESS',
      code: 200,
      message: 'Login successful',
      result: user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
};
