const express = require('express');
const multer = require('multer');
const router = express.Router();
const files = require('../controllers/filecontroller');

const upload = multer({dest: 'uploads'});



router.post('/upload', upload.single('csv-file'), files.upload);

router.get('/delete/:id', files.delete);

router.get('/view/:id', files.view);


module.exports = router;