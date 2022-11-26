import "./App.css";
import Search from "./Search.js";
import Temperature from "./Temperature.js";

export default function App() {
  return (
    <div className="App">
      <Search />
      <h1 className="city">New York</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Temperature />
          </div>
          <div className="col-6 prospects">
            <ul>
              <li>Humidity 80%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
