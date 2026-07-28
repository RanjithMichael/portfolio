import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: "Full MERN blogging app with authentication, rich text editor, and analytics.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      image: "/BloggingPlatform.png", 
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/"
    },
    {
      title: "AI Chatbot",
      description: "Full‑stack MERN app integrated with Cohere’s Command‑R+ model for natural language conversations with persistent chat history.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "Cohere API"],
      image: "/ChatBot.png", 
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend",
      demo: "https://aicb1.netlify.app/"
    },
    {
      title: "Weather Dashboard",
      description: "MERN app that fetches real‑time weather data via OpenWeather API, stores search history in MongoDB, and displays results in a responsive UI.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "OpenWeather API"],
      image: "/weatherDashboard.png", 
      frontend: "https://github.com/RanjithMichael/wd-frontend",
      backend: "https://github.com/RanjithMichael/wd-backend",
      demo: "https://wdashboar.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              {/* Project Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {proj.frontend && (
                    <a
                      href={proj.frontend}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                  >
                    Live Demo
                  </a>
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

