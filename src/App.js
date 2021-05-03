import React from "react";
import Countdown from "./Countdown";
import Mountains from "./Mountains";
import InfoText from "./InfoText";
import Cloud from "./Cloud";

function App() {
  return (
    <div className="App">
      <body>
        <div className="sky"></div>
        <div className="stars"></div>
        <header id="header">
          <div className="top-first-row">
            <div id="date">Monday, May 3, 2021</div>
            <div id="time-sun" className="">
              Time of Sunset: 20:46{" "}
            </div>
          </div>
          <div className="top-second-row">
            <div id="time" className="time">
              17:49
            </div>
            <div id="city">Location: Brunnsang</div>
          </div>
        </header>
        <div className="loader hidden">
          <div className="loading_text">Hunting for sunlight...</div>
          <div className="loading_icon"></div>
        </div>
        <main>
          <div id="sun-wrapper">
            <div id="sun" className="sun"></div>
          </div>
          <div id="random-advice-modal" className="random-advice-modal-class">
            <div className="modal-cloud">
              <div className="modal-content">
                <p id="random-advice"></p>
                <div className="close">×</div>
              </div>
            </div>
          </div>
          <div id="clouds" className="">
            <div className="cloudmovement1">
              <div className="cloud cloudmargin"></div>
            </div>
            <div className="cloudmovement2">
              <Cloud />
            </div>
          </div>
          <section id="center-text">
            <InfoText />
            <Countdown />
          </section>
          <footer className="bottom">
            <Mountains />
          </footer>
        </main>
      </body>
    </div>
  );
}

export default App;
