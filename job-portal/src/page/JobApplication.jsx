import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import { Building, MapPin, Clock, FileUp } from 'lucide-react';
import { submitApplication } from '../services/applicationService';

const JobApplication = () => {
  const { jobId } = useParams();
  const { state } = useJobContext();
  const job = state.jobs.find(j => j._id === jobId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
    phoneNumber: '',
    referralSource: 'Direct',
    resume: null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'resume' && formData[key]) {
          formDataToSend.append('resume', formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Add jobId to formData
      formDataToSend.append('jobId', jobId);

      const response = await submitApplication(formDataToSend);
      
      if (response.success) {
        alert('Application submitted successfully!');
        navigate('/jobs'); // Redirect to jobs page
      } else {
        throw new Error(response.message || 'Failed to submit application');
      }
    } catch (err) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  if (!job) {
    return <div className="text-center py-8">Job not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Job Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{job.jobTitle}</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-gray-600" />
              <span>{job.companyName}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <span>Experience: {job.experience}</span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Job Description</h3>
              <p className="text-gray-600 whitespace-pre-line">{job.jobDescription}</p>
            </div>
          </div>
        </div>

        {/* Right side - Application Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply for this position</h2>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="Direct">Direct</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resume
              </label>
              <div className="flex items-center space-x-2">
                <label className="cursor-pointer bg-gray-50 px-4 py-2 rounded border hover:bg-gray-100">
                  <FileUp className="inline-block w-5 h-5 mr-2" />
                  Upload Resume
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                  />
                </label>
                {formData.resume && (
                  <span className="text-sm text-gray-600">
                    {formData.resume.name}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
