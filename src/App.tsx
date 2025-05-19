import React from 'react';
import HeroSection from './components/HeroSection.tsx';
import ObjectiveSection from './components/ObjectiveSection.tsx';
import AboutMeSection from './components/AboutMeSection.tsx';
import EducationSection from './components/EducationSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import CoCurricularSection from './components/CoCurricularSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wide text-blue-900">Kyaw Linn Khant</span>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#objective" className="hover:text-blue-600">Objective</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#education" className="hover:text-blue-600">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#co-curricular" className="hover:text-blue-600">Co-curricular</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
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
