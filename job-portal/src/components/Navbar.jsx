import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Ship, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 100);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className="bg-slate-800 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Ship className="text-white mr-2" size={24} />
            <span className="text-white text-xl font-bold">MarineJobs</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            
            {/* About dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                ref={buttonRef}
                className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                About <ChevronDown className="ml-1" size={16} />
              </button>
              
              {isAboutDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <button
                      className="block px-4 py-2 text-sm text-white hover:bg-slate-700 w-full text-left"
                      onClick={() => handleNavigation('/about')}
                    >
                      About Us
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-white hover:bg-slate-700 w-full text-left"
                      onClick={() => handleNavigation('/about-team')}
                    >
                      About Team
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleNavigation('/services')}
            >
              Services
            </button>
            
            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleNavigation('/vacanciesui')}
            >
              Maritime Vacancies
            </button>

            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleNavigation('/contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-slate-700 p-2 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/');
            }}
          >
            Home
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/about');
            }}
          >
            About Us
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/about-team');
            }}
          >
            About Team
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/services');
            }}
          >
            Services
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/vacanciesui');
            }}
          >
            Maritime Vacancies
          </button>
          <button
            className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            onClick={() => {
              handleNavigation('/contact');
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;