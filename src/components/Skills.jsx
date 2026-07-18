import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="text-center">
      <h2><strong>Skills</strong></h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="font-semibold">Technical Skills</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git/GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
