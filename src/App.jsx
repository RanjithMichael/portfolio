import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-20">
        <AboutMe />
        <Resume />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;

