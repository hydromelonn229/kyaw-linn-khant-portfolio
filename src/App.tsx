import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection.tsx';
import AboutMeSection from './components/AboutMeSection.tsx';
import EducationSection from './components/EducationSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import CoCurricularSection from './components/CoCurricularSection.tsx';
import SoftSkillsSection from './components/SoftSkillsSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import SelfBalancingRobot from './components/projects/SelfBalancingRobot.tsx';
import AutonomousVehicle from './components/projects/AutonomousVehicle.tsx';
import SearchRescueOperation from './components/projects/SearchRescueOperation.tsx';
import DobotMagician from './components/projects/DobotMagician.tsx';
import AlphaMini from './components/projects/AlphaMini.tsx';
import WirelessZigbee from './components/projects/WirelessZigbee.tsx';

function Navigation() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64;
      const sectionTop = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold tracking-wide text-blue-900">Kyaw Linn Khant</span>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg 
              className="h-6 w-6 text-gray-600" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
            {isProjectPage ? (
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
                  ← Back to Home
                </Link>
              </li>
            ) : (
              <>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-blue-600 transition-colors duration-200">Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-600 transition-colors duration-200">About</a></li>
                <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-blue-600 transition-colors duration-200">Education</a></li>
                <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
                <li><a href="#co-curricular" onClick={(e) => scrollToSection(e, 'co-curricular')} className="hover:text-blue-600 transition-colors duration-200">Co-curricular</a></li>
                <li><a href="#soft-skills" onClick={(e) => scrollToSection(e, 'soft-skills')} className="hover:text-blue-600 transition-colors duration-200">Soft Skills</a></li>
                <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-blue-600 transition-colors duration-200">Skills</a></li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <ul className="space-y-3 text-gray-600 font-medium">
            {isProjectPage ? (
              <li>
                <Link 
                  to="/" 
                  className="block py-2 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ← Back to Home
                </Link>
              </li>
            ) : (
              <>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 hover:text-blue-600 transition-colors duration-200">About</a></li>
                <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Education</a></li>
                <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Projects</a></li>
                <li><a href="#co-curricular" onClick={(e) => scrollToSection(e, 'co-curricular')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Co-curricular</a></li>
                <li><a href="#soft-skills" onClick={(e) => scrollToSection(e, 'soft-skills')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Soft Skills</a></li>
                <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="block py-2 hover:text-blue-600 transition-colors duration-200">Skills</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans scroll-smooth bg-white">
        <Navigation />
        <Routes>
          <Route path="/projects/self-balancing-robot" element={<SelfBalancingRobot />} />
          <Route path="/projects/autonomous-vehicle" element={<AutonomousVehicle />} />
          <Route path="/projects/search-rescue-operation" element={<SearchRescueOperation />} />
          <Route path="/projects/dobot-magician" element={<DobotMagician />} />
          <Route path="/projects/alpha-mini" element={<AlphaMini />} />
          <Route path="/projects/wireless-zigbee" element={<WirelessZigbee />} />
          <Route path="/" element={
            <main className="container mx-auto px-4 py-8">
              <section id="hero" className="mb-16"><HeroSection /></section>
              <section id="about" className="mb-16"><AboutMeSection /></section>
              <section id="education" className="mb-16"><EducationSection /></section>
              <section id="projects" className="mb-16"><ProjectsSection /></section>
              <section id="co-curricular" className="mb-16"><CoCurricularSection /></section>
              <section id="soft-skills" className="mb-16"><SoftSkillsSection /></section>
              <section id="skills" className="mb-16"><SkillsSection /></section>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
