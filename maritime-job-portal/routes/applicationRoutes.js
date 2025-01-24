const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const applicationController = require('../controllers/applicationController');

// Submit new application
router.post('/:jobId', upload.single('resume'), async (req, res) => {
  try {
    // Add your application submission logic here
    res.json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get applications by job ID
router.get('/job/:jobId', async (req, res) => {
  try {
    // Add your logic to fetch applications here
    res.json({ applications: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', applicationController.createApplication);

module.exports = router;