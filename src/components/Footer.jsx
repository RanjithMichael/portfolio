import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 animate-fadeIn">
        
        {/* Left Side - Branding */}
        <p className="text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Ranjith Michael · Built with React & TailwindCSS
        </p>

        {/* Right Side - Quick Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a
            href="https://github.com/RanjithMichael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="GitHub Profile"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="hover:text-yellow-400 transition"
            aria-label="Email Me"
          >
            📧 Email
          </a>
          <a
            href="tel:+919677956477"
            className="hover:text-yellow-400 transition"
            aria-label="Call Me"
          >
            📞 Call
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

