import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, 
   SiPostman, SiGooglechrome,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-400 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Mongoose", icon: <SiMongodb className="text-green-400 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200 text-4xl" /> },
    
  ];

  const tools = [
    { name: "VS Code", icon: <VscCode className="text-blue-500 text-4xl" /> },
    { name: "Chrome", icon: <SiGooglechrome className="text-red-400 text-4xl" /> },
    { name: "MongoDB Compass", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
    
  ];

  return (
    <section id="skills" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer"
        >
          ⚡ Skills
        </motion.h2>

        {/* Skills Row */}
        <div>
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-transform"
              >
                {skill.icon}
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Row */}
        <div>
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-transform"
              >
                {tool.icon}
                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


