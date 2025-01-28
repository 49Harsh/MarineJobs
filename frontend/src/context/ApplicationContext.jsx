import React, { createContext, useContext, useReducer } from 'react';
import api from '../api/api';

const ApplicationContext = createContext();

const initialState = {
    loading: false,
    error: null,
    success: false,
    application: null
};

const applicationReducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT_START':
            return { ...state, loading: true, error: null, success: false };
        case 'SUBMIT_SUCCESS':
            return { 
                ...state, 
                loading: false, 
                success: true, 
                application: action.payload 
            };
        case 'SUBMIT_ERROR':
            return { 
                ...state, 
                loading: false, 
                error: action.payload, 
                success: false 
            };
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
};

export const ApplicationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(applicationReducer, initialState);

    const submitApplication = async (jobId, formData) => {
        dispatch({ type: 'SUBMIT_START' });
        try {
            const response = await api.post(`/applications`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch({ type: 'SUBMIT_SUCCESS', payload: response.data });
            return response.data;
        } catch (error) {
            dispatch({ 
                type: 'SUBMIT_ERROR', 
                payload: error.response?.data?.message || 'Application submission failed'
            });
            throw error;
        }
    };

    const resetApplicationState = () => {
        dispatch({ type: 'RESET_STATE' });
    };

    return (
        <ApplicationContext.Provider value={{
            state,
            submitApplication,
            resetApplicationState
        }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useApplicationContext must be used within an ApplicationProvider');
    }
    return context;
};
