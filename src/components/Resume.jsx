import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gradient-to-r from-blue-50 to-purple-100 text-center">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">📄 Resume</h2>
        <p className="text-gray-700 mb-6">
          Download my resume to explore my experience, skills, and projects in detail.
        </p>
        <div className="flex justify-center gap-4">
          {/* Download Button */}
          <a
            href="/Ranjith_Michael_B_Resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ⬇️ Download Resume
          </a>

          {/* Inline Preview */}
          <a
            href="/Ranjith_Michael_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition"
          >
            👀 View Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

