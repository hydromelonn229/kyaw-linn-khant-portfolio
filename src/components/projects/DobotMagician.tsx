import React from 'react';
import img7 from './img7.png';

function DobotMagician() {
  return (
    <div className="flex min-h-screen">
      {/* Vertical Navigation */}
      <aside className="w-64 fixed left-0 top-0 h-screen bg-white border-r border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Navigation</h3>
        <nav className="space-y-2">
          <a href="#header" className="block text-gray-600 hover:text-blue-700 transition-colors">Dobot Magician Pick and Place</a>
          <a href="#overview" className="block text-gray-600 hover:text-blue-700 transition-colors">Project Overview</a>
          <a href="#simulation" className="block text-gray-600 hover:text-blue-700 transition-colors">Simulation Software</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Dobot Magician Pick and Place Simulation</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project simulates an automated pick-and-place process using the Dobot Magician robotic arm. The simulation replicates industrial material handling tasks, 
                where the robot identifies objects at a source location, picks them up with precision, and places them at a designated target position. Using a virtual environment, 
                the Dobot Magician's movements are programmed and tested to optimize joint coordination, path planning, and execution speed. This simulation serves as a foundational 
                model for real-world automation scenarios, offering insights into robotic manipulation, workspace calibration, and task efficiency in manufacturing and logistics applications.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img7} alt="Dobot Magician Pick and Place Simulation Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project showcases an intelligent pick and place system using the Dobot Magician robotic arm integrated with a vision sensor and conveyor belt. The vision sensor 
                detects the color of incoming objects on the conveyor and informs the robot's sorting decision in real time. If a red object is detected, the robot picks it and places 
                it on the right side. If the object is green, it is placed on the left. This automated color-based sorting improves efficiency and reduces the need for manual intervention.
              </p>
              <p className="mt-4">
                In addition to basic sorting, the system includes a dynamic stacking mechanism that constructs a four-brick pyramid. The robot calculates and adjusts each placement position 
                to maintain balance and structure as it builds. This adds a layer of spatial awareness and precision to the system, demonstrating both real-time decision-making and controlled 
                stacking within a simulated environment. The combination of vision-guided control, automated sorting, and structured stacking makes this project a strong example of smart robotic 
                manipulation in a semi-industrial setting.
              </p>
            </div>
          </section>

          {/* Simulation Software */}
          <section id="simulation" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Simulation Software</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The project was developed and tested using coppeliaSim, a powerful robotics simulation platform. This allowed for thorough testing of the Dobot Magician's movements, 
                vision sensor integration, and the coordination between the robot and conveyor system in a safe, controlled environment before real-world deployment.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DobotMagician; 