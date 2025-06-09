import React from 'react';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const NavLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  </li>
);

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    aria-label={label}
  >
    <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={icon} 
        alt={label} 
        className="w-5 h-5 object-contain dark:invert"
      />
    </div>
  </a>
);

const Footer = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#qualification", label: "Qualifications" },
    //{ href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/joshua-wilfred-985ba1176",
      icon: linkedinIcon,
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-900 py-12 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <SocialLink 
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Joshua Wilfred. All Rights Reserved.
        </p>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-current text-white dark:text-gray-800 opacity-20"
          ></path>
        </svg>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-10"></div>
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-10"></div>
    </footer>
  );
};

export default Footer; 