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
    </div>
  );
}
