import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLock, FaShieldAlt, FaCogs, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-12">💡 Skills</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Technical Skills */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
            ⚙️ Technical Skills
          </h3>
          <ul className="grid grid-cols-2 gap-6 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <FaReact className="text-blue-500 text-2xl" /> React
            </li>
            <li className="flex items-center gap-3">
              <FaNodeJs className="text-green-600 text-2xl" /> Node.js
            </li>
            <li className="flex items-center gap-3">
              <SiExpress className="text-gray-600 text-2xl" /> Express
            </li>
            <li className="flex items-center gap-3">
              <SiMongodb className="text-green-700 text-2xl" /> MongoDB
            </li>
            <li className="flex items-center gap-3">
              <SiTailwindcss className="text-cyan-500 text-2xl" /> TailwindCSS
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-yellow-600 text-2xl" /> JWT
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-purple-600 text-2xl" /> bcrypt
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
            🛠️ Tools
          </h3>
          <ul className="grid grid-cols-2 gap-6 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <FaGithub className="text-black text-2xl" /> Git/GitHub
            </li>
            <li className="flex items-center gap-3">
              <FaCogs className="text-gray-800 text-2xl" /> GitHub Workflows
            </li>
            <li className="flex items-center gap-3">
              <SiPostman className="text-orange-500 text-2xl" /> Postman
            </li>
            <li className="flex items-center gap-3">
              <FaCode className="text-blue-700 text-2xl" /> VS Code
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
