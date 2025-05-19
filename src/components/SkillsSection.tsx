import React from 'react';

const skills = [
  // Programming Languages & Tools
  'Python', 'C++', 'Git/Github', 'Linux/Bash',
  
  // Robotics & Simulation
  'CoppeliaSim', 'Webots', 'MuJoCo', 'ROS', 'Simulation and Modeling',
  
  // Hardware & Embedded Systems
  'Arduino', 'STM32', 'RaspberryPi', 'Embedded Systems', 'Sensor Integration',
  'Zigbee Communication',
  
  // Software & Development
  'PyQt5', 'OpenCV', 'MATLAB', 'Multisim',
  
  // AI & Machine Learning
  'Machine Learning', 'Reinforcement Learning', 'Computer Vision',
  
  // Design & Documentation
  'CAD (Fusion360)', 'Technical Writing', 'GUI'
];

function SkillsSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Technical Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection; 