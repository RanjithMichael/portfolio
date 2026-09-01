import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-20">
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

