import React from "react";

const certifications = [
  {
    title: "GUVI MERN Full‑Stack Certification",
    issuer: "GUVI Geek Network",
    description: "Validates skills in MongoDB, Express, React, and Node.js.",
    image: "/GuviCertification.png",
    link: "https://v2.zenclass.in/certificateDownload/mE1rcScXaN3QRqwo",
  },
  // Add more certifications here as needed
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-r from-blue-50 to-purple-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">
          📜 Certifications
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-2 animate-fadeIn"
            >
              <img
                src={cert.image}
                alt={`${cert.title} Logo`}
                className="mb-6 w-40 h-auto rounded-md border border-gray-200 shadow-sm hover:scale-105 transition transform"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {cert.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center text-sm leading-relaxed">
                Issued by {cert.issuer}. {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition transform text-sm"
                aria-label={`View ${cert.title}`}
              >
                🔗 View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;




