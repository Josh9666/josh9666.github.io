import React from 'react';
import arrowIcon from '../../assets/arrow.png';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';

const ContactButton = ({ icon, label, link }) => {
  return (
    <a 
      href={link}
      target={link.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 sm:gap-6 group">
        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <img 
            src={icon}
            alt={`${label} icon`}
            className="w-5 sm:w-6 h-5 sm:h-6 dark:invert"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider">Contact via</span>
          <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{label}</span>
        </div>
        <div className="ml-auto opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: emailIcon,
      label: "Email",
      link: "mailto:josh.wilfred96@gmail.com"
    },
    {
      icon: linkedinIcon,
      label: "LinkedIn",
      link: "https://linkedin.com/in/joshua-wilfred-985ba1176"
    }
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      {/* Navigation Arrow Up */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '#qualification'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 mt-8 sm:mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2 uppercase tracking-wider text-xs sm:text-sm">Get in Touch</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">Contact Me</h1>
      </div>
      
      {/* Contact Methods */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <ContactButton 
              key={index}
              icon={method.icon}
              label={method.label}
              link={method.link}
            />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
    </section>
  );
};

export default Contact;