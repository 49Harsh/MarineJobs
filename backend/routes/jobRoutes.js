const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Correctly define route handlers
router.post('/', jobController.createJob);
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJobDetails);
router.get('/search', jobController.searchJobs);

module.exports = router;