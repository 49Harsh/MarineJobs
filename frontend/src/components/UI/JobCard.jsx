import React from 'react';
import { Anchor, Building, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/apply/${job._id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.jobTitle}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <Building className="w-4 h-4 mr-2" />
            {job.companyName}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Anchor className="text-slate-800 mb-2" size={20} />
          <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {job.jobCode}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {job.location || 'Location not specified'}
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          Experience: {job.experience || 'Not specified'}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.department && (
          <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
            {job.department}
          </span>
        )}
        {job.category && (
          <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
            {job.category}
          </span>
        )}
        {job.type && (
          <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
            {job.type}
          </span>
        )}
      </div>

      <p className="mt-4 text-gray-600 line-clamp-2">
        {job.jobDescription}
      </p>

      <button 
        onClick={handleApply}
        className="mt-4 w-full bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-700 transition-colors duration-300"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;