import React from 'react';

const skills = [
  'Python', 'C++', 'CoppeliaSim', 'Webots', 'PyQt5', 'ROS', 'MuJoCo', 'CAD (Fusion360)',
  'Embedded Systems', 'GUI', 'Computer Vision'
];

function SkillsSection() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection; 