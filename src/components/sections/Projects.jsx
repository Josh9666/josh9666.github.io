import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowIcon from '../../assets/arrow.png';



const ProjectCard = ({ image, title, description, link, isOngoing }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-3 py-4">
      <div 
        className="transform transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 h-[500px] flex flex-col">
          <div className="relative overflow-hidden h-[250px]">
            <img 
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 min-h-[3.5rem]">{title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify line-clamp-4">{description}</p>
            </div>
            
            <div className="mt-auto">
              {isOngoing ? (
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    Currently Ongoing
                  </span>
                </div>
              ) : (
                <button 
                  className="w-full py-3 bg-[#24292f] dark:bg-gray-700 hover:bg-[#1b1f24] dark:hover:bg-gray-600 text-white rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-3 group"
                  onClick={() => window.open(link, '_blank')}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? '-left-4' : '-right-4'} z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
  >
    <svg 
      className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${direction === 'prev' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} 
      />
    </svg>
  </button>
);

const Projects = () => {
  const projects = [
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <NavigationArrow direction="prev" />,
    nextArrow: <NavigationArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <div className="bottom-[-40px]">
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition-all duration-300 relative overflow-hidden">
        <span className="absolute inset-0 bg-blue-600 dark:bg-blue-400 transform scale-0 transition-transform duration-300 rounded-full slick-dot"></span>
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    )
  };

  return (
    <section id="projects" className="py-16 relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Navigation Arrow Up */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-7 h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '#qualification'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-12 mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wider text-sm">
          Browse My Recent
        </p>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Explore my portfolio of projects showcasing my expertise in web development, machine learning, and data science.
        </p>
      </div>

      {/* Projects Slider */}
      <div className="max-w-7xl mx-auto px-8">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Slider>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};

// Updated styles
const styles = `
  <style>
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .slick-dots li.slick-active button span {
      transform: scale(1);
    }
    
    .slick-dots {
      bottom: -45px !important;
    }
    
    .slick-dots li {
      margin: 0 !important;
      width: auto !important;
      height: auto !important;
    }
    
    .slick-dots li button {
      width: 12px !important;
      height: 12px !important;
      padding: 0 !important;
    }
    
    .slick-dots li button:before {
      display: none !important;
    }
    
    /* Add dark mode styles for slider dots */
    .dark .slick-dots li button span {
      background-color: rgb(37 99 235 / 0.8);
    }
  </style>
`;

export default Projects; 