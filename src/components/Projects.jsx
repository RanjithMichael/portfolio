import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: "Full MERN blogging app with authentication, rich text editor, and analytics.",
      tech: "MongoDB, Express, React, Node.js, TailwindCSS",
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/"
    },
    {
      title: "AI Chatbot",
      description: "The AI Chatbot is a full‑stack MERN application integrated with Cohere’s Command‑R+ model to provide natural language conversations. It allows users to interact with an intelligent assistant, receive instant replies, and maintain a persistent chat history stored in MongoDB.",
      tech: "MongoDB, Express, React, Node.js, TailwindCSS, Cohere API",
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend", 
      demo: "https://aicb1.netlify.app/"
    },
    {
      title: "Weather Dashboard",
      description: "The Weather Dashboard is a full‑stack MERN application that enables users to search for real‑time weather information by city. It integrates with the OpenWeather API to fetch live data, stores search history in MongoDB for persistence, and displays results in a clean, responsive React frontend.",
      tech: "MongoDB, Express, React, Node.js, TailwindCSS, openWeather API",
      frontend: "https://github.com/RanjithMichael/wd-frontend",
      backend: "https://github.com/RanjithMichael/wd-backend",
      demo: "https://wdashboar.netlify.app/"
    }
  ];

  return (
    <section id="projects">
      <h2><strong>Projects</strong></h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-2">{proj.description}</p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Tech Stack:</strong> {proj.tech}
            </p>
            <div className="flex gap-4">
              {proj.frontend !== "#" && (
                <a href={proj.frontend} className="text-blue-600 hover:underline">
                  Frontend
                </a>
              )}
              {proj.backend !== "#" && (
                <a href={proj.backend} className="text-blue-600 hover:underline">
                  Backend
                </a>
              )}
              <a href={proj.demo} className="text-blue-600 hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

