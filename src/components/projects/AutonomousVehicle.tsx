import React from 'react';
import img4 from './img4.jpg';

function AutonomousVehicle() {
  return (
    <div className="flex min-h-screen">
      {/* Vertical Navigation */}
      <aside className="w-64 fixed left-0 top-0 h-screen bg-white border-r border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Navigation</h3>
        <nav className="space-y-2">
          <a href="#header" className="block text-gray-600 hover:text-blue-700 transition-colors">Autonomous Microcontroller Vehicle</a>
          <a href="#overview" className="block text-gray-600 hover:text-blue-700 transition-colors">Project Overview</a>
          <a href="#components" className="block text-gray-600 hover:text-blue-700 transition-colors">Components</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Autonomous Microcontroller Vehicle</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project features an autonomous vehicle built using the STM32 Nucleo F411RE microcontroller. It operates in two obstacle avoidance modes: 
                one using ultrasonic sensors HC-SR04 for wide-range detection, and another using the Sharp GP2Y0A21YK IR distance sensor for short-range precision. 
                The system is designed for flexibility, allowing manual override through a remote control interface for direct driving and manipulation. A robotic arm 
                mounted on top enables pick-and-place tasks, expanding the vehicle's functionality for semi-autonomous or manually guided object handling. This 
                combination of autonomy, control, and manipulation makes it a versatile platform for real-world robotic applications.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img4} alt="Autonomous Vehicle Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project involves the design and development of a versatile autonomous vehicle powered by the STM32 Nucleo F411RE microcontroller. The vehicle 
                is equipped with dual obstacle avoidance modes to ensure adaptability in various environments. Ultrasonic sensors HC-SR04 provide reliable long-range 
                detection, while the Sharp GP2Y0A21YK IR distance sensor offers accurate short-range obstacle sensing. Together, these systems allow the vehicle to 
                navigate safely and autonomously in dynamic settings.
              </p>
              <p className="mt-4">
                To enhance user control and flexibility, the system also supports manual override. This mode enables remote operation of both the vehicle and an 
                onboard robotic arm, which is capable of performing basic pick-and-place tasks. The integration of autonomous navigation with manual control and 
                object manipulation demonstrates a well-rounded approach to embedded robotics, highlighting applications in automation, material handling, and 
                educational robotics.
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
                  <span className="text-gray-700">STM32 Nucleo-F411RE</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">L298N Motor Driver</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">12v li-ion rechargeable battery</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">3x HC-SR04 ultrasonic sensors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">3x Sharp GP2Y0A21YK IR distance sensors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">2x TT motors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Castor wheel</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">4x SG90 Servos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">BLE4.0 HM-10</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Push Button</span>
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

export default AutonomousVehicle; 