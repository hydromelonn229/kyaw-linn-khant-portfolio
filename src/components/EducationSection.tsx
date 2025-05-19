import React from 'react';

function EducationSection() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Diploma in Infocomm Technology – PSB Academy</h3>
          <p className="text-gray-600">2022–2023</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Bachelor of Engineering Honours in Robotics and Artificial Intelligence – University of Hertfordshire</h3>
          <p className="text-gray-600">2023–2025</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection; 