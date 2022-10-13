import React from "react";
import "./styles.css";
import Title from "./Title";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Search />
      <CurrentWeather />
      <p>
        <a href="https://github.com/ashcnaylor/weather-react" target="_blank">
          Open Source Code
        </a>
        by Ash Naylor.
      </p>
    </div>
  );
}
