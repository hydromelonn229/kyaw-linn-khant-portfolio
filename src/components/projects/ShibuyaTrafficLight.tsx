import React, { useState } from 'react';
import img17 from './img17.jpg';

function ShibuyaTrafficLight() {
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
            Shibuya Traffic Light System
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
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Shibuya Traffic Light System</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project is a microcontroller-based simulation of the Shibuya Crossing traffic light system, designed using LED indicators and user-controlled state transitions. 
                It mimics the real-world behavior of an intelligent intersection by managing vehicle and pedestrian lights across multiple phases. The system operates through defined 
                states, including a default idle mode, synchronized traffic light sequencing with blinking amber lights, a pedestrian crossing phase with dynamic LED feedback, and 
                system shutdown and restart functions. User interaction is handled via button presses, which control transitions between states and simulate manual override or 
                pedestrian input. The project highlights real-time control logic, state machine implementation, and interactive embedded system design.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img17} alt="Shibuya Traffic Light System Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project simulates a state-driven traffic light control system inspired by the Shibuya Crossing, using an embedded platform with LEDs and user input. 
                The system is structured around five key operational states, each handling a specific phase of the simulation.
              </p>
              <p className="mt-4">
                In the DEFAULT state, the system maintains a steady configuration with Green and Red LEDs active, acting as the idle mode. It returns to this state after 
                system restart to prevent unintentional transitions into active traffic sequences.
              </p>
              <p className="mt-4">
                The TRAFFIC_LIGHT_SEQUENCE state simulates synchronized vehicle traffic lights, concluding with blinking Amber LEDs. During this time, the Red pedestrian 
                light stays on as an indicator that the sequence is active. Once the blinking stops, the user can press the button to move to the next state.
              </p>
              <p className="mt-4">
                In the BLINK_PG state, all four Red LEDs turn on, and the pedestrian signal changes from Red to Green to simulate a pedestrian crossing phase. The onboard 
                LED blinks to indicate active crossing time. A double button press is required: the first press halts the LED blink, and the second press transitions the system.
              </p>
              <p className="mt-4">
                The CLOSE state powers down the entire setup, turning off all LEDs and pausing operations. A button press in this state shifts the system to OPEN, which 
                reactivates the simulation and brings it back to the DEFAULT state.
              </p>
              <p className="mt-4">
                This layered control logic showcases real-time state transitions, user interaction handling, and synchronization of traffic elements, offering a simplified 
                yet functional model of complex urban traffic systems like Shibuya Crossing.
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
                  <span className="text-gray-700">STM32 Nucleo-F401RE</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">5 Red LEDs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">5 Green LEDs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">4 Yellow LEDs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">14 Resistors</span>
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

export default ShibuyaTrafficLight;