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
        {
          name: "React.js",
          icon: (
            <FaReact className="text-blue-500 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "TailwindCSS",
          icon: (
            <SiTailwindcss className="text-cyan-500 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          icon: (
            <FaNodeJs className="text-green-600 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "Express.js",
          icon: (
            <SiExpress className="text-gray-600 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <SiMongodb className="text-green-700 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "JWT",
          icon: (
            <FaLock className="text-yellow-600 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "bcrypt",
          icon: (
            <FaShieldAlt className="text-purple-600 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git/GitHub",
          icon: (
            <FaGithub className="text-black text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "GitHub Workflows",
          icon: (
            <FaCogs className="text-gray-800 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "Postman",
          icon: (
            <SiPostman className="text-orange-500 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
        {
          name: "VS Code",
          icon: (
            <FaCode className="text-blue-700 text-3xl group-hover:scale-110 transition-transform" />
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/naqamlzv/image/upload/v1790279844/skills-theme-laptop-computer-blue-green-pattern-background-skills-theme-laptop-computer-271068832.webp')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-300 mb-12">
          💡 Skills
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col h-full group bg-white/90 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {/* Group Title */}
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
                {group.icon} {group.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-5 text-gray-700 text-lg flex-grow">
                {group.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 hover:text-blue-600 transition-colors"
                  >
                    {skill.icon}
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
