import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLock, FaShieldAlt, FaCogs, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-3xl" /> },
        { name: "JWT", icon: <FaLock className="text-yellow-600 text-3xl" /> },
        { name: "bcrypt", icon: <FaShieldAlt className="text-purple-600 text-3xl" /> },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", icon: <FaGithub className="text-black text-3xl" /> },
        { name: "GitHub Workflows", icon: <FaCogs className="text-gray-800 text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-700 text-3xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-r from-blue-50 to-purple-100 text-center">
      <h2 className="text-5xl font-extrabold text-blue-600 mb-14 animate-fadeIn">💡 Skills</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto animate-slideUp">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              {group.icon} {group.title}
            </h3>
            <ul className="space-y-5 text-gray-700 text-lg">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 hover:text-blue-600 transition-colors"
                  aria-label={`${skill.name} skill`}
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
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
