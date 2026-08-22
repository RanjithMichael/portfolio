import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLock, FaShieldAlt, FaCogs, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-500 text-2xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600 text-2xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-2xl" /> },
        { name: "JWT", icon: <FaLock className="text-yellow-600 text-2xl" /> },
        { name: "bcrypt", icon: <FaShieldAlt className="text-purple-600 text-2xl" /> },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", icon: <FaGithub className="text-black text-2xl" /> },
        { name: "GitHub Workflows", icon: <FaCogs className="text-gray-800 text-2xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-2xl" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-700 text-2xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 to-purple-100 text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-12 animate-fadeIn">💡 Skills</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto animate-slideUp">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              {group.icon} {group.title}
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 hover:text-blue-600 transition"
                  aria-label={`${skill.name} skill`}
                >
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
