const Job = require('../models/Job');
const Application = require('../models/Application');

exports.createJob = async (req, res) => {
    try {
        const jobData = req.body;
        jobData.jobCode = `ODA${Math.floor(1000 + Math.random() * 9000)}`;
        jobData.keywords = [
            ...new Set([
                ...jobData.jobTitle.toLowerCase().split(' '),
                ...jobData.department.toLowerCase().split(' '),
                ...jobData.category.toLowerCase().split(' '),
                ...jobData.companyName.toLowerCase().split(' ')
            ])
        ];
        const newJob = new Job(jobData);
        await newJob.save();
        res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
        res.status(400).json({ message: 'Error creating job', error: error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ updatedOn: -1 });
        res.json({ count: jobs.length, jobs });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
};

exports.getJobDetails = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job details', error: error.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job updated successfully', job });
    } catch (error) {
        res.status(400).json({ message: 'Error updating job', error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error: error.message });
    }
};

exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.jobId }).sort({ appliedOn: -1 });
        res.json({ count: applications.length, applications });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error: error.message });
    }
};

exports.getApplicationDetails = async (req, res) => {
    try {
        const application = await Application.findById(req.params.applicationId);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching application details', error: error.message });
    }
};
