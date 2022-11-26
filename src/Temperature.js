import React from "react";
import "./App.css";
import image from "./images/01d.png";

export default function Temperature() {
  return (
    <div className="Temperature">
      <img src={image} alt="sun" />
      <div className="temp">19</div>
      <span className="units">
        <a href="https://www.shecodes.io/">°C</a> |
        <a href="https://www.shecodes.io/">°F</a>
      </span>
    </div>
  );
}
