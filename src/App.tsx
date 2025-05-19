import React from 'react';
import HeroSection from './components/HeroSection.tsx';
import ObjectiveSection from './components/ObjectiveSection.tsx';
import AboutMeSection from './components/AboutMeSection.tsx';
import EducationSection from './components/EducationSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import CoCurricularSection from './components/CoCurricularSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';

function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // Height of your navbar
      const sectionTop = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans scroll-smooth">
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wide text-blue-900">Kyaw Linn Khant</span>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-blue-600 transition-colors duration-200">Home</a></li>
            <li><a href="#objective" onClick={(e) => scrollToSection(e, 'objective')} className="hover:text-blue-600 transition-colors duration-200">Objective</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-600 transition-colors duration-200">About</a></li>
            <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-blue-600 transition-colors duration-200">Education</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
            <li><a href="#co-curricular" onClick={(e) => scrollToSection(e, 'co-curricular')} className="hover:text-blue-600 transition-colors duration-200">Co-curricular</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-blue-600 transition-colors duration-200">Skills</a></li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <section id="hero"><HeroSection /></section>
        <section id="objective" className="mt-16"><ObjectiveSection /></section>
        <section id="about" className="mt-16"><AboutMeSection /></section>
        <section id="education" className="mt-16"><EducationSection /></section>
        <section id="projects" className="mt-16"><ProjectsSection /></section>
        <section id="co-curricular" className="mt-16"><CoCurricularSection /></section>
        <section id="skills" className="mt-16"><SkillsSection /></section>
      </main>
    </div>
  );
}

export default App;
