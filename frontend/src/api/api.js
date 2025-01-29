import axios from 'axios';
// http://localhost:5000/
// https://marinejobs-1.onrender.com
const api = axios.create({
    baseURL: 'https://marinejobs-1.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor
api.interceptors.request.use(
    config => {
        console.log('API Request:', {
            url: config.url,
            method: config.method,
            data: config.data
        });
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
api.interceptors.response.use(
    response => {
        console.log('API Response:', response.data); // For debugging
        return response;
    },
    error => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;