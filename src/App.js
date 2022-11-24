import React from 'react';
import ReactAnimatedWeather from "react-animated-weather";
import Weather from "./WeatherSearch.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React + GitHub + Netlify Challenge</h1>

      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#592693"
        size={50}
        animate={true}
      />
      <br />
      <br />
      <br />

      <Weather city="Perth" />

      <br />

      <small>
        <a href="https://github.com/os-nath/w4-challenge-react" target="blank">
          Open source{" "}
        </a>
        created by Nath Soares and hosted
        <a
          href="https://637f0fb6a69c553242656568--precious-dodol-20f065.netlify.app/"
          target="blank"
        >
          {" "}
          here
        </a>
      </small>
    </div>
  );
}

export default App;
