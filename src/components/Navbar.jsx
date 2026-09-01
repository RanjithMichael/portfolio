import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 shadow-md z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a
          href="#about"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition-transform transform hover:scale-105"
        >
          Ranjith Michael
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {["about", "skills", "projects", "certifications", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative hover:text-yellow-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href="/Ranjith_Michael_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition font-medium"
          >
            Resume
          </a>
          <a
            href="https://github.com/RanjithMichael"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition font-medium"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white px-6 py-4 space-y-4">
          {["about", "skills", "projects", "certifications", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block hover:text-yellow-300"
                  aria-label={`Navigate to ${item} section`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="/Ranjith_Michael_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition font-medium"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RanjithMichael"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition font-medium"
            >
              GitHub
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;





