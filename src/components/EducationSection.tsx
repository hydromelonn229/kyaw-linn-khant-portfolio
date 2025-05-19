import React from 'react';

function EducationSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Education</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">PSB Academy</h3>
          <p className="text-gray-600">Diploma in Infocomm Technology</p>
          <p className="text-gray-500">Jul 2022 - Mar 2023</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-700">University of Hertfordshire</h3>
          <p className="text-gray-600">Bachelor of Engineering Honours in Robotics and Artificial Intelligence</p>
          <p className="text-gray-500">Sep 2023 - Aug 2025</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection; 