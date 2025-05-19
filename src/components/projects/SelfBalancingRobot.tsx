import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function SelfBalancingRobot() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">AI-Powered Self-Balancing Robot</h1>
        <div className="flex items-center text-blue-700 mb-6">
          <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">Ongoing</span>
        </div>
        <div className="prose prose-lg text-gray-600">
          <p>
            An AI-powered self-balancing robot that uses reinforcement learning to maintain stability and adapt to disturbances in real time. 
            Trained in simulation with MuJoCo and deployed on a Raspberry Pi, it integrates sensor feedback, control algorithms, and edge AI 
            for autonomous balance and movement.
          </p>
        </div>
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
          <img src={img3} alt="Self-Balancing Robot Cover" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h2>
        <div className="prose prose-lg text-gray-600">
          <p>
            The project begins with designing a simplified robot model in MuJoCo, capturing the essential physics required for self-balancing behavior. 
            Using the Proximal Policy Optimization (PPO) algorithm, the robot is trained in simulation to maintain balance and respond to external disturbances. 
            Once the PPO model reaches stable performance, it is exported and converted into a TensorFlow Lite format using Python. This optimized model is 
            then deployed to a Raspberry Pi, where it runs in real time, controlling the physical robot using sensor feedback and motor commands. The result 
            is a lightweight, AI-powered self-balancing robot capable of operating independently at the edge.
          </p>
        </div>
      </section>

      {/* Components List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Components</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">RaspberryPi 5</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">520 geared 12v DC motors (1:30) (333rpm)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">AT8236 2-Channel Motor Driver</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Adafruit 9-DOF Orientation IMU Fusion Breakout - BNO085</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Geekworm X1201 2-Cell 18650 5.1V 5A UPS Shield for Raspberry Pi 5 Series</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">12v li-ion rechargeable battery</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CAD Model Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">CAD Model</h2>
        <div className="prose prose-lg text-gray-600">
          <p>
            A detailed Fusion 360 model where I designed the robot with a strong focus on even weight distribution and an optimized weight-to-height ratio. 
            The goal was to enhance the robot's energy efficiency and stability during self-balancing operations. By carefully arranging the placement of 
            components such as motors, batteries, sensors, and the control board, I ensured that the center of mass remained low and centered between the wheels. 
            This design not only supports better dynamic balance but also reduces the energy required for constant micro-adjustments, resulting in a more efficient 
            and responsive self-balancing system. The CAD model reflects both functional and aesthetic considerations, serving as the foundation for both simulation 
            and real-world deployment.
          </p>
        </div>
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
          <img src={img1} alt="CAD Model of Self-Balancing Robot" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* MuJoCo Training Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">MuJoCo Training</h2>
        <div className="prose prose-lg text-gray-600">
          <p>
            A simplified MuJoCo model was created to simulate the core dynamics of the self-balancing robot, focusing on essential components like the body and 
            wheels to speed up training and reduce complexity. The robot was trained using the Proximal Policy Optimization (PPO) algorithm, which allowed it to 
            learn balance control through trial and error. The training process involved continuous feedback from the simulation, where the agent improved its 
            stability by minimizing falls and adjusting to small disturbances. This approach resulted in a robust policy that could be transferred to real hardware 
            for efficient and reliable self-balancing behavior.
          </p>
        </div>
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto">
          <img src={img2} alt="MuJoCo Training Visualization" className="w-full h-auto object-cover" />
        </div>
      </section>
    </div>
  );
}

export default SelfBalancingRobot; 