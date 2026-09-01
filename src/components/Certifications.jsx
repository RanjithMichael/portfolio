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
      className="py-24 bg-gradient-to-r from-blue-50 to-purple-100"
    >
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-blue-600 mb-14">
          📜 Certifications
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 animate-slideUp"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={`${cert.title} Logo`}
                className="mb-6 w-44 h-auto rounded-md border border-gray-200 shadow-sm hover:scale-110 transition-transform"
                loading="lazy"
              />

              {/* Certificate Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {cert.title}
              </h3>

              {/* Certificate Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                Issued by {cert.issuer}. {cert.description}
              </p>

              {/* View Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform text-sm font-medium"
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

