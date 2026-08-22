import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: [
        "Full MERN blogging app with authentication, rich text editor, and analytics.",
        "Implemented JWT authentication and role‑based access control.",
        "Integrated rich text editor with image upload support.",
        "Built analytics dashboard to track user engagement."
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      image: "/BloggingPlatform.png",
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/",
    },
    {
      title: "AI Chatbot",
      description: [
        "Full‑stack MERN app integrated with Cohere’s Command‑R+ model for natural language conversations with persistent chat history.",
        "Integrated Cohere Command‑R+ API for natural language processing.",
        "Designed persistent chat history with MongoDB for user sessions.",
        "Developed responsive UI with TailwindCSS for seamless user experience."
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "Cohere API"],
      image: "/ChatBot.png",
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend",
      demo: "https://aicb1.netlify.app/",
    },
    {
      title: "Weather Dashboard",
      description: [
        "MERN app that fetches real‑time weather data via OpenWeather API, stores search history in MongoDB, and displays results in a responsive UI.",
        "Connected OpenWeather API for real‑time weather data.",
        "Built search history persistence with MongoDB.",
        "Designed responsive dashboard with charts and icons for clarity."
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "OpenWeather API"],
      image: "/weatherDashboard.png",
      frontend: "https://github.com/RanjithMichael/wd-frontend",
      backend: "https://github.com/RanjithMichael/wd-backend",
      demo: "https://wdashboar.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col animate-slideUp"
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={`${proj.title} Screenshot`}
                className="w-full h-48 object-cover rounded-t-xl hover:scale-105 transition transform"
                loading="lazy"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {proj.title}
                </h3>

                {/* Description with bullet points */}
                <ul className="text-gray-600 mb-4 flex-grow text-base leading-relaxed list-disc list-inside space-y-2">
                  {proj.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start gap-3 mt-auto">
                  {proj.frontend && (
                    <a
                      href={proj.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition transform"
                      aria-label={`${proj.title} Frontend Code`}
                    >
                      Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-105 transition transform"
                      aria-label={`${proj.title} Backend Code`}
                    >
                      Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 hover:scale-105 transition transform"
                    aria-label={`${proj.title} Live Demo`}
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
