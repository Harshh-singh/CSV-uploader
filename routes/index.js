const express = require('express');
const router = express.Router();
const multer = require('multer');

const homepage = require('../controllers/homepage_controller');

router.get('/', homepage.home);

router.use('/file', require('./file'));

module.exports = router;