import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLock,
  FaShieldAlt,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-3xl group-hover:scale-110 transition-transform" /> },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "JWT", icon: <FaLock className="text-yellow-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "bcrypt", icon: <FaShieldAlt className="text-purple-400 text-3xl group-hover:scale-110 transition-transform" /> },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", icon: <FaGithub className="text-gray-200 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "GitHub Workflows", icon: <FaCogs className="text-gray-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl group-hover:scale-110 transition-transform" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-400 text-3xl group-hover:scale-110 transition-transform" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 text-gray-200">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12">
          💡 Skills
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col h-full group bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-transform hover:-translate-y-2"
            >
              {/* Group Title */}
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b border-cyan-400 pb-3">
                {group.icon} {group.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-5 text-lg flex-grow">
                {group.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-white/10 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
