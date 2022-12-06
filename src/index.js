import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <footer>
          <p>
            <a
              href="https://github.com/thatblondecodergirl/weather-react"
              target="_blank"
            >
              Open-Source Code
            </a>{" "}
            by Madeleine Alexandersson{" "}
          </p>
        </footer>
      </div>
    </div>
  </StrictMode>
);
