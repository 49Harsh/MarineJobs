import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin/jobs" 
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-md transition"
              >
                Job Listings
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/jobs/create" 
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-md transition"
              >
                Create New Job
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
            <button className="text-red-500 hover:text-red-700">
              Logout
            </button>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;