import react, { useEffect, useState } from 'react';

import Creative from './components/Creative/Creative';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Footer from "./components/Footer/Footer";

import "./styles/main/main.css";
import $ from 'jquery';

const App = () => {
  const [readyState, setReadyState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReadyState(true);
    }, 4000);
  }, []);

  if (readyState === true) {
    $("#ready-state-components").fadeIn(1000);
  }

  const renderComponents = () => {
    return (
      <>  
          <Creative />
          <Projects />
          <Footer />
      </>
    )
  }

  return (
    <>
      <Hero />
      <div id = "ready-state-components">
        {readyState && renderComponents()}
      </div>
    </>
  );
}

export default App;
