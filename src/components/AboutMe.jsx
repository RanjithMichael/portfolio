import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="text-center">
      <img
        src="/Ranjith.jpeg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
      />
      <h2>About Me</h2>
      <p className="text-lg max-w-xl mx-auto">
        Hi, I'm <strong>Ranjith Michael</strong> — a Full‑Stack MERN Developer based in Vellore, India.
        I specialize in building scalable web applications and love automating workflows.
      </p>
    </section>
  );
};

export default AboutMe;

