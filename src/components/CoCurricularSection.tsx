import React from 'react';

function CoCurricularSection() {
  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Co-curricular Activities</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">Vice President, IES-PSBA Student Chapter 2024</h3>
          <p className="text-gray-600 mt-2">Led student chapter operations and organized 2 sustainability industry talks and 1 social event to engage technical peers.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-blue-700">IES Mass Tree Planting Day 2023</h3>
          <p className="text-gray-600 mt-2">Participated in environmental conservation efforts through tree planting initiatives organized by the Institution of Engineers Singapore (IES).</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-700">Peer Support Leader @ PSB Academy</h3>
          <p className="text-gray-600 mt-2">Peer Support Leader @ PSB Academy</p>
        </div>

        <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Volunteer Activities</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">World Engineers Summit (WES) and IES 57th Annual Dinner</h4>
              <p className="text-gray-600 mt-2">Volunteered at the prestigious World Engineers Summit and IES Annual Dinner, supporting event operations and ensuring smooth execution of the conference proceedings.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-700">PSB Academy 60th Anniversary Roadshow</h4>
              <p className="text-gray-600 mt-2">Contributed as a volunteer during PSB Academy's milestone celebration, assisting with event coordination and engaging with attendees to showcase the institution's achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoCurricularSection; 