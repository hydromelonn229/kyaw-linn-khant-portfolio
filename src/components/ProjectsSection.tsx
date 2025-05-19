import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border-2 border-gray-200 bg-white">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Projects</h2>
      <div className="space-y-6">
        <div className="group">
          <Link to="/projects/self-balancing-robot" className="block p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg border-2 border-gray-200 hover:border-blue-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-600 transition-colors duration-200">AI-Powered Self-Balancing Robot</h3>
                <p className="text-gray-600 mt-2 group-hover:text-gray-700">Developed a self-balancing robot using reinforcement learning in MuJoCo and deployed on Raspberry Pi.</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                <span className="text-blue-500 font-medium">View Details →</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group">
          <Link to="/projects/autonomous-vehicle" className="block p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg border-2 border-gray-200 hover:border-blue-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-600 transition-colors duration-200">Autonomous Microcontroller Vehicle</h3>
                <p className="text-gray-600 mt-2 group-hover:text-gray-700">Built an autonomous vehicle using embedded systems and sensor integration.</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                <span className="text-blue-500 font-medium">View Details →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection; 