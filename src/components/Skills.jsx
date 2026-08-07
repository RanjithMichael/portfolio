import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLock, FaShieldAlt, FaCogs, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">💡 Skills</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        
        {/* Technical Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">⚙️ Technical Skills</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2"><FaReact className="text-blue-500 text-xl"/> React</li>
            <li className="flex items-center gap-2"><FaNodeJs className="text-green-600 text-xl"/> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress className="text-gray-600 text-xl"/> Express</li>
            <li className="flex items-center gap-2"><SiMongodb className="text-green-700 text-xl"/> MongoDB</li>
            <li className="flex items-center gap-2"><SiTailwindcss className="text-cyan-500 text-xl"/> TailwindCSS</li>
            <li className="flex items-center gap-2"><FaLock className="text-yellow-600 text-xl"/> JWT</li>
            <li className="flex items-center gap-2"><FaShieldAlt className="text-purple-600 text-xl"/> bcrypt</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">🛠️ Tools</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2"><FaGithub className="text-black text-xl"/> Git/GitHub</li>
            <li className="flex items-center gap-2"><FaCogs className="text-gray-800 text-xl"/> GitHub Workflows</li>
            <li className="flex items-center gap-2"><SiPostman className="text-orange-500 text-xl"/> Postman</li>
            <li className="flex items-center gap-2"><FaCode className="text-blue-700 text-xl"/> VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
