export const jobReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_REQUEST':
      return { ...state, loading: true, error: null };
    
    case 'FETCH_JOBS_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        jobs: Array.isArray(action.payload) ? action.payload : [],
        error: null,
        lastFetch: Date.now()
      };
    
    case 'FETCH_JOBS_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
    
    case 'CREATE_JOB_SUCCESS':
      return { 
        ...state, 
        loading: false,
        jobs: [action.payload, ...state.jobs],
        error: null,
        lastFetch: Date.now()
      };
    
    case 'UPDATE_JOB_SUCCESS':
      return {
        ...state,
        loading: false,
        jobs: state.jobs.map(job => 
          job._id === action.payload._id ? action.payload : job
        ),
        error: null
      };
    
    case 'DELETE_JOB_SUCCESS':
      return {
        ...state,
        loading: false,
        jobs: state.jobs.filter(job => job._id !== action.payload),
        error: null
      };
    
    default:
      return state;
  }
};
