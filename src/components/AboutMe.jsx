import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-blue-50 to-purple-100 text-center"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <img
          src="/Ranjith.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md border-4 border-blue-400"
        />
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-semibold text-purple-600">Ranjith Michael</span> — a
          <span className="font-semibold"> Full‑Stack MERN Developer</span> based in Vellore, India.
          I specialize in building scalable web applications and love automating workflows.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            🚀 View Projects
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


