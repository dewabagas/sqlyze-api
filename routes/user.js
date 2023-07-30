const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')
const profileController = require('../controllers/profile.controller')
const user = require('../middlewares/user');
const middleware = require('../middlewares/auth');
const { verify } = require('../middlewares/auth');
const upload = require('../middlewares/multer.middleware');

router.post('/register', user.validateUserRegister, controller.register);
router.post('/login', user.validateUserLogin, controller.login);
router.get('/profile', verify, profileController.getProfile);
router.put('/profile/edit', verify, upload.single('profile_image'), profileController.updateProfile);

module.exports = router;