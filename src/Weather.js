import React, {useState} from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "471207500036931a50e0873b5b7a436b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
  return (
    <div className="weather-app">
      <div className="cities">
        <div className="row">
          <div className="col-12 cities-button">
            <button
              type="button"
              className="btn btn-outline-secondary shadow-sm mr-2"
            >
              NYC
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary shadow-sm mr-2"
            >
              Paris
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary shadow-sm mr-2"
            >
              Tokyo
            </button>
            <button type="button" class="btn btn-outline-secondary shadow-sm">
              Los Angeles
            </button>
          </div>
        </div>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="City Search"
              autoFocus="on"
              className="form-control"
             onChange={handleCityChange}
            />
          </div>
          <div className="col-3 search-btn">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-outline-secondary shadow-sm"
            />
          </div>
          <div className="col-3 search-btn">
            <input
              type="submit"
              value="Current City"
              className="form-control btn btn-outline-primary shadow-sm"
            />
          </div>
        </div>
      </form>
      <br />
      <div className="overview">
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <span>
              {weather.date} | {weather.time}
            </span>
          </li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weather.icon}
              alt={weather.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weather.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °F
                </a>{" "}
                | <a href="/">°C</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weather.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weather.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
      <br />
      <small>
        <a href="https://github.com/taty1202/weather-react">Open-source code</a>, by Tatyana Araya 👩🏽‍💻
      </small>
    </div>
    );
    } else {
    search();
    return "Loading...";
    }
}