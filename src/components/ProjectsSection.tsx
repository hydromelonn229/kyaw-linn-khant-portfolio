import React from 'react';

function ProjectsSection() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Project Title</h3>
            <p className="text-gray-600 mb-4">Short summary of the project goes here. This is a placeholder description.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection; 