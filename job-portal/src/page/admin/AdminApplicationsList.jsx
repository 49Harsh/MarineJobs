import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../../context/JobContext';

const AdminApplicationsList = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { state, fetchJobApplications } = useJobContext();
  const { applications, loading, error } = state;

  useEffect(() => {
    if (jobId) {
      fetchJobApplications(jobId);
    }
  }, [jobId]);

  const renderApplicationStatus = (status) => {
    const statusColors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Reviewed': 'bg-blue-100 text-blue-800',
      'Shortlisted': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-2 py-1 rounded text-xs ${statusColors[status]}`}>
        {status}
      </span>
    );
  };

  if (loading) return <div className="text-center p-4">Loading applications...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <button 
          onClick={() => navigate('/admin/jobs')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back to Jobs
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Applied On</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{application.fullName}</td>
                <td className="p-3">{application.email}</td>
                <td className="p-3">
                  {new Date(application.appliedOn).toLocaleDateString()}
                </td>
                <td className="p-3">
                  {renderApplicationStatus(application.status)}
                </td>
                <td className="p-3 space-x-2">
                  <button 
                    onClick={() => navigate(`/admin/applications/${application._id}`)}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {applications.length === 0 && (
          <div className="text-center p-4 text-gray-500">
            No applications found for this job
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApplicationsList;