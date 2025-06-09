import React from 'react'
// Import images
import profilePic from '../../assets/profile_pic.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import arrowIcon from '../../assets/arrow.png'
import cvFile from '../../assets/Joshua-CV.pdf'

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Joshua-Wilfred-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="profile" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4 sm:py-20">
      {/* Profile Picture Container */}
      <div className="relative mb-8 sm:mb-10 group z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
        <div className="relative">
          <img 
            src={profilePic}
            alt="Joshua Wilfred profile pic"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-4 sm:space-y-5 max-w-2xl px-4 relative z-10">
        <div className="space-y-3">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wider animate-fade-in">
            👋 Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-300% transition-all duration-300 pb-4">
            Joshua Wilfred
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium mt-2">
            Metrology Process Owner
          </p>
          <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto mt-4">
            Dedicated semiconductor manufacturing professional specializing in Critical Dimension measurement and process optimization
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10">
          <button 
            className="group px-8 py-3 rounded-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 
              hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white active:scale-95
              transition-all duration-300 transform hover:scale-105 
              flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer text-base font-medium
              bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            onClick={handleDownloadCV}
          >
            <span>Download CV</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4m-4 8H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-6z"/>
            </svg>
          </button>
          <button 
            className="group px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white
              hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600
              transition-all duration-300 transform hover:scale-105 
              flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-base font-medium"
            onClick={() => location.href = '#contact'}
          >
            <span>Contact Me</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-8 relative z-10">
          <a 
            href="https://linkedin.com/in/joshua-wilfred-985ba1176"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute -inset-2 bg-blue-400 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <img 
              src={linkedinIcon}
              alt="My LinkedIn profile"
              className="w-6 h-6 transform transition duration-300 group-hover:scale-110 dark:invert"
            />
          </a>
          
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => location.href = '#about'}
          className="group flex flex-col items-center gap-2 transition-all duration-300 hover:transform hover:-translate-y-1"
        >
          <img 
            src={arrowIcon}
            alt="Scroll Down"
            className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer animate-bounce opacity-70 group-hover:opacity-100 transition duration-300 dark:invert"
          />
        </button>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200 dark:bg-pink-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-4000 -z-10"></div>
    </section>
  )
}

// Keep existing animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .bg-300% {
    background-size: 300% 300%;
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    animation: gradient 6s ease infinite;
  }
`;
document.head.appendChild(style);

export default Hero 