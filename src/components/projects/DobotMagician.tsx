import React, { useState } from 'react';
import img7 from './img7.png';

function DobotMagician() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-lg border border-gray-200"
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

      {/* Vertical Navigation */}
      <aside className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:sticky top-0 inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 p-6 transition-transform duration-300 ease-in-out h-screen overflow-y-auto`}>
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Navigation</h3>
        <nav className="space-y-2">
          <a 
            href="#header" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dobot Magician Pick and Place Simulation
          </a>
          <a 
            href="#overview" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Project Overview
          </a>
          <a 
            href="#simulation" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Simulation Software
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Dobot Magician Pick and Place Simulation</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project simulates an automated pick-and-place process using the Dobot Magician robotic arm in CoppeliaSim. The simulation demonstrates the 
                robot's ability to perform precise movements and object manipulation tasks, showcasing its potential applications in industrial automation and 
                manufacturing processes.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img7} alt="Dobot Magician Simulation Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The Dobot Magician is a versatile robotic arm designed for educational and industrial applications. In this project, we created a simulation 
                environment in CoppeliaSim to demonstrate its capabilities in performing pick-and-place operations. The simulation includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Precise end-effector control for object manipulation</li>
                <li>Path planning and collision avoidance</li>
                <li>Realistic physics simulation of object interactions</li>
                <li>Visualization of robot movements and workspace</li>
              </ul>
            </div>
          </section>

          {/* Simulation Software */}
          <section id="simulation" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Simulation Software</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                CoppeliaSim (formerly V-REP) was used as the simulation platform due to its powerful features and ease of use. The simulation includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Accurate kinematic model of the Dobot Magician</li>
                <li>Custom scripts for motion control and task automation</li>
                <li>Realistic rendering of the robot and environment</li>
                <li>Performance analysis and optimization tools</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DobotMagician; 