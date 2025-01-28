const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const applicationController = require('../controllers/applicationController');

// Submit new application with resume
router.post('/', upload.single('resume'), applicationController.createApplication);

// Get applications by job ID
router.get('/job/:jobId', async (req, res) => {
  try {
    // Add your logic to fetch applications here
    res.json({ applications: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;