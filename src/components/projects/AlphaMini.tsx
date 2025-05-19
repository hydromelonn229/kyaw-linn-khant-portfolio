import React, { useState } from 'react';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';

function AlphaMini() {
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
            AlphaMini Bricklaying Robot
          </a>
          <a 
            href="#overview" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Project Overview
          </a>
          <a 
            href="#components" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Components
          </a>
          <a 
            href="#cad" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            CAD Models
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">AlphaMini Bricklaying Robot</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project presents a voice-controlled bricklaying robot prototype that demonstrates precise manipulation capabilities. The robot is designed to 
                automate the process of laying bricks in a structured pattern, reducing manual labor and improving efficiency in construction tasks.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img12} alt="AlphaMini Bricklaying Robot Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The AlphaMini bricklaying robot is an innovative solution that combines voice recognition technology with precise robotic control. The system 
                features:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Voice command interface for intuitive control</li>
                <li>Precise end-effector positioning for accurate brick placement</li>
                <li>Automated pattern recognition for consistent bricklaying</li>
                <li>Real-time feedback and adjustment capabilities</li>
              </ul>
            </div>
          </section>

          {/* CAD Models */}
          <section id="cad" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">CAD Models</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The robot's design was developed through multiple iterations using CAD software. The final design incorporates:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={img8} alt="CAD Model 1" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={img9} alt="CAD Model 2" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={img10} alt="CAD Model 3" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={img11} alt="CAD Model 4" className="w-full h-auto object-cover" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AlphaMini; 