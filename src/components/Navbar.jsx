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
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-wide">
          Ranjith Michael Portfolio
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {["about", "resume", "skills", "projects", "certifications", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-6 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
