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
          <h3 className="text-lg font-semibold text-blue-700">IES Tree Planting Volunteering</h3>
          <p className="text-gray-600 mt-2">Participated in environmental conservation efforts through tree planting initiatives organized by the Institution of Engineers Singapore (IES).</p>
        </div>
      </div>
    </div>
  );
}

export default CoCurricularSection; 