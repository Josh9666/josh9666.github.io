import React, { useState } from 'react';
import arrowIcon from '../../assets/arrow.png';
import educationIcon from '../../assets/education.png';
import experienceIcon from '../../assets/experience.png';

const TabButton = ({ active, onClick, icon, title }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
      active 
        ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg' 
        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
    }`}
  >
    <img src={icon} alt={title} className={`w-6 h-6 ${active ? 'invert' : 'dark:invert'}`} />
    <span className="font-medium">{title}</span>
  </button>
);

const TimelineItem = ({ item }) => (
  <div className="relative pl-8 pb-8 group">
    {/* Timeline line */}
    <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800 group-last:h-8 z-[1]"></div>
    
    {/* Timeline dot */}
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900 shadow-sm z-[2]"></div>
    
    <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-[5]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.institution}</h3>
            <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">{item.title}</h4>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-4 py-1.5 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 group whitespace-nowrap"
              onClick={() => window.open(item.link, '_blank')}
            >
              Visit
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">➔</span>
            </button>
          </div>
        </div>
        
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
              <span className="text-justify">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </div>
);

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const qualificationsData = {
    
    experience: {
      icon: experienceIcon,
      title: "Experience",
      items: [
        {
          institution: "Global Foundries Pte Ltd, Singapore",
          title: "Process Engineer - Metrology",
          link: "https://gf.com/",
          details: [
            "Process owner of Scanning Electron Microscope (SEM) Critical Dimension measurement tools and Sorter tools",
            "Developed Verity SEM Measurement recipes and algorithms for various measurement profiles",
            "Collaborated with NPI team for new technology codes implementation",
            "Achieved USD450k yearly cost savings through Root Cause Analysis and AI-assisted measurements",
            "Implemented ATLAS system leading to 14k manhours saving and USD100k cost avoidance",
            "Served as Department Statistical Process Control (SPC) representative",
            "Managed tool-to-tool matching and setup performance across 30+ SEM tools",
            "Qualified SEM tools for production and received Process Control Review Board approval",
            "Enhanced SOPs and developed BKMs for recipe creation and tool release procedures"
          ]
        },
        {
          institution: "Accenture Solutions Pte Ltd, Bengaluru",
          title: "Assistant Software Engineer",
          link: "https://www.accenture.com/",
          details: [
            "Managed database software installation, configuration, and upgrades",
            "Monitored database systems for uptime, performance, and data integrity",
            "Managed user access and authentication mechanisms",
            "Developed and maintained database backup and recovery procedures"
          ]
        }
      ]
    },
    education: {
      icon: educationIcon,
      title: "Education",
      items: [
        {
          institution: "Nanyang Technological University, Singapore",
          title: "Master of Science in Manufacturing Systems and Engineering",
          link: "https://www.ntu.edu.sg/",
          details: [

            "Relevant Modules: Advanced Manufacturing Processes, Prototyping and Rapid Prototyping, Quality Engineering"
          ]
        },
        {
          institution: "Karunya University, India",
          title: "B.Tech. Electronics and Communication Engineering",
          link: "https://karunya.edu/",
          details: [
            "Relevant Modules: Embedded Systems, Digital Signal Processing, Communication Systems, Digital Electronics"
          ]
        }
      ]
    },
  };

  return (
    <section id="qualification" className="py-12 relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Navigation Arrow Up */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '#skills'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-12 mt-8 sm:mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wider text-sm">
          Explore My
        </p>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Qualifications</h1>
      </div>
      
      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-12">
        <TabButton
            active={activeTab === 'experience'}
            onClick={() => setActiveTab('experience')}
            icon={experienceIcon}
            title="Experience"
          />
          <TabButton
            active={activeTab === 'education'}
            onClick={() => setActiveTab('education')}
            icon={educationIcon}
            title="Education"
          />
          
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'education' && (
            <div className="space-y-0">
              {qualificationsData.education.items.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="space-y-0">
              {qualificationsData.experience.items.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrow Down */}
      <div className="text-center mt-12 sm:mt-16 mb-4">
        <img 
          src={arrowIcon}
          alt="Navigate Down"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer hover:opacity-80 transition-opacity animate-bounce inline-block dark:invert"
          onClick={() => location.href = '#contact'}
        />
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
    </section>
  );
};

export default Qualifications; 