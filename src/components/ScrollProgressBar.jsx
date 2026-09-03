import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-200"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgressBar;
