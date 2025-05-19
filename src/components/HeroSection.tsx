import React from 'react';
import img from './img.jpg';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="md:w-1/2">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
            Kyaw Linn Khant
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">Robotics and AI Engineering Graduate</h2>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <span className="font-mono text-blue-500 mr-2">&gt;</span>
            <span className="font-medium">Email:</span>
            <a href="mailto:klkhant707@gmail.com" className="text-blue-600 hover:text-blue-500 ml-2 transition-colors duration-200">klkhant707@gmail.com</a>
          </div>
          <div className="flex items-center">
            <span className="font-mono text-blue-500 mr-2">&gt;</span>
            <span className="font-medium">Phone:</span>
            <a href="tel:+6590072027" className="text-blue-600 hover:text-blue-500 ml-2 transition-colors duration-200">+65 90072027</a>
          </div>
          <div className="flex items-center">
            <span className="font-mono text-blue-500 mr-2">&gt;</span>
            <span className="font-medium">LinkedIn:</span>
            <a href="http://linkedin.com/in/kyaw-linn-khant-137200266" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 ml-2 transition-colors duration-200">kyaw-linn-khant-137200266</a>
          </div>
          <div className="flex items-center">
            <span className="font-mono text-blue-500 mr-2">&gt;</span>
            <span className="font-medium">Location:</span>
            <span className="text-blue-600 ml-2">Singapore</span>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <img 
            src={img} 
            alt="Kyaw Linn Khant" 
            className="w-full h-full object-cover brightness-110 contrast-110"
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 