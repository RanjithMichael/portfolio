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
      title: "Recipe App",
      description: "Dynamic recipe search and filter app using TheMealDB API.",
      tech: "React, TailwindCSS, Axios",
      frontend: "https://github.com/RanjithMichael/recipetask",
      backend: "#", // not needed if API only
      demo: "https://recipetas.netlify.app/"
    },
    {
      title: "Kanban Board",
      description: "Drag-and-drop task management board with persistence.",
      tech: "React, TailwindCSS, Context API, LocalStorage",
      frontend: "https://github.com/RanjithMichael/kanbanboard",
      backend: "#",
      demo: "https://kan-boardtask.netlify.app/"
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

