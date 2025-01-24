const Job = require('../models/Job');
const Application = require('../models/Application');

exports.createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: 'Error creating job', error: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const { 
      category, 
      department, 
      type, 
      keyword, 
      minExperience, 
      location 
    } = req.query;

    let query = { isActive: true };

    // Keyword search
    if (keyword) {
      query.$text = { $search: keyword };
    }

    // Filtering options
    if (category) query.category = category;
    if (department) query.department = department;
    if (type) query.type = type;
    if (minExperience) query.experience = { $gte: minExperience };
    if (location) query.location = { $regex: location, $options: 'i' };

    const jobs = await Job.find(query)
      .sort({ updatedOn: -1 })
      .limit(50);

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job details', error: error.message });
  }
};

exports.createApplication = async (req, res) => {
    try {
        const applicationData = req.body;
        const newApplication = new Application(applicationData);
        await newApplication.save();

        res.status(201).json({
            message: 'Application submitted successfully',
            application: newApplication
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error submitting application', 
            error: error.message 
        });
    }
};