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
import RevealStagger from "./components/RevealStagger"; // ✅ new import for child animations

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

        {/* Skills with staggered child animations */}
        <Reveal>
          <RevealStagger>
            <Skills />
          </RevealStagger>
        </Reveal>

        {/* Projects with staggered child animations */}
        <Reveal>
          <RevealStagger>
            <Projects />
          </RevealStagger>
        </Reveal>

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


