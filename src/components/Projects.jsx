import { FaReact, FaNodeJs, FaRobot } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { BsCloudSun } from "react-icons/bs";

const techIcons = {
  React: <FaReact className="text-blue-500 text-lg" />,
  "Node.js": <FaNodeJs className="text-green-600 text-lg" />,
  MongoDB: <SiMongodb className="text-green-700 text-lg" />,
  Express: <SiExpress className="text-gray-600 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500 text-lg" />,
  "OpenWeather API": <BsCloudSun className="text-yellow-500 text-lg" />,
  "Cohere API": <FaRobot className="text-purple-600 text-lg" />,
};

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      caseStudy: {
        problem: "Needed a secure blogging platform with rich content editing and analytics.",
        solution: "Built a MERN app with JWT authentication, role‑based access, and integrated rich text editor with image upload.",
        impact: "Enabled safe publishing for multiple roles and improved engagement tracking with analytics dashboard."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      image: "/BloggingPlatform.png",
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/",
    },
    {
      title: "AI Chatbot",
      caseStudy: {
        problem: "Needed natural language conversations with persistent history tied to user accounts.",
        solution: "Developed a MERN chatbot with JWT authentication and protected routes. Integrated Cohere’s command‑r‑08‑2024 API, storing chat sessions in MongoDB per user.",
        impact: "Delivered secure, human‑like conversations with session persistence, ensuring only authorized users could access and retain their chat history."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "Cohere API"],
      image: "/ChatBot.png",
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend",
      demo: "https://aicb1.netlify.app/",
    },
    {
      title: "Weather Dashboard",
      caseStudy: {
        problem: "Needed real‑time weather insights with historical search tracking per user.",
        solution: "Built a MERN app with JWT authentication and protected routes. Connected OpenWeather API, persisted search history in MongoDB, and designed a responsive dashboard with charts/icons.",
        impact: "Provided accurate forecasts with a clean UI, while ensuring only authenticated users could view and manage their personal search history."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "OpenWeather API"],
      image: "/weatherDashboard.png",
      frontend: "https://github.com/RanjithMichael/wd-frontend",
      backend: "https://github.com/RanjithMichael/wd-backend",
      demo: "https://wdashboar.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-8">🚀 Projects</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Project Image with Hover Overlay */}
              <div className="relative">
                <img
                  src={proj.image}
                  alt={`${proj.title} Screenshot`}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  {proj.frontend && (
                    <a
                      href={proj.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md text-sm font-medium hover:opacity-90"
                    >
                      💻 Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-md text-sm font-medium hover:opacity-90"
                    >
                      ⚙️ Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-md text-sm font-medium hover:opacity-90"
                  >
                    🔗 Live Demo
                  </a>
                </div>
                <h3 className="absolute bottom-3 left-3 text-white text-lg font-bold">
                  {proj.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Case Study */}
                <div className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed space-y-2">
                  <p><span className="font-semibold">Problem:</span> {proj.caseStudy.problem}</p>
                  <p><span className="font-semibold">Solution:</span> {proj.caseStudy.solution}</p>
                  <p><span className="font-semibold">Impact:</span> {proj.caseStudy.impact}</p>
                </div>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {proj.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      {techIcons[tech]}
                      <span className="text-xs font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

