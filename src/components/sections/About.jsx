import React from 'react';
// Import assets
import aboutPic from '../../assets/josh_about_pic.jpeg';
import arrowIcon from '../../assets/arrow.png';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';

const AboutCard = ({ icon, title, description, className }) => {
  return (
    <div className={`transform transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src={icon} alt={`${title} icon`} className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 dark:invert" />
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">{title}</h3>
        <div 
          className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base" 
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const details = {
    experience: {
      icon: experienceIcon,
      title: "Experience",
      description: `
      <div class="space-y-4">
          <div>
            <div class="font-semibold text-lg mb-2 dark:text-gray-200">5+ years</div>
            <div class="text-blue-600 dark:text-blue-400 font-medium">Metrology Process Owner</div>
          </div>
          <div>
            <div class="font-semibold text-lg mb-2 dark:text-gray-200">1 year</div>
            <div class="text-blue-600 dark:text-blue-400 font-medium">Assistant Software Engineer</div>
          </div>
        </div>
      `
    },
    education: {
      icon: educationIcon,
      title: "Education",
      description: `
        <div class="space-y-4">
          <div>
            <div class="font-semibold dark:text-gray-200">M.Sc. Manufacturing Systems and Engineering</div>
            <div class="text-blue-600 dark:text-blue-400">Nanyang Technological University, Singapore</div>
          </div>
          <div>
            <div class="font-semibold dark:text-gray-200">B.Tech. Electronics and Communication Engineering</div>
            <div class="text-blue-600 dark:text-blue-400">Karunya University</div>
          </div>
        </div>
      `
    }
  };

  return (
    <section id="about" className="py-10 sm:py-20 relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      {/* Navigation Arrow Up */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '/'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-16 mt-8 sm:mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wider text-sm sm:text-base">
          Get To Know More
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">About Me</h1>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Profile Picture */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative">
            <img 
              src={aboutPic}
              alt="Profile picture"
              className="w-full h-auto max-h-[400px] sm:max-h-[600px] object-contain rounded-xl shadow-xl dark:shadow-gray-900/50"
            />
          </div>
        </div>
        
        {/* Details */}
        <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <AboutCard 
              {...details.experience} 
              className="transform transition-all duration-300 hover:scale-105"
            />
            <AboutCard 
              {...details.education} 
              className="transform transition-all duration-300 hover:scale-105"
            />
          </div>
          
          {/* Description */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              Dedicated and results-driven Metrology Process Owner with more than 5 years experience in semiconductor
              manufacturing, specializing in Critical Dimension (CD) measurement and Sorter tool management. Proven
              track record in implementing process improvements, achieving significant cost savings, and enhancing tool
              performance. Recognized as the Statistical Process Control (SPC) representative for the department, ensuring
              early detection of tool drifts and process deviations. Proficient in Lean Six Sigma methodologies, data analysis,
              and cross-functional collaboration to drive continuous improvement and uphold quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrow Down */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Down"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer hover:opacity-80 transition-opacity animate-bounce dark:invert"
          onClick={() => location.href = '#skills'}
        />
      </div>

      {/* Background Decoration - Adjusted for mobile and dark mode */}
      <div className="absolute top-1/4 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30"></div>
    </section>
  );
};

export default About; 