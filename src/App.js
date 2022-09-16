import react from 'react';
import Creative from './components/Creative/Creative';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Footer from "./components/Footer/Footer";
import "./styles/main/main.css";

function App() {
  return (
    <>
      <Creative />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
