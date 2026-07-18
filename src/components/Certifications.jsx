import React from "react";

const Certifications = () => {
  return (
    <section id="certifications">
      <h2><strong>Certifications</strong></h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            src="/GuviCertification.png"
            alt="GUVI MERN Certificate"
            className="mx-auto mb-2"
          />
          <p className="font-medium">GUVI MERN Full‑Stack Certification</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

