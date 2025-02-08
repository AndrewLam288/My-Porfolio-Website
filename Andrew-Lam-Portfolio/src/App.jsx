import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Navbar/Hero/Hero";
import { About } from "./components/Navbar/About/About";
import { Experience } from "./components/Navbar/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;