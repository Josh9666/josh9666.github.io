import React from 'react';
import arrowIcon from '../../assets/arrow.png';
import checkmarkIcon from '../../assets/checkmark.png';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="details-container bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <article 
              key={index} 
              className="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
            >
              <img 
                src={checkmarkIcon} 
                alt="checkmark" 
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-blue-500 dark:invert" 
              />
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-gray-800 dark:text-gray-200">{skill.name}</h3>
                <p className={`text-[10px] sm:text-xs font-medium ${
                  skill.level === 'Advanced' 
                    ? 'text-green-600 dark:text-green-400' 
                    : skill.level === 'Intermediate' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-orange-600 dark:text-orange-400'
                }`}>
                  {skill.level}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    "Technical Skills": [
      { name: "Statistical Process Control (SPC)", level: "Advanced" },
      { name: "Measurement System Analysis (MSA)", level: "Advanced" },
      { name: "Gauge R&R", level: "Advanced" },
      { name: "SEM Measurement", level: "Advanced" },
      { name: "Recipe Creation", level: "Advanced" },
      { name: "Tool Qualification", level: "Advanced" }
    ],
    "Software & Tools": [
      { name: "Microsoft Excel", level: "Advanced" },
      { name: "Power BI", level: "Advanced" },
      { name: "JMP", level: "Advanced" },
      { name: "Microsoft PowerPoint", level: "Advanced" },
      { name: "Canva", level: "Advanced" }
    ],
    "Programming": [
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" }
    ],
    "Professional Skills": [
      { name: "Lean Six Sigma", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Data Analysis", level: "Advanced" },
      { name: "SOP Development", level: "Advanced" },
      { name: "Root Cause Analysis", level: "Advanced" }
    ],
    "Languages": [
      { name: "English", level: "Advanced" },
      { name: "Tamil", level: "Native" }
    ]
  };

  return (
    <section id="skills" className="py-8 sm:py-12 relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      {/* Navigation Arrow Up */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '#about'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2 uppercase tracking-wider text-xs sm:text-sm">
          Explore My
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">Skills</h1>
      </div>
      
      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCard key={category} title={category} skills={skills} />
          ))}
        </div>

        {/* Navigation Arrow Down */}
        <div className="text-center mt-8 sm:mt-12 mb-4">
          <img 
            src={arrowIcon}
            alt="Navigate Down"
            className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer hover:opacity-80 transition-opacity animate-bounce inline-block dark:invert"
            onClick={() => location.href = '#qualification'}
          />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
    </section>
  );
};

export default Skills; 