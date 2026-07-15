import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Ranjith Portfolio
        </h1>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-600">Certifications</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="ml-6 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
