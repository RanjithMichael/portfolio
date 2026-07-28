import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">💡 Skills</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        
        {/* Technical Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">⚙️ Technical Skills</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2"><FaReact className="text-blue-500"/> React</li>
            <li className="flex items-center gap-2"><FaNodeJs className="text-green-600"/> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress className="text-gray-600"/> Express</li>
            <li className="flex items-center gap-2"><SiMongodb className="text-green-700"/> MongoDB</li>
            <li className="flex items-center gap-2"><FaGithub className="text-black"/> Git/GitHub</li>
            <li className="flex items-center gap-2"><SiPostman className="text-orange-500"/> Postman</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">🤝 Soft Skills</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">🧩 Problem Solving</li>
            <li className="flex items-center gap-2">👥 Team Collaboration</li>
            <li className="flex items-center gap-2">🗣️ Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
