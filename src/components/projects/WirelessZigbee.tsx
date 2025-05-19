import React, { useState } from 'react';
import img13 from './img13.jpg';
import img14 from './img14.jpg';
import img15 from './img15.jpg';

function WirelessZigbee() {
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
            Wireless Zigbee Communication
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
          <a 
            href="#wiring" 
            className="block text-gray-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Wiring Diagrams
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Wireless Zigbee Communication</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project implements wireless communication using Zigbee modules to enable reliable, low-power data exchange between multiple devices in a robotics 
                or sensor network setup. Zigbee's mesh networking capability allows for extended range and robust connectivity, making it ideal for applications 
                requiring distributed control or monitoring. The system supports real-time transmission of control commands and sensor data, ensuring synchronized 
                operation between nodes without the need for physical wiring. This wireless setup enhances flexibility, scalability, and mobility in embedded and 
                IoT-based projects.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img13} alt="Wireless Zigbee Communication Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project establishes a secure wireless communication system using two Zigbee (XBee-S2C) modules paired with STM32 Nucleo development boards 
                (F411RE and F401RE). The system enables real-time data exchange between the two microcontrollers, each interfacing with various sensors and 
                actuators. A Light Dependent Resistor (LDR) and a potentiometer are used as input devices, while an SG90 continuous rotation servo responds 
                to the received data for actuation tasks.
              </p>
              <p className="mt-4">
                To ensure data privacy and prevent unauthorized access, all transmitted data is encrypted using AES-128 encryption, leveraging Zigbee's built-in 
                security features. This setup allows for secure control and monitoring in applications where data integrity and confidentiality are essential. 
                The combination of low-power wireless communication and hardware-based encryption makes the system suitable for IoT, remote sensing, and embedded 
                control applications where safety, flexibility, and reliability are critical.
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
                  <span className="text-gray-700">2x Zigbee (Xbee-S2C)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">STM32 Nucleo-F411RE</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">STM32 Nucleo-F401RE</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Light Dependant Resistor</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Potentiometer</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">SG90 (Continuous servo)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Resistor</span>
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

          {/* Wiring Diagrams */}
          <section id="wiring" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Wiring Diagrams</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The following diagrams show the wiring setup for both the transmitter and receiver nodes of the Zigbee communication system.
              </p>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img14} alt="Zigbee Communication Wiring Diagram 1" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img15} alt="Zigbee Communication Wiring Diagram 2" className="w-full h-auto object-cover" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default WirelessZigbee; 