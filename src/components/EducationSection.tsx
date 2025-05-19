import React from 'react';

function EducationSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Education</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Singapore Institute of Technology</h3>
          <p className="text-gray-600">Bachelor of Engineering in Robotics and AI</p>
          <p className="text-gray-500">2021 - 2024</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Singapore Polytechnic</h3>
          <p className="text-gray-600">Diploma in Mechatronics and Robotics</p>
          <p className="text-gray-500">2018 - 2021</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection; 