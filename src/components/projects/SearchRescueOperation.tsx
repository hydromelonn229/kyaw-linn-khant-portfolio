import React, { useState } from 'react';
import img5 from './img5.png';
import img6 from './img6.png';

function SearchRescueOperation() {
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
            Search and Rescue Operation
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
          <a 
            href="#gui" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            GUI Interface
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Search and Rescue Operation with BoomBot and Quadcopter</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project combines aerial and ground robotics to support search and rescue missions in challenging environments. A quadcopter is deployed to perform 
                rapid aerial scanning of the target area, identifying and marking points of interest such as victims or obstacles using onboard sensors and visual markers. 
                Once targets are marked, BoomBot — a ground robot — receives the coordinates and autonomously navigates the terrain using the fastest and most efficient 
                path possible.
              </p>
              <p className="mt-4">
                BoomBot uses real-time path planning algorithms to avoid obstacles and prioritize speed, ensuring swift ground-level access to marked locations. This 
                coordinated system between the aerial drone and ground robot improves coverage, responsiveness, and operational efficiency in time-critical rescue scenarios. 
                The project demonstrates the power of multi-agent robotic systems for intelligent, cooperative task execution in complex environments.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img5} alt="Search and Rescue Operation Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project focuses on a coordinated flood recovery system that integrates aerial scanning, ground navigation, and a remote user interface to support 
                efficient and safe post-disaster response.
              </p>
              <p className="mt-4">
                A quadcopter equipped with a live camera and depth sensor is deployed to perform aerial surveillance of flood-affected areas. It scans the environment 
                in real time, identifying victims or points of interest. Each detection is logged with GPS coordinates, depth data, and a timestamp, allowing for precise 
                documentation and follow-up. The system supports allocation of multiple target points, enabling comprehensive area coverage in a single flight.
              </p>
              <p className="mt-4">
                These marked locations are then assigned to BoomBot, an autonomous ground robot responsible for navigating to each site using the fastest possible route. 
                BoomBot utilizes obstacle avoidance and real-time path planning to operate effectively in debris-filled or unstable environments.
              </p>
              <p className="mt-4">
                All operations are controlled and monitored through a custom-built PyQt5 GUI application. The GUI provides remote access to live video feeds, depth data, 
                coordinate logs, and robot status, allowing operators to manage missions, review detections, and make informed decisions from a safe distance.
              </p>
              <p className="mt-4">
                The system also includes both manual and automatic speed control features for the ground robot (BoomBot), enhancing adaptability based on mission needs 
                and terrain conditions. Through the PyQt5 GUI application, operators can adjust the robot's speed in real time using an intuitive slider bar. In manual 
                mode, the slider allows direct user control, enabling precise maneuvering in tight or obstacle-heavy environments. In automatic mode, the robot dynamically 
                adjusts its speed based on environmental feedback, such as obstacle proximity or terrain type, to maintain optimal balance between speed and safety. This 
                dual-mode speed control ensures flexible and responsive operation during critical recovery missions.
              </p>
              <p className="mt-4">
                This integrated solution enhances the efficiency, accuracy, and safety of flood recovery efforts by combining autonomous robotics with intuitive remote 
                control and real-time situational awareness.
              </p>
            </div>
          </section>

          {/* Simulation Software */}
          <section id="simulation" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Simulation Software</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The project was developed and tested using coppeliaSim, a powerful robotics simulation platform. This allowed for thorough testing of the quadcopter's 
                flight patterns, BoomBot's navigation algorithms, and the coordination between both systems in a safe, controlled environment before real-world deployment.
              </p>
            </div>
          </section>

          {/* GUI Interface */}
          <section id="gui" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">GUI Interface</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The custom PyQt5 GUI application serves as the central control hub for the entire system. It provides operators with real-time access to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Live video feeds from the quadcopter</li>
                <li>Depth sensor data visualization</li>
                <li>GPS coordinate tracking and logging</li>
                <li>Robot status monitoring</li>
                <li>Speed control interface</li>
                <li>Mission management tools</li>
              </ul>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img6} alt="GUI Interface" className="w-full h-auto object-cover" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SearchRescueOperation; 