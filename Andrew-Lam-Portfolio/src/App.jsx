import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Navbar/Hero/Hero";
import { About } from "./components/Navbar/About/About";
import { Experience } from "./components/Navbar/Experience/Experience";
import { Projects } from "./components/Navbar/Projects/Projects";
import { Contact } from "./components/Navbar/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;