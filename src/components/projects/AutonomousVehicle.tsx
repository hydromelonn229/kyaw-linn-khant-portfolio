import React, { useState } from 'react';
import img4 from './img4.jpg';

function AutonomousVehicle() {
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
            Autonomous Vehicle
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
            href="#implementation" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Implementation
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Autonomous Microcontroller Vehicle</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project demonstrates the development of an autonomous vehicle using embedded systems and sensor integration. The vehicle can navigate 
                through environments while avoiding obstacles and following predefined paths.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img4} alt="Autonomous Vehicle Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The autonomous vehicle project combines various technologies to create a self-navigating system. Key features include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Real-time obstacle detection and avoidance</li>
                <li>Path planning and navigation algorithms</li>
                <li>Sensor fusion for accurate positioning</li>
                <li>Autonomous decision-making capabilities</li>
              </ul>
            </div>
          </section>

          {/* Components List */}
          <section id="components" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Components</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">STM32 Nucleo-F411RE</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">L298N Motor Driver</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">12v li-ion rechargeable battery</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">3x HC-SR04 ultrasonic sensors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">3x Sharp GP2Y0A21YK IR distance sensors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">2x TT motors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Castor wheel</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">4x SG90 Servos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">BLE4.0 HM-10</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Push Button</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Resistors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Jumper Wires</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Breadboard</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Implementation */}
          <section id="implementation" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Implementation</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The implementation process involved several key steps:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hardware assembly and sensor calibration</li>
                <li>Development of control algorithms</li>
                <li>Integration of navigation systems</li>
                <li>Testing and optimization</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AutonomousVehicle; 