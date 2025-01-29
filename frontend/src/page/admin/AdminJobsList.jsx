import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useJobContext } from '../../context/JobContext';

const AdminJobsList = () => {
  const { state, fetchJobs, deleteJob } = useJobContext();
  const { jobs, loading, error, isCreating } = state;

  useEffect(() => {
    if (!jobs.length) {
      fetchJobs();
    }
  }, []);

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteJob(jobId);
    }
  };

  // Only show loading state when initially loading jobs, not during creation
  if (loading && !jobs.length) return <div className="text-center p-4">Loading jobs...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-0">Job Listings</h1>
        <Link 
          to="/admin/jobs/create" 
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-center"
        >
          Create New Job
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Hide table on mobile, show cards instead */}
        <div className="hidden sm:block">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-2 md:p-3 text-left text-sm">Job Code</th>
                <th className="p-2 md:p-3 text-left text-sm">Job Title</th>
                <th className="p-2 md:p-3 text-left text-sm">Department</th>
                <th className="p-2 md:p-3 text-left text-sm">Category</th>
                <th className="p-2 md:p-3 text-left text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(jobs) && jobs.map((job) => (
                <tr key={job._id} className="border-b hover:bg-gray-50">
                  <td className="p-2 md:p-3 text-sm">{job.jobCode}</td>
                  <td className="p-2 md:p-3 text-sm">{job.jobTitle}</td>
                  <td className="p-2 md:p-3 text-sm">{job.department}</td>
                  <td className="p-2 md:p-3 text-sm">{job.category}</td>
                  <td className="p-2 md:p-3 text-sm space-x-2">
                    <Link 
                      to={`/admin/jobs/edit/${job._id}`} 
                      className="text-green-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDeleteJob(job._id)} 
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show cards on mobile */}
        <div className="sm:hidden">
          {Array.isArray(jobs) && jobs.map((job) => (
            <div key={job._id} className="border-b p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">{job.jobTitle}</div>
                <div className="text-sm text-gray-600">{job.jobCode}</div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <div>Department: {job.department}</div>
                <div>Category: {job.category}</div>
              </div>
              <div className="flex space-x-4 mt-2">
                <Link 
                  to={`/admin/jobs/edit/${job._id}`} 
                  className="text-green-500 text-sm hover:underline"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDeleteJob(job._id)} 
                  className="text-red-500 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {(!Array.isArray(jobs) || jobs.length === 0) && (
          <div className="text-center p-4 text-gray-500 text-sm">
            No jobs found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJobsList;