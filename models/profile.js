'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    nis: DataTypes.STRING,
    email: DataTypes.STRING,
    msisdn: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    profile_image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
    underscored: true
  });
  return Profile;
};

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

      // Unlock the first learning material for this user
      await UserMaterial.create({
        userId: user.id,
        materialId: 1,  // ID of the first learning material
        isUnlocked: true
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