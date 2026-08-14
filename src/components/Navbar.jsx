import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-blue-600 dark:bg-blue-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          Ranjith Michael Portfolio
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {["about", "skills", "projects", "certification", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative hover:text-yellow-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


