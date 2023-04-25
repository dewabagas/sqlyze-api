
const Joi = require('joi')

exports.validateUserRegister = async (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        full_name: Joi.string().required(),
        nis: Joi.string()
            .required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required(),
        role_id: Joi.number().integer().required(),
        class_id: Joi.number().integer().required(),
        profile_image: Joi.string().required(),
        msisdn: Joi.number().integer().required(),
    });
    if (schema.validate(req.body).error) {
        res.json({ error: schema.validate(req.body).error.message });
    } else {
        next();
    }
};

exports.validateUserLogin = async (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required(),
    });
    if (schema.validate(req.body).error) {
        res.json({ error: schema.validate(req.body).error.message });
    } else {
        next();
    }
};

exports.validateUserUpdate = async (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        full_name: Joi.string().required(),
        username: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required(),
        profile_image_url: Joi.string().required(),
        age: Joi.number().integer().required(),
        phone_number: Joi.number().integer().required(),
    });
    if (schema.validate(req.body).error) {
        res.json({ error: schema.validate(req.body).error.message });
    } else {
        next();
    }
};