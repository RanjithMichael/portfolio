import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
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
        <Certification />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

