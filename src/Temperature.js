import React from "react";
import "./App.css";
import image from "./images/01d.png";

export default function () {
  return (
    <div className="Temperature">
      <img src={image} alt="sun" />
      <div className="temp">19</div>
      <span className="units">
        <a href="#">°C</a> |<a href="#">°F</a>
      </span>
    </div>
  );
}
