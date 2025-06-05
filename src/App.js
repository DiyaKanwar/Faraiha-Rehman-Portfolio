import React, { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import useBackgroundSlider from "./utils/useBackgroundSlider";


const projects = [
  {
    title: "Little Sprout Haven",
    category: "Maternity Store And Photostudio",
    coverImage: "/images/Little Sprout Haven/1.jpg",
    images: [
      "/images/Little Sprout Haven/1.jpg",
      "/images/Little Sprout Haven/2.jpg",
      "/images/Little Sprout Haven/3.jpg",
      "/images/Little Sprout Haven/4.jpg",
      "/images/Little Sprout Haven/5.jpg",
      "/images/Little Sprout Haven/6.jpg",
      "/images/Little Sprout Haven/7.jpg",
      "/images/Little Sprout Haven/8.jpg",
      "/images/Little Sprout Haven/9.jpg",
      "/images/Little Sprout Haven/10.jpg",
    ]
  },
  {
    title: "Serene Smile Dental Clinic",
    category: "Dental Hospital",
    coverImage: "/images/Serene Smile Dental clinic/25.jpg",
    images: [
      "/images/Serene Smile Dental clinic/11.jpg",
      "/images/Serene Smile Dental clinic/12.jpg",
      "/images/Serene Smile Dental clinic/13.jpg",
      "/images/Serene Smile Dental clinic/14.jpg",
      "/images/Serene Smile Dental clinic/15.jpg",
      "/images/Serene Smile Dental clinic/16.jpg",
      "/images/Serene Smile Dental clinic/17.jpg",
      "/images/Serene Smile Dental clinic/18.jpg",
      "/images/Serene Smile Dental clinic/19.jpg",
      "/images/Serene Smile Dental clinic/20.jpg",
      "/images/Serene Smile Dental clinic/21.jpg",
      "/images/Serene Smile Dental clinic/22.jpg",
      "/images/Serene Smile Dental clinic/23.jpg",
      "/images/Serene Smile Dental clinic/24.jpg",
      "/images/Serene Smile Dental clinic/25.jpg",
      "/images/Serene Smile Dental clinic/26.jpg",
      "/images/Serene Smile Dental clinic/27.jpg",
    ]
  },

  // Project 3
  {
    title: "SBS Office",
    category: "Office",
    coverImage: "/images/SBS Office/SBS11.jpg",
    images: [
      "/images/SBS Office/SBS1.jpg",
      "/images/SBS Office/SBS2.jpg",
      "/images/SBS Office/SBS3.jpg",
      "/images/SBS Office/SBS4.jpg",
      "/images/SBS Office/SBS5.jpg",
      "/images/SBS Office/SBS6.jpg",
      "/images/SBS Office/SBS7.jpg",
      "/images/SBS Office/SBS8.jpg",
      "/images/SBS Office/SBS9.jpg",
      "/images/SBS Office/SBS10.jpg",
      "/images/SBS Office/SBS11.jpg",
      "/images/SBS Office/SBS12.jpg",
      "/images/SBS Office/SBS13.jpg",
      "/images/SBS Office/SBS14.jpg",
      "/images/SBS Office/SBS15.jpg",
      "/images/SBS Office/SBS16.jpg",
      "/images/SBS Office/SBS17.jpg",
    ]
  },

  {
    title: "The Pump House Gyms",
    category: "Gym",
    coverImage: "/images/The Pump House Gyms/PHGym14.jpg",
    images: [
      "/images/The Pump House Gyms/PHGym1.jpg",
      "/images/The Pump House Gyms/PHGym2.jpg",
      "/images/The Pump House Gyms/PHGym3.jpg",
      "/images/The Pump House Gyms/PHGym4.jpg",
      "/images/The Pump House Gyms/PHGym5.jpg",
      "/images/The Pump House Gyms/PHGym6.jpg",
      "/images/The Pump House Gyms/PHGym7.jpg",
      "/images/The Pump House Gyms/PHGym8.jpg",
      "/images/The Pump House Gyms/PHGym9.jpg",
      "/images/The Pump House Gyms/PHGym10.jpg",
      "/images/The Pump House Gyms/PHGym11.jpg",
      "/images/The Pump House Gyms/PHGym12.jpg",
      "/images/The Pump House Gyms/PHGym13.jpg",
      "/images/The Pump House Gyms/PHGym14.jpg",
      "/images/The Pump House Gyms/PHGym15.jpg",
      "/images/The Pump House Gyms/PHGym16.jpg",
      "/images/The Pump House Gyms/PHGym17.jpg",
    ]
  },

  {
    title: "Jay Patel Office",
    category: "Office",
    coverImage: "/images/Jay Patel Office/Pateloff2.jpg",
    images: [
      "/images/Jay Patel Office/Pateloff1.jpg",
      "/images/Jay Patel Office/Pateloff2.jpg",
      "/images/Jay Patel Office/Pateloff3.jpg",
      "/images/Jay Patel Office/Pateloff4.jpg",
      "/images/Jay Patel Office/Pateloff5.jpg",
      "/images/Jay Patel Office/Pateloff6.jpg",
      "/images/Jay Patel Office/Pateloff7.jpg",
      "/images/Jay Patel Office/Pateloff8.jpg",
    ]
  },
  {
    title: "Mr. Vishalbhai Patel Home",
    category: "Residence",
    coverImage: "/images/Mr. Vishalbhai Patel Home/Home1.jpg",
    images: [
      "/images/Mr. Vishalbhai Patel Home/Home1.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home2.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home3.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home4.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home5.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home6.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home7.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home8.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home9.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home10.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home11.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home12.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home13.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home14.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home15.jpg",
      "/images/Mr. Vishalbhai Patel Home/Home16.jpg",
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.3}px)`,
  };

  const navLinks = [
    "Home",
    "About",
    "Projects",
    "Resume",
    "Achievements",
    "Contact",
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.toLowerCase());
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backgroundImages = [
    "/images/Background/7.jpg",
    "/images/Background/3.jpg",
    "/images/Background/21.jpg",
    "/images/Background/2.jpg",
    "/images/Background/9.jpg",
    "/images/Background/15.jpg",
    "/images/Background/Home12.jpg",
    "/images/Background/Pateloff2.jpg",
    "/images/Background/17.jpg",
    "/images/Background/Home5.jpg",
  ];

  const currentBg = useBackgroundSlider(backgroundImages, 5000);

  return (
    <div className="min-h-screen bg-[#FEEEDE] text-[#624A58] font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? "bg-[#624A58] shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-4">

          <div className="flex justify-between items-center">
            <a
              href="#home"
              className="text-[#FEEEDE] text-2xl font-semibold tracking-wider"
            >
              Faraiha Rehman
            </a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-[#FEEEDE] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap ${activeSection === item.toLowerCase()
                    ? "border-b-2 border-[#FEEEDE]"
                    : ""
                    }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#FEEEDE] focus:outline-none cursor-pointer"
              >
                <i
                  className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"
                    } text-2xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden bg-[#624A58] overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#FEEEDE] hover:text-white transition-colors duration-300 py-2 cursor-pointer"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Background ${index}`}
                className={`w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentBg ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-[#624A58] opacity-50 z-20"></div>
          </div>
          <div className="absolute inset-0 bg-[#624A58] opacity-50"></div>
        </div>
       <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 z-10 relative">

          <div className="max-w-3xl" style={parallaxStyle}>
            <h1 className="text-5xl md:text-7xl font-bold text-[#FEEEDE] mb-4 leading-tight drop-shadow-lg">
              Faraiha Rehman
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#FEEEDE] mb-8 font-light drop-shadow-lg">
              Transforming spaces into inspiring experiences
            </h2>
            <p className="text-lg md:text-xl text-[#FEEEDE] mb-12 max-w-2xl drop-shadow-lg">
              Bringing artistic vision and technical expertise to life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#projects"
                className="bg-[#FEEEDE] text-[#624A58] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 text-center cursor-pointer transform hover:scale-105 hover:shadow-lg"
                aria-label="View Projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-[#FEEEDE] text-[#FEEEDE] px-8 py-3 rounded-lg font-medium hover:bg-[#FEEEDE] hover:bg-opacity-10 transition-all duration-300 text-center cursor-pointer"
                aria-label="Get in Touch"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FEEEDE] animate-bounce">
          <a href="#about" className="cursor-pointer" aria-label="Scroll to About section">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#FEEEDE] to-[#FFF8F5] relative overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#624A58]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#624A58]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#624A58] mb-4">About Me</h2>
            <p className="text-xl text-[#624A58]/70 max-w-2xl mx-auto mb-6">
              Passionate about transforming spaces through innovative design and artistic vision
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#624A58] to-[#624A58]/50 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Enhanced Profile Image Section */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background shapes */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#624A58]/20 to-[#624A58]/10 rounded-2xl transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#624A58]/30 rounded-2xl transform -rotate-3"></div>

                <img
                  loading="lazy"
                  src="images/Profile Images/profile dark lev.png"
                  alt="Faraiha Rehman"
                  className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover object-top border-4 border-white"
                />

                {/* Floating skill badges */}
                <div className="absolute -top-4 -right-8 bg-white shadow-lg rounded-full p-3 animate-bounce">
                  <i className="fas fa-paint-brush text-[#624A58] text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-8 bg-white shadow-lg rounded-full p-3 animate-bounce delay-100">
                  <i className="fas fa-cube text-[#624A58] text-xl"></i>
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-[#624A58] mb-2 flex items-center gap-3">
                  <span className="text-5xl">👋</span>
                  Hello, I'm Faraiha
                </h3>
                <p className="text-xl text-[#624A58]/80 font-medium">Interior Designer | Artist | 3D Visualizer</p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#624A58]/10">
                  <h4 className="text-lg font-semibold text-[#624A58] mb-3 flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-[#624A58]"></i>
                    Education & Journey
                  </h4>
                  <p className="text-[#624A58]/80 leading-relaxed">
                    Currently pursuing M.Sc. Animation from Chandigarh University. I hold a B.Sc. in Interior Design
                    and have gained valuable experience as an Assistant Artist at Marsi Art & Culture and as a Remote Art Educator at HBM Modern Public Girl Inter College.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#624A58]/10">
                  <h4 className="text-lg font-semibold text-[#624A58] mb-3 flex items-center gap-2">
                    <i className="fas fa-lightbulb text-[#624A58]"></i>
                    My Passion
                  </h4>
                  <p className="text-[#624A58]/80 leading-relaxed">
                    I specialize in creating immersive, artistic environments that blend functionality with aesthetic beauty.
                    My work spans from residential spaces to commercial projects, always focusing on innovative design solutions.
                  </p>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-4 my-8">
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#624A58]">2+</div>
                  <div className="text-sm text-[#624A58]/70">Years Experience</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#624A58]">10+</div>
                  <div className="text-sm text-[#624A58]/70">Projects Completed</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#624A58]">10+</div>
                  <div className="text-sm text-[#624A58]/70">Awards Won</div>
                </div>
              </div>

              {/* Enhanced Skills Section without skill bars */}
              <div>
                <h4 className="text-lg font-semibold text-[#624A58] mb-4 flex items-center gap-2">
                  <i className="fas fa-tools text-[#624A58]"></i>
                  Technical Expertise
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "SketchUp", icon: "fas fa-cube" },
                    { name: "Lumion", icon: "fas fa-lightbulb" },
                    { name: "V-ray", icon: "fas fa-sun" },
                    { name: "Maya", icon: "fas fa-shapes" },
                    { name: "AutoCAD", icon: "fas fa-drafting-compass" },
                    { name: "Photoshop", icon: "fas fa-image" }
                  ].map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="bg-gradient-to-br from-[#624A58] to-[#4a3743] text-[#FEEEDE] px-6 py-4 rounded-xl text-base font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-3 hover:scale-105">

                        <i className={`${skill.icon} text-xs`}></i>
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#FFF8F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#624A58] mb-4">Interior Design Projects</h2>
            <p className="text-xl text-[#624A58]/70 max-w-2xl mx-auto mb-6">
              Explore my creative journey through diverse interior design projects, from residential homes to commercial spaces
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#624A58] to-[#624A58]/50 mx-auto"></div>
          </div>

          {!selectedProject ? (
            // Vertical scroll container for project cards with smooth scroll and rounded corners
            <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#624A58]/80 scrollbar-track-transparent rounded-2xl"
  style={{
    maxHeight: '700px',
    scrollBehavior: 'smooth',
  }}
>
  {projects.map((project, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:-translate-y-1 bg-white"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative aspect-[16/10] sm:h-96 w-full">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#624A58]/40 via-[#624A58]/20 to-transparent"></div>

        {/* Content overlay */}
       <div className="absolute bottom-0 left-0 right-0 px-4 pt-6 pb-10 sm:pt-20 sm:pb-24 sm:px-6 text-[#FEEEDE]">

          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white" style={{
            textShadow: '0 0 8px rgba(254, 238, 222, 0.4), 1px 1px 4px rgba(0, 0, 0, 0.8)',
            WebkitTextStroke: '0.5px rgba(254, 238, 222, 0.2)'
          }}>
            {project.title}
          </h3>
          <p className="text-md sm:text-lg mb-2 font-medium text-[#FEEEDE]" style={{
            textShadow: '0 0 6px rgba(254, 238, 222, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.7)',
            WebkitTextStroke: '0.3px rgba(254, 238, 222, 0.15)'
          }}>
            {project.category}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm opacity-80 flex items-center gap-2">
              <i className="fas fa-images"></i> {project.images.length} Images
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-[#FEEEDE]/20 backdrop-blur-sm px-3 py-1 rounded-full border border-[#FEEEDE]/30">
              <span>View Project</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FEEEDE]/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>

          ) : (
            // Show selected project images - Enhanced layout
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-4xl font-bold text-[#624A58] mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-[#624A58] opacity-80">{selectedProject.category}</p>
                  <p className="text-sm text-[#624A58] opacity-60 mt-1 flex items-center gap-2">
                    <i className="fas fa-images"></i>
                    {selectedProject.images.length} Images in this collection
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#624A58] text-[#FEEEDE] px-6 py-3 rounded-xl font-medium hover:bg-[#4a3743] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Projects
                </button>
              </div>

              <div className="relative max-h-[700px] overflow-y-auto rounded-2xl backdrop-blur-lg bg-white/20 shadow-2xl border border-[#624A58]/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {selectedProject.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group transform transition-all duration-300 hover:scale-105"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} ${i + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#624A58] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-[#FEEEDE] px-4">
                        <i className="fas fa-expand text-3xl mb-3"></i>
                        <p className="text-sm font-medium">Click to view full size</p>
                      </div>

                      {/* Image number indicator */}
                      <div className="absolute top-3 left-3 bg-[#624A58]/80 backdrop-blur-sm text-[#FEEEDE] px-2 py-1 rounded-lg text-xs font-medium">
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gradient-to-br from-[#FEEEDE] to-[#FFF8F5] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#624A58]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#624A58]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#624A58] mb-4">Resume</h2>
            <p className="text-xl text-[#624A58]/70 max-w-2xl mx-auto mb-6">
              Download my comprehensive resume to explore my professional journey and expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#624A58] to-[#624A58]/50 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Enhanced Resume Card */}
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#624A58]/10 to-[#624A58]/5 rounded-2xl transform rotate-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#624A58]/20 rounded-2xl transform -rotate-2"></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-[#624A58]/10">
                {/* Resume Preview Mock */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#624A58] to-[#4a3743] rounded-xl flex items-center justify-center shadow-lg">
                        <i className="fas fa-file-alt text-[#FEEEDE] text-2xl"></i>
                      </div>
           <div>
  <h3 className="text-2xl font-bold text-[#624A58]">Career Overview</h3>
  <p className="text-[#624A58]/70">A snapshot of my skills, experience, and milestones</p>
</div>

                    </div>

                    {/* Resume highlights */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#624A58]/80">
                        <i className="fas fa-check-circle text-[#624A58]"></i>
                        <span>Rich journey of professional experiences</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#624A58]/80">
                        <i className="fas fa-check-circle text-[#624A58]"></i>
                        <span>Strong academic foundation & certifications</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#624A58]/80">
                        <i className="fas fa-check-circle text-[#624A58]"></i>
                        <span>Creative & technical toolset mastery</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#624A58]/80">
                        <i className="fas fa-check-circle text-[#624A58]"></i>
                        <span>Impactful projects & notable recognitions</span>
                      </div>
                    </div>
                  </div>


                  {/* Resume Preview Visual */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#624A58]/10 to-[#624A58]/5 rounded-xl p-6 shadow-inner">
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <div className="space-y-3">
                          <div className="h-4 bg-[#624A58] rounded w-3/4"></div>
                          <div className="h-2 bg-[#624A58]/40 rounded w-1/2"></div>
                          <div className="space-y-2 mt-4">
                            <div className="h-2 bg-[#624A58]/20 rounded"></div>
                            <div className="h-2 bg-[#624A58]/20 rounded w-4/5"></div>
                            <div className="h-2 bg-[#624A58]/20 rounded w-3/5"></div>
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="h-2 bg-[#624A58]/30 rounded w-2/3"></div>
                            <div className="h-2 bg-[#624A58]/30 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating download icon */}
                    <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-full p-4 animate-bounce">
                      <i className="fas fa-download text-[#624A58] text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Enhanced Download Button */}
                <div className="flex flex-col items-center mt-12 pt-8 border-t border-[#624A58]/10">
                  <a
                    href="FARAIHA_REHMAN_RESUME.pdf"
                    download
                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#624A58] to-[#4a3743] text-[#FEEEDE] px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4a3743] to-[#624A58] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <i className="fas fa-download text-lg group-hover:animate-pulse relative z-10"></i>
                    <span className="relative z-10">Download Resume</span>
                    <i className="fas fa-arrow-right text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 relative z-10"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-[#FFF8F5] to-[#FEEEDE] relative overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#624A58]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#624A58]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#624A58] mb-4">Achievements</h2>
            <p className="text-xl text-[#624A58]/70 max-w-2xl mx-auto mb-6">
              Milestones and recognition that mark my professional journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#624A58] to-[#624A58]/50 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "fas fa-star",
                  title: "Grand Finale Shortlist",
                  description: "Shortlisted for the Grand Finale of Arttd’inox 3D Challenge 2.0",
                  year: "2023",
                  color: "from-yellow-500 to-amber-500",
                  medal: "Finalist"
                }
                ,

                {
                  icon: "fas fa-star",
                  title: "Artist Achievement Award",
                  description: "Consecutive recognition by Chandigarh University",
                  year: "2024",
                  color: "from-fuchsia-500 to-rose-400",
                  medal: "Artist"
                },
                {
                  icon: "fas fa-star",
                  title: "Artist Achievement Award",
                  description: "Consecutive recognition by Chandigarh University",
                  year: "2023",
                  color: "from-violet-600 to-pink-300",
                  medal: "Artist"
                },
                {
                  icon: "fas fa-graduation-cap",
                  title: "Academic Achievement Award",
                  description: "Recognized by Chandigarh University",
                  year: "2023",
                  color: "from-blue-500 to-indigo-600",
                  medal: "Academic"
                },
                {
                  icon: "fas fa-trophy",
                  title: "Gold Medal - Poster Making",
                  description: "36th Inter-University National Youth Festival",
                  year: "2024",
                  color: "from-yellow-500 to-amber-500",
                  medal: "Gold"
                },
                {
                  icon: "fas fa-trophy",
                  title: "Gold Medal - Installation Art",
                  description: "Best out of waste - 36th Inter-University National Youth Festival",
                  year: "2023",
                  color: "from-yellow-500 to-amber-500",
                  medal: "Gold"
                },
                {
                  icon: "fas fa-trophy",
                  title: "Gold Medal - On-the-spot Painting",
                  description: "36th Inter-University National Youth Festival",
                  year: "2023",
                  color: "from-yellow-500 to-amber-500",
                  medal: "Gold"
                },
                {
                  icon: "fas fa-medal",
                  title: "Bronze Medal - On-the-spot Painting",
                  description: "36th Inter-University National Youth Festival",
                  year: "2024",
                  color: "from-amber-600 to-orange-600",
                  medal: "Bronze"
                },
                {
                  icon: "fas fa-medal",
                  title: "Bronze Medal - On-the-spot Painting",
                  description: "Punjab Youth Festival",
                  year: "2023",
                  color: "from-amber-600 to-orange-600",
                  medal: "Bronze"
                }
              ].map((achievement, index) => (
                <div key={index} className="group relative">
                  {/* Decorative background */}
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-[#624A58]/10 to-[#624A58]/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#624A58]/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Achievement Icon & Year */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg relative`}>
                        <i className={`${achievement.icon} text-white text-2xl`}></i>

                      </div>
                      <div className="bg-[#624A58]/10 text-[#624A58] px-4 py-2 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </div>
                    </div>

                    {/* Achievement Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#624A58] group-hover:text-[#4a3743] transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-[#624A58]/80 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-2xl">
                        {achievement.medal === "Gold" ? "🥇" : achievement.medal === "Bronze" ? "🥉" : "🏅"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#FEEEDE] to-[#FFF8F5] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#624A58]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#624A58]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#624A58] mb-4">Get In Touch</h2>
            <p className="text-xl text-[#624A58]/70 max-w-2xl mx-auto mb-6">
              Ready to transform your space? Let's collaborate to create something extraordinary together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#624A58] to-[#624A58]/50 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              {/* Contact Information Card */}
              <div className="relative">
                {/* Decorative background shapes */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#624A58]/10 to-[#624A58]/5 rounded-2xl transform rotate-2"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#624A58]/20 rounded-2xl transform -rotate-2"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#624A58]/10 h-full flex flex-col justify-center">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#624A58] to-[#4a3743] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <i className="fas fa-home text-[#FEEEDE] text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-[#624A58] mb-4">Let's Create Together</h3>
                    <p className="text-[#624A58]/80 leading-relaxed text-lg">
                      Bringing your interior vision to life with creativity and precision.
                    </p>
                  </div>

                  {/* Contact Email */}
                  <div className="flex items-center justify-center gap-3 group mb-12">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#624A58]/20 to-[#624A58]/10 rounded-xl flex items-center justify-center group-hover:from-[#624A58] group-hover:to-[#4a3743] transition-all duration-300">
                      <i className="fas fa-envelope text-[#624A58] group-hover:text-[#FEEEDE] text-base transition-colors duration-300"></i>
                    </div>
                    <a
                      href="mailto:safadzynstudio@gmail.com"
                      className="text-[#624A58]/80 hover:text-[#624A58] transition-colors text-base font-medium"
                    >
                      safadzynstudio@gmail.com
                    </a>
                  </div>

                  {/* Social Media Links */}
                  <div>
                    {/* Divider line */}
                    <div className="border-t border-[#624A58]/20 mb-8"></div>

                    <h4 className="font-semibold text-[#624A58] mb-6 text-center text-lg">Follow My Work</h4>
                    <div className="flex justify-center gap-4">
                      <a
                        href="https://www.instagram.com/safadesignstudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#E1306C]/20 to-[#E1306C]/10 rounded-xl flex items-center justify-center hover:from-[#E1306C] hover:to-[#C13584] transition-all duration-300 group"
                      >
                        <i className="fab fa-instagram text-[#E1306C] group-hover:text-white text-xl transition-colors duration-300"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/faraiharehman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#0077b5]/20 to-[#0077b5]/10 rounded-xl flex items-center justify-center hover:from-[#0077b5] hover:to-[#005582] transition-all duration-300 group"
                      >
                        <i className="fab fa-linkedin text-[#0077b5] group-hover:text-white text-xl transition-colors duration-300"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="relative">
                {/* Decorative background shapes */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#624A58]/10 to-[#624A58]/5 rounded-2xl transform -rotate-2"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#624A58]/20 rounded-2xl transform rotate-2"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#624A58]/10 h-full flex flex-col">
                  <div className="mb-4 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#624A58] to-[#4a3743] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <i className="fas fa-paper-plane text-[#FEEEDE] text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-[#624A58] mb-2">Start Your Project</h3>
                    <p className="text-[#624A58]/80">Tell me about your design dreams and let's make them reality</p>
                  </div>

                  <form
                    action="https://formspree.io/f/mzzgpqog"
                    method="POST"
                    className="flex-grow flex flex-col space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full border-2 border-[#624A58]/30 rounded-xl px-6 py-3 text-[#624A58] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#624A58] focus:border-transparent transition-all duration-300 group-hover:border-[#624A58]/50"
                          required
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full border-2 border-[#624A58]/30 rounded-xl px-6 py-3 text-[#624A58] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#624A58] focus:border-transparent transition-all duration-300 group-hover:border-[#624A58]/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project Type (e.g. Residential, Commercial, Renovation)"
                        className="w-full border-2 border-[#624A58]/30 rounded-xl px-6 py-3 text-[#624A58] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#624A58] focus:border-transparent transition-all duration-300 group-hover:border-[#624A58]/50"
                      />
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        rows="1"
                        placeholder="Let's shape your dream space. Share your thoughts here..."
                        className="w-full min-h-[57px] border-2 border-[#624A58]/30 rounded-xl px-6 py-3 text-[#624A58] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#624A58] focus:border-transparent transition-all duration-300 group-hover:border-[#624A58]/50 resize-none"
                        required
                      />
                    </div>


                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#624A58] to-[#4a3743] text-[#FEEEDE] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden mt-auto"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4a3743] to-[#624A58] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <i className="fas fa-paper-plane text-lg group-hover:animate-pulse relative z-10"></i>
                      <span className="relative z-10">Send Message</span>
                      <i className="fas fa-arrow-right text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 relative z-10"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#624A58] text-[#FEEEDE] py-12 px-8 border-t border-[#624A58]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <a
                href="mailto:safadesignstudio@gmail.com"
                className="flex items-center gap-3 hover:text-[#F8B195] transition-all duration-300 hover:scale-105 font-medium"
              >
                <i className="fas fa-envelope text-base"></i>
                safadzynstudio@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/safadesignstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#E1306C] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/faraiharehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#0077b5] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-[#FEEEDE]/80 font-light tracking-wide">
              © {new Date().getFullYear()} Faraiha Rehman
            </div>
          </div>
        </div>
      </footer>


      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] mx-4 relative"
            onClick={(e) => e.stopPropagation()} // stops modal from closing when clicking on image
          >
            <img src={selectedImage}
              alt="Full View"
              className="w-full h-auto object-contain rounded-xl shadow-2xl border-4 border-[#FEEEDE]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-[#FEEEDE] text-4xl hover:text-white transition"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
