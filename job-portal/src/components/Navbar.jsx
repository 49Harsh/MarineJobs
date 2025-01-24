import React, { useState } from 'react';
import { Menu, X, Ship } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Ship className="text-white mr-2" size={24} />
            <span className="text-white text-xl font-bold">MarineJobs</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              onClick={() => navigate('/')}
            >
              Home
            </button>
            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              onClick={() => navigate('/vacanciesui')}
            >
              Maritime Vacancies
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
            onClick={() => {
              navigate('/vacancies');
              setIsMenuOpen(false);
            }}
          >
            Maritime Vacancies
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;