const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Jobs routes
router.post('/jobs', adminController.createJob);
router.get('/jobs', adminController.getJobs);
router.get('/jobs/:jobId', adminController.getJobDetails);
router.put('/jobs/:jobId', adminController.updateJob);
router.delete('/jobs/:jobId', adminController.deleteJob);
router.get('/jobs/:jobId/applications', adminController.getApplications);
router.get('/applications/:applicationId', adminController.getApplicationDetails);

// Applications routes
router.get('/applications', adminController.getAllApplications);
router.get('/applications/:applicationId', adminController.getApplicationDetails);
router.patch('/applications/:applicationId', adminController.updateApplicationStatus);

module.exports = router;
