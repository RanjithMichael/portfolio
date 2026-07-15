import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="text-center">
      <h2>Resume</h2>
      <a
        href="/Ranjith_Michael_B_Resume.pdf"
        download
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;

