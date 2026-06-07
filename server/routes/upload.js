const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadResume } = require('../controllers/uploadController');

router.post('/resume', upload.single('resume'), uploadResume);

module.exports = router;
