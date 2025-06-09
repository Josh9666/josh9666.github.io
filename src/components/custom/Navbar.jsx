import React, { useState, useEffect } from "react";
import { useTheme } from '../../context/ThemeContext.jsx';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle navbar background on scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Updated section IDs to match the actual IDs in your components
      const sections = ['profile', 'about', 'skills', 'qualification', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleNavClick = (section) => {
    const sectionId = typeof section === 'string' ? section.toLowerCase() : section.id;
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Calculate header height (assuming navbar height is around 64px)
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveSection(sectionId);
  };

  // Update the navigation items array
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Qualifications', id: 'qualification' },
    //{ name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const ThemeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-white transition-all duration-300 transform hover:rotate-45" />
      ) : (
        <Sun className="w-5 h-5 text-gray-700 transition-all duration-300 transform hover:rotate-45" />
      )}
    </button>
  );

  return (
    <section id="navbar" 
      className={`fixed w-full top-0 transition-all duration-300 z-50 
      ${isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'}`}
    >
      {/* Desktop Navigation */}
      <nav id="desktop-nav" className="hidden md:flex justify-between items-center px-4 lg:px-8 py-3 lg:py-4 max-w-7xl mx-auto">
        <a 
          href="#profile" 
          className="logo text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('profile');
          }}
        >
          Joshua Wilfred
        </a>
        <div className="flex items-center gap-4 lg:gap-8">
          <ul className="nav-links flex gap-4 lg:gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`relative text-sm lg:text-base ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400 font-medium' 
                      : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  } transition-all duration-300 py-2
                    after:content-[''] after:absolute after:w-full after:h-0.5 
                    after:bg-blue-600 dark:after:bg-blue-400 
                    after:left-0 after:bottom-0 
                    ${activeSection === item.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                    after:transition-transform after:duration-300`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav id="hamburger-nav" 
        className={`md:hidden transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
      >
        <div className="flex justify-between items-center px-4">
          <a 
            href="#profile" 
            className="logo text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('profile');
            }}
          >
            Joshua Wilfred
          </a>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button 
              className={`relative group p-2 z-50 ${isMenuOpen ? 'fixed right-4' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white transition-all duration-300 transform hover:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white transition-all duration-300 transform hover:rotate-180" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white dark:bg-gray-900 transform transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-full invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 h-screen gap-8 px-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`text-2xl font-medium ${
                  activeSection === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-800 dark:text-gray-200'
                } hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300
                  relative after:content-[''] after:absolute after:w-full after:h-0.5 
                  after:bg-blue-600 dark:after:bg-blue-400 after:left-0 after:-bottom-2 
                  ${activeSection === item.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                  after:transition-transform after:duration-300
                  transform hover:scale-105`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;