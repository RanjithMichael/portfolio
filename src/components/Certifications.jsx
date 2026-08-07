import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          📜 Certification
        </h2>
        <div className="flex justify-center">
          {/* GUVI Certification Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition transform hover:-translate-y-1 max-w-sm">
            <img
              src="/GuviCertification.png"
              alt="GUVI MERN Certificate"
              className="mb-4 w-48 h-auto rounded-md border border-gray-200"
            />
            <p className="text-lg font-semibold text-gray-800 text-center">
              GUVI MERN Full‑Stack Certification
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Issued by GUVI Geek Network, validating skills in MongoDB, Express, React, and Node.js.
            </p>
            <a
              href="https://v2.zenclass.in/certificateDownload/mE1rcScXaN3QRqwo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              🔗 View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

