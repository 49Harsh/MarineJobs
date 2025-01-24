import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VacanciesUi from './page/VacanciesUi';
import LandingPages from './page/LandingPages';
import AdminLayout from './page/admin/AdminLayout';
import { Navigate } from 'react-router-dom';
import AdminJobsList from './page/admin/AdminJobsList';
import AdminApplicationsList from './page/admin/AdminApplicationsList';
import JobForm from './page/admin/JobForm';
import { JobProvider } from './context/JobContext'; // Import JobProvider
import JobApplication from './page/JobApplication'; // Import JobApplication

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <JobProvider> {/* Wrap Routes with JobProvider */}
        <Routes>
          <Route path='/' element={<LandingPages />} />
          <Route path="/vacanciesui" element={<VacanciesUi />} />
          <Route path="/admin" element={<AdminLayout />}>
              {/* Redirect root admin route to jobs */}
              <Route index element={<Navigate to="jobs" replace />} />
              
              {/* Jobs Routes */}
              <Route path="jobs" element={<AdminJobsList />} />
              <Route path="jobs/create" element={<JobForm />} />
              <Route path="jobs/edit/:jobId" element={<JobForm />} />
              
              {/* Applications Routes */}
              <Route path="jobs/:jobId/applications" element={<AdminApplicationsList />} />
            </Route>
            
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Navigate to="/admin/jobs" replace />} />
          
          {/* Job Application Route */}
          <Route path="/apply/:jobId" element={<JobApplication />} />
        </Routes>
      </JobProvider>
    </div>
  );
};

export default App;