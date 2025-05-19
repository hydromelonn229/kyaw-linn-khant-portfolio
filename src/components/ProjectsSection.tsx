import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Projects</h2>
      <div className="space-y-6">
        <div>
          <Link to="/projects/self-balancing-robot" className="group">
            <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-600 transition-colors duration-200">AI-Powered Self-Balancing Robot</h3>
            <p className="text-gray-600">Developed a self-balancing robot using reinforcement learning in MuJoCo and deployed on Raspberry Pi.</p>
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Autonomous Microcontroller Vehicle</h3>
          <p className="text-gray-600">Built an autonomous vehicle using embedded systems and sensor integration.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection; 