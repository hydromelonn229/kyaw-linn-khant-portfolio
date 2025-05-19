import React from 'react';

function SoftSkillsSection() {
  const softSkills = [
    "Strategic Problem Solving",
    "Rapid Prototyping & Iteration",
    "Leadership & Event Management",
    "Team Collaboration & Communication",
    "Adaptability & Emotional Resilience",
    "Self-Motivated Learning & Reflection",
    "Growth Mindset under Pressure"
  ];

  return (
    <div className="rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Soft Skills & Personal Strengths</h2>
      <ul className="space-y-3">
        {softSkills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-gray-600 text-lg">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoftSkillsSection; 