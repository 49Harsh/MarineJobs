import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const handleServicesClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleItemClick = (path) => {
    // First navigate
    navigate(path);
    
    // Then close menus after a small delay
    setTimeout(() => {
      setIsMenuOpen(false);
      if (window.innerWidth < 768) {
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    }, 100);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Only close if clicking outside the dropdown and not on a navigation button
      if (!event.target.closest('.dropdown-container') && 
          !event.target.closest('.nav-button')) {
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
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

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 100);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="bg-slate-800 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.jpg" alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mx-2 sm:mx-4" />
            <span className="text-white text-xs sm:text-sm lg:text-xl font-bold">RUN MARINE SERVICES PVT.LTD</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            
            {/* About dropdown */}
            <div 
              className="relative dropdown-container" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                ref={buttonRef}
                className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={handleAboutClick}
              >
                About <ChevronDown className={`ml-1 transform transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              
              {isAboutDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 z-50 dropdown-container"
                >
                  <div className="py-1">
                    <button
                      key="/about" // Unique key
                      className="nav-button block px-4 py-2 text-sm text-white hover:bg-slate-700 w-full text-left"
                      onClick={() => handleItemClick('/about')}
                    >
                      About Us
                    </button>
                    <button
                      key="/about-team" // Unique key
                      className="nav-button block px-4 py-2 text-sm text-white hover:bg-slate-700 w-full text-left"
                      onClick={() => handleItemClick('/about-team')}
                    >
                      Leadership Team
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div 
              className="relative dropdown-container" 
              ref={servicesDropdownRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                ref={servicesButtonRef}
                className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={handleServicesClick}
              >
                Services <ChevronDown className={`ml-1 transform transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 z-50 dropdown-container"
                >
                  <div className="py-1">
                    {[
                      { title: 'Crew Management', path: '/services/crew-management' },
                      { title: 'Technical Management', path: '/services/technical-management' },
                      { title: 'Consultancy Services', path: '/services/consultancy' },
                      { title: 'Commercial Management', path: '/services/commercial-management' },
                      { title: 'Documentation', path: '/services/documentation' },
                      
                    ].map((service) => (
                      <button
                        key={service.path} // Unique key
                        className="nav-button block px-4 py-2 text-sm text-white hover:bg-slate-700 w-full text-left"
                        onClick={() => handleItemClick(service.path)}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
            <button 
              className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md text-sm font-medium border border-slate-500 shadow-sm transition-colors duration-200"
              onClick={() => handleNavigation('/admin-login')}
            >
              Company Login
            </button>
          </div>

          {/* Mobile/iPad menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-slate-700 p-2 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/iPad menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden overflow-hidden bg-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                onClick={() => handleNavigation('/')}
              >
                Home
              </button>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                >
                  About
                  <ChevronDown className={`transform transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
                <AnimatePresence>
                  {isMobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4"
                    >
                      <button
                        key="/about" // Unique key
                        className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        onClick={() => handleNavigation('/about')}
                      >
                        About Us
                      </button>
                      <button
                        key="/about-team" // Unique key
                        className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        onClick={() => handleNavigation('/about-team')}
                      >
                        About Team
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4"
                    >
                      {[
                        { title: 'Crew Management', path: '/services/crew-management' },
                        { title: 'Technical Management', path: '/services/technical-management' },
                        { title: 'Consultancy Services', path: '/services/consultancy' },
                        { title: 'Commercial Management', path: '/services/commercial-management' },
                        { title: 'Documentation', path: '/services/documentation' }
                      ].map((service) => (
                        <button
                          key={service.path} // Unique key
                          className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                          onClick={() => handleNavigation(service.path)}
                        >
                          {service.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                onClick={() => handleNavigation('/vacanciesui')}
              >
                Maritime Vacancies
              </button>
              <button
                className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                onClick={() => handleNavigation('/contact')}
              >
                Contact Us
              </button>
              <button
                className="text-white bg-slate-700 hover:bg-slate-600 block px-4 py-2 rounded-md text-base font-medium w-full text-left border border-slate-500 shadow-sm transition-colors duration-200"
                onClick={() => handleNavigation('/admin-login')}
              >
                Company Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;