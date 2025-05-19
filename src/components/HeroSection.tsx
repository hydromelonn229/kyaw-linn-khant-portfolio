import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-xl shadow p-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">Kyaw Linn Khant</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">Robotics Engineer</h2>
        <div className="space-y-1 text-gray-700">
          <div><span className="font-medium">Email:</span> <a href="mailto:klkhant707@gmail.com" className="text-blue-600 hover:underline">klkhant707@gmail.com</a></div>
          <div><span className="font-medium">Phone:</span> <a href="tel:+6590072027" className="text-blue-600 hover:underline">+65 90072027</a></div>
          <div><span className="font-medium">LinkedIn:</span> <a href="http://linkedin.com/in/kyaw-linn-khant-137200266" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kyaw-linn-khant-137200266</a></div>
          <div><span className="font-medium">Location:</span> Singapore</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 