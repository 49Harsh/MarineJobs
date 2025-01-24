import api from '../api/api';

export const submitApplication = async (jobId, formData) => {
  try {
    const response = await api.post(`/applications/${jobId}`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getApplicationsByJobId = async (jobId) => {
  try {
    const response = await api.get(`/applications/job/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
