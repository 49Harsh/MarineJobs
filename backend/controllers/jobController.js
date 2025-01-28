const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    try {
        const jobData = req.body;
        
        // Generate unique job code
        jobData.jobCode = `ODA${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Add keywords for better searchability
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

        // Get the complete job document
        const completeJob = await Job.findById(newJob._id)
            .lean()
            .exec();

        res.status(201).json({
            success: true,
            message: 'Job created successfully',
            job: completeJob
        });
    } catch (error) {
        console.error('Job Creation Error:', error);
        res.status(400).json({ 
            success: false,
            message: 'Error creating job', 
            error: error.message 
        });
    }
};

exports.searchJobs = async (req, res) => {
    try {
        const { 
            keyword, 
            category, 
            department, 
            minExperience 
        } = req.query;

        let query = {};

        if (keyword) {
            query.$text = { $search: keyword };
        }

        if (category) {
            query.category = category;
        }

        if (department) {
            query.department = department;
        }

        if (minExperience) {
            query.experience = { $gte: minExperience };
        }

        const jobs = await Job.find(query)
            .sort({ updatedOn: -1 })
            .limit(50);

        res.json({
            count: jobs.length,
            jobs
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error searching jobs', 
            error: error.message 
        });
    }
};

exports.getJobDetails = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        
        if (!job) {
            return res.status(404).json({ 
                message: 'Job not found' 
            });
        }

        res.json(job);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching job details', 
            error: error.message 
        });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
            .sort({ updatedOn: -1 })
            .select('-__v')
            .lean();

        // Add cache headers
        res.set('Cache-Control', 'public, max-age=300'); // 5 minutes cache

        res.json({
            success: true,
            count: jobs.length,
            jobs
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Error fetching jobs', 
            error: error.message 
        });
    }
};