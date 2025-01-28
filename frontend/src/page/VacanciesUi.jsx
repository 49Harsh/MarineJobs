import React, { useEffect, useState } from 'react';
import { Ship } from 'lucide-react';
import JobCard from '../components/UI/JobCard';
import { useJobContext } from '../context/JobContext';

const VacanciesUi = () => {
  const { state, fetchJobs } = useJobContext();
  const { jobs, loading, error } = state;
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      // Force refresh on every mount
      await fetchJobs(true);
      setIsInitialLoad(false);
    };

    loadJobs();
    
    // Add interval to refresh data every 5 minutes
    const refreshInterval = setInterval(() => {
      fetchJobs(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []); // Remove fetchJobs from dependency array to ensure fresh data on every mount

  // Show skeleton loader only on initial load
  if (isInitialLoad) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Ship className="text-slate-800 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Maritime Positions</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Ship className="text-slate-800 mr-3" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">Maritime Vacancies</h1>
      </div>
      
      {error ? (
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      ) : !jobs.length ? (
        <div className="text-center text-gray-500 p-4">
          No jobs available at the moment
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VacanciesUi;
