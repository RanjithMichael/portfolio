import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">React</div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">Node.js</div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">MongoDB</div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">Express</div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">Git/GitHub</div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">Postman</div>
      </div>
    </section>
  );
};

export default Skills;

