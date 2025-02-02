import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
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
import About from './page/about/About';
import AboutTeam from './page/about/AboutTeam';
import {
  CrewManagement,
  TechnicalManagement,
  ConsultancyServices,
  CommercialManagement,
  Documentation,
} from './page/services';
import ProtectedRoute from './components/ProtectedRoute'; 
import { AuthProvider } from './context/AuthContext'; 
import AdminLogin from './components/AdminLogin'; 
import Contact from './page/Contact';

const App = () => {
  return (
    <Router basename={'/'}>
      <AuthProvider>
        <div className="min-h-screen ">
          <Navbar />
          <JobProvider> 
            <ApplicationProvider> 
              <Routes>
                {/* Public Routes */}
                <Route path='/' element={<LandingPages />} />
                <Route path="/vacanciesui" element={<VacanciesUi />} />
                <Route path="/about" element={<About />} />
                <Route path="/about-team" element={<AboutTeam />} />
                <Route path="/apply/:jobId" element={<JobApplication />} />
                <Route path="/admin-login" element={<AdminLogin />} /> 
                <Route path="/contact" element={<Contact />} /> 
                
                {/* Admin Routes - Wrapped with ProtectedRoute */}
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }>
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
                  
                  {/* Update catch-all route to go to home page instead of admin */}
                  <Route path="*" element={<Navigate to="/" replace />} />

                  {/* Service Routes */}
                  <Route path="/services/crew-management" element={<CrewManagement />} />
                  <Route path="/services/technical-management" element={<TechnicalManagement />} />
                  <Route path="/services/consultancy" element={<ConsultancyServices />} />
                  <Route path="/services/commercial-management" element={<CommercialManagement />} />
                  <Route path="/services/documentation" element={<Documentation />} />
                  {/* <Route path="/services/ship-agency" element={<ShipAgency />} /> */}
              </Routes>
            </ApplicationProvider>
          </JobProvider>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;