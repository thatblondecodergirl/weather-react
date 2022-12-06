import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        <a href="https://github.com/thatblondecodergirl/weather-react">
          Open-Source Code
        </a>{" "}
        by Madeleine Alexandersson{" "}
      </p>
    </div>
  </StrictMode>
);
