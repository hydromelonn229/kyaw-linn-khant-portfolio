import React, { useState } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function SelfBalancingRobot() {
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
            Self-Balancing Robot
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
            href="#cad-model" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            CAD Model
          </a>
          <a 
            href="#mujoco-training" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            MuJoCo Training
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">AI-Powered Self-Balancing Robot</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project demonstrates the implementation of a self-balancing robot using reinforcement learning. The robot maintains its balance through 
                continuous adjustments based on sensor feedback, showcasing the practical application of AI in robotics.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img3} alt="Self-Balancing Robot Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The self-balancing robot project combines hardware and software components to create a system that can maintain its balance autonomously. 
                Key features include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Real-time sensor data processing</li>
                <li>Reinforcement learning-based control system</li>
                <li>Precise motor control for balance maintenance</li>
                <li>Adaptive response to environmental changes</li>
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
                  <span className="text-gray-700">Raspberry Pi 4</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">MPU6050 Gyroscope</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">DC Motors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Motor Driver</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Battery Pack</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Chassis</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CAD Model Section */}
          <section id="cad-model" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">CAD Model</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                A detailed Fusion 360 model where I designed the robot with a strong focus on even weight distribution and an optimized weight-to-height ratio. 
                The goal was to enhance the robot's energy efficiency and stability during self-balancing operations. By carefully arranging the placement of 
                components such as motors, batteries, sensors, and the control board, I ensured that the center of mass remained low and centered between the wheels. 
                This design not only supports better dynamic balance but also reduces the energy required for constant micro-adjustments, resulting in a more efficient 
                and responsive self-balancing system. The CAD model reflects both functional and aesthetic considerations, serving as the foundation for both simulation 
                and real-world deployment.
              </p>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img1} alt="CAD Model of Self-Balancing Robot" className="w-full h-auto object-cover" />
            </div>
          </section>

          {/* MuJoCo Training Section */}
          <section id="mujoco-training" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">MuJoCo Training</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                A simplified MuJoCo model was created to simulate the core dynamics of the self-balancing robot, focusing on essential components like the body and 
                wheels to speed up training and reduce complexity. The robot was trained using the Proximal Policy Optimization (PPO) algorithm, which allowed it to 
                learn balance control through trial and error. The training process involved continuous feedback from the simulation, where the agent improved its 
                stability by minimizing falls and adjusting to small disturbances. This approach resulted in a robust policy that could be transferred to real hardware 
                for efficient and reliable self-balancing behavior.
              </p>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto">
              <img src={img2} alt="MuJoCo Training Visualization" className="w-full h-auto object-cover" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SelfBalancingRobot; 