import React from 'react';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';

function AlphaMini() {
  return (
    <div className="flex min-h-screen">
      {/* Vertical Navigation */}
      <aside className="w-64 fixed left-0 top-0 h-screen bg-white border-r border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Navigation</h3>
        <nav className="space-y-2">
          <a href="#header" className="block text-gray-600 hover:text-blue-700 transition-colors">AlphaMini Bricklaying Robot</a>
          <a href="#overview" className="block text-gray-600 hover:text-blue-700 transition-colors">Project Overview</a>
          <a href="#components" className="block text-gray-600 hover:text-blue-700 transition-colors">Components</a>
          <a href="#cad" className="block text-gray-600 hover:text-blue-700 transition-colors">CAD Models</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div id="header" className="mb-12 scroll-mt-20">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">AlphaMini, The Bricklaying Robot</h1>
            <div className="flex items-center text-blue-700 mb-6">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                The AlphaMini Bricklaying Robot is a scaled-down prototype designed to demonstrate automated brick laying with added user convenience through voice control. 
                Equipped with precise actuation mechanisms, the robot can pick, position, and stack miniature bricks to form simple structures. Voice commands enable 
                intuitive operation, allowing users to start, pause, or adjust the robot's tasks hands-free. This integration of robotics and speech recognition highlights 
                a step toward more interactive and user-friendly construction automation.
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img src={img12} alt="AlphaMini Bricklaying Robot Cover" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The AlphaMini Bricklaying Robot is a compact, scaled-down robotic system designed to mimic the core processes of bricklaying and masonry automation. 
                It serves as a practical demonstration platform that combines precise mechanical manipulation with intelligent control systems. One of the key innovations 
                of this project is the integration of voice control, which allows operators to issue commands and interact with the robot using natural language. This 
                hands-free control enhances user experience by simplifying operation and enabling quick adjustments without the need for manual input devices.
              </p>
              <p className="mt-4">
                The robot is capable of accurately picking up miniature bricks and placing them in predefined positions to build small-scale structures. Its design 
                focuses on modularity and precision, ensuring that bricks are stacked securely and with consistent alignment. This scaled prototype provides valuable 
                insights into challenges like coordination, timing, and error handling in automated construction tasks.
              </p>
              <p className="mt-4">
                Beyond its technical aspects, the project highlights the potential for human-robot collaboration in construction environments. By allowing voice commands, 
                the AlphaMini encourages more intuitive interaction, which could reduce training time and improve safety on real construction sites. The robot also serves 
                as an educational tool, showcasing how robotics, automation, and AI can come together to innovate traditional manual labor tasks. Overall, the AlphaMini 
                Bricklaying Robot lays the groundwork for more advanced, scalable solutions in construction automation.
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
                  <span className="text-gray-700">AlphaMini Robotic Arm</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Voice Control Module</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Precision Gripper Mechanism</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Control System</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Miniature Bricks</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CAD Models */}
          <section id="cad" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">CAD Models</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The project went through several iterations of design and development, with each version improving upon the previous one. The CAD models showcase the 
                evolution of the robot's design, from initial concept to final implementation.
              </p>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img8} alt="AlphaMini CAD Model Version 1" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img9} alt="AlphaMini CAD Model Version 2" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img10} alt="AlphaMini CAD Model Version 3" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <img src={img11} alt="AlphaMini CAD Model Version 4" className="w-full h-auto object-cover" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AlphaMini; 