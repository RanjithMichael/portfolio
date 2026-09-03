import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgressBar from "./components/ScrollProgressBar"; 
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="App">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <div className="pt-20 space-y-24">
        <Reveal><AboutMe /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Certifications /></Reveal>
        <Reveal><Contact /></Reveal>
      </div>

      {/* Footer + Back to Top */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;



