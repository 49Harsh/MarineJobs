const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const Application = require('../models/Application'); // Add this line
const applicationController = require('../controllers/applicationController');

// Submit new application with resume
router.post('/', upload.single('resume'), applicationController.createApplication);

// Get applications by job ID
router.get('/job/:jobId', async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId })
      .populate('jobId', 'jobTitle')
      .sort({ appliedOn: -1 });
    
    console.log(`Found ${applications.length} applications for job ${req.params.jobId}`);
    res.json({ applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: error.message });
  }
});

// Delete application by ID
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;