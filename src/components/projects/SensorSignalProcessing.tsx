import React, { useState } from 'react';
import img16 from './img16.jpg';

function SensorSignalProcessing() {
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
            Sensor and Signal Processing
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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sensor and Signal Processing</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project showcases a Raspberry Pi–based system that processes sensor inputs to control an actuator in real time. A potentiometer is used to provide 
                analog input, which is read and digitized for signal interpretation. An HC-SR04 ultrasonic sensor measures distance, providing spatial awareness to the 
                system. The processed signals from both the potentiometer and the ultrasonic sensor are used to control an SG90 servo motor, allowing it to respond 
                dynamically to changes in distance or manual input. This setup highlights core concepts in sensor integration, signal conditioning, and real-time control, 
                demonstrating how multiple inputs can be fused to drive intelligent actuator behavior in embedded systems.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img16} alt="Sensor and Signal Processing Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project involves a Raspberry Pi–based sensor and actuator control system designed to demonstrate real-time signal processing and intelligent response. 
                The setup includes a potentiometer for manual input, an HC-SR04 ultrasonic sensor for obstacle detection, and an SG90 servo motor for actuation. The system 
                also incorporates a limit switch for homing and restarting, along with LEDs to provide visual feedback on system status.
              </p>
              <p className="mt-4">
                Extensive testing and validation were conducted to ensure accurate functionality and seamless integration of all components. The servo motor was successfully 
                calibrated using the limit switch to find its home position, while the potentiometer accurately controlled its angle. The ultrasonic sensor reliably measured 
                distances and activated the LEDs when obstacles were detected within 15 cm. The system could be restarted without error, re-initializing all modules effectively.
              </p>
              <p className="mt-4">
                The final system demonstrated consistent performance across multiple test cycles. It could execute homing procedures, switch to manual control via the 
                potentiometer, detect nearby obstacles, and halt servo movement when necessary. Visual indicators provided clear status updates, contributing to an intuitive 
                and user-friendly experience. This project highlights the practical integration of sensor inputs, signal processing, and actuator control in an embedded system 
                environment.
              </p>
            </div>
          </section>

          {/* Components List */}
          <section id="components" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Components</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Raspberry Pi 4B</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">MCP3008 ADC (Analog to Digital Converter)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">SG90 Servo Motor</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Ultrasonic sensor (HC-SR04)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Potentiometer</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">LEDs (Red and Green)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Limit switch</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Resistors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Jumper Wires</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Breadboard</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SensorSignalProcessing; 