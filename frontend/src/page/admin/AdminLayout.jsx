import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-white p-4 shadow-md">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`w-full md:w-64 bg-white shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 md:p-6 border-b">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin/jobs" 
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-md transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Job Listings
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/jobs/create" 
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-md transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create New Job
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/applications" 
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-md transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Applications
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Admin Panel</h2>
            <button className="text-red-500 hover:text-red-700">
              Logout
            </button>
          </div>
        </header>
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;