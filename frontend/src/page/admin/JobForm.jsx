import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJobContext } from '../../context/JobContext';

const JobForm = () => {
  const { state, createJob, updateJob } = useJobContext();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const isEditMode = !!jobId;

  const [jobData, setJobData] = useState({
    jobTitle: '',
    rankVessel: '',
    rank: '',
    department: 'Deck',
    category: 'Mainfleet',
    type: 'Full Time',
    companyName: '',
    jobDescription: '',
    location: '',
    qualification: '',
    experience: ''
  });

  useEffect(() => {
    if (isEditMode) {
      const existingJob = state.jobs.find(job => job._id === jobId);
      if (existingJob) {
        setJobData({
          jobTitle: existingJob.jobTitle,
          rankVessel: existingJob.rankVessel,
          rank: existingJob.rank,
          department: existingJob.department,
          category: existingJob.category,
          type: existingJob.type,
          companyName: existingJob.companyName,
          jobDescription: existingJob.jobDescription,
          location: existingJob.location || '',
          qualification: existingJob.qualification || '',
          experience: existingJob.experience || ''
        });
      }
    }
  }, [jobId, state.jobs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateJob(jobId, jobData);
      } else {
        await createJob(jobData);
      }
      navigate('/admin/jobs');
    } catch (error) {
      console.error('Error saving job', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? 'Edit Job' : 'Create New Job'}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={jobData.jobTitle}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Rank Vessel</label>
            <input
              type="text"
              name="rankVessel"
              value={jobData.rankVessel}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Rank</label>
            <input
              type="text"
              name="rank"
              value={jobData.rank}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={jobData.companyName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
            <select
              name="department"
              value={jobData.department}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="Deck">Deck</option>
              <option value="Engine">Engine</option>
              <option value="Navigation">Navigation</option>
              <option value="Catering">Catering</option>
              <option value="Communication">Communication</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <select
              name="category"
              value={jobData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="Mainfleet">Mainfleet</option>
              <option value="Offshore">Offshore</option>
              <option value="Oil and Gas">Oil and Gas</option>
              <option value="Shore Jobs">Shore Jobs</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Type</label>
            <select
              name="type"
              value={jobData.type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Description</label>
            <textarea
              name="jobDescription"
              value={jobData.jobDescription}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-24"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={jobData.qualification}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={jobData.experience}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isEditMode ? 'Update Job' : 'Create Job'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/jobs')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;