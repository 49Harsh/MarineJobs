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
import { ApplicationProvider } from './context/ApplicationContext'; // Import ApplicationProvider

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <JobProvider> {/* Wrap Routes with JobProvider */}
        <ApplicationProvider> {/* Wrap Routes with ApplicationProvider */}
          <Routes>
            <Route path='/' element={<LandingPages />} />
            <Route path="/vacanciesui" element={<VacanciesUi />} />
            <Route path="/apply/:jobId" element={<JobApplication />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                {/* Redirect root admin route to jobs */}
                <Route index element={<Navigate to="jobs" replace />} />
                
                {/* Jobs Routes */}
                <Route path="jobs" element={<AdminJobsList />} />
                <Route path="jobs/create" element={<JobForm />} />
                <Route path="jobs/edit/:jobId" element={<JobForm />} />
                
                {/* Applications Routes */}
                <Route path="applications" element={<AdminApplicationsList />} /> {/* Move this up */}
                <Route path="jobs/:jobId/applications" element={<AdminApplicationsList />} />
              </Route>
              
              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<Navigate to="/admin/jobs" replace />} />
          </Routes>
        </ApplicationProvider>
      </JobProvider>
    </div>
  );
};

export default App;