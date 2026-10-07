import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
