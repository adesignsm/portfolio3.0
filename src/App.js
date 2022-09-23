import react, { useEffect, useState } from 'react';

import Loading from "./components/Creative/Loading";
import Creative from './components/Creative/Creative';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Footer from "./components/Footer/Footer";

import "./styles/main/main.css";
import $ from 'jquery';

const App = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [readyState, setReadyState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
      setReadyState(true);
    }, 7000);
  }, []);

  if (readyState === true) {
    $("#ready-state-components").fadeIn(1000);
  }

  const renderComponents = () => {
    return (
      <>  
          <Creative />
          <Hero />
          <Projects />
          <Footer />
      </>
    )
  }

  return (
    <>
      {loadingState && <Loading />}
      <div id = "ready-state-components">
        {readyState && renderComponents()}
      </div>
    </>
  );
}

export default App;
