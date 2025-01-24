import React, { createContext, useReducer, useContext, useCallback } from 'react';
import api from '../api/api';

const JobContext = createContext();

const initialState = {
  jobs: [],
  applications: [],
  loading: false,
  error: null,
  lastFetch: null,
  isCreating: false  // Add new state for create operation
};

const jobReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_JOBS_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        jobs: Array.isArray(action.payload) ? action.payload : [],
        error: null
      };
    case 'FETCH_JOBS_FAILURE':
      return { 
        ...state, 
        loading: false, 
        jobs: [], 
        error: action.payload 
      };
    case 'CREATE_JOB_REQUEST':
      return { ...state, isCreating: true };
    case 'CREATE_JOB_SUCCESS':
      return { 
        ...state, 
        isCreating: false,
        jobs: Array.isArray(state.jobs) 
          ? [action.payload, ...state.jobs]
          : [action.payload],
        error: null
      };
    case 'CREATE_JOB_FAILURE':
      return { ...state, isCreating: false, error: action.payload };
    case 'UPDATE_JOB_SUCCESS':
      return {
        ...state,
        jobs: state.jobs.map(job => 
          job._id === action.payload._id ? action.payload : job
        )
      };
    case 'DELETE_JOB_SUCCESS':
      return { 
        ...state, 
        jobs: state.jobs.filter(job => job._id !== action.payload) 
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  const fetchJobs = useCallback(async (force = false) => {
    // Always fetch if force is true
    if (!force && state.loading) return;

    dispatch({ type: 'FETCH_JOBS_REQUEST' });
    try {
      const response = await api.get('/jobs');
      const jobsData = response.data.jobs || response.data || [];
      
      dispatch({ 
        type: 'FETCH_JOBS_SUCCESS', 
        payload: jobsData
      });
      
      state.lastFetch = Date.now();
    } catch (error) {
      dispatch({ 
        type: 'FETCH_JOBS_FAILURE', 
        payload: error.response?.data?.message || error.message 
      });
    }
  }, [state.loading]);

  const createJob = async (jobData) => {
    try {
      dispatch({ type: 'CREATE_JOB_REQUEST' });
      const response = await api.post('/admin/jobs', jobData);
      const newJob = response.data.job || response.data;
      
      dispatch({ 
        type: 'CREATE_JOB_SUCCESS', 
        payload: newJob
      });
      
      return response.data;
    } catch (error) {
      dispatch({ 
        type: 'CREATE_JOB_FAILURE', 
        payload: error.response?.data?.message || 'Failed to create job'
      });
      throw error;
    }
  };

  const updateJob = async (jobId, jobData) => {
    try {
      const response = await api.put(`/admin/jobs/${jobId}`, jobData);
      dispatch({ 
        type: 'UPDATE_JOB_SUCCESS', 
        payload: response.data.job || response.data 
      });
      return response.data;
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await api.delete(`/admin/jobs/${jobId}`);
      dispatch({ type: 'DELETE_JOB_SUCCESS', payload: jobId });
    } catch (error) {
      console.error('Error deleting job:', error);
      throw error;
    }
  };

  return (
    <JobContext.Provider value={{ 
      state, 
      fetchJobs, 
      createJob, 
      updateJob, 
      deleteJob 
    }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};