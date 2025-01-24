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
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <Link 
          to="/admin/jobs/create" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create New Job
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Job Code</th>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(jobs) && jobs.map((job) => (
              <tr key={job._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{job.jobCode}</td>
                <td className="p-3">{job.jobTitle}</td>
                <td className="p-3">{job.department}</td>
                <td className="p-3">{job.category}</td>
                <td className="p-3 space-x-2">
                  <Link 
                    to={`/admin/jobs/${job._id}`} 
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
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
        {(!Array.isArray(jobs) || jobs.length === 0) && (
          <div className="text-center p-4 text-gray-500">
            No jobs found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJobsList;