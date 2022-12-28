import React from "react";
import "./weather.css";

export default function Weather() {
  let weather = {
    city: "Seattle",
    temperature: 45,
    humidity: 0,
    wind: 8,
    date: "Tuesday, December 6",
    time: "11:00",
    icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    description: "Cloudy"
  };

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
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="City Search"
              autofocus="on"
              class="form-control shadow-sm"
              id="city-input"
              autocomplete="off"
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
        <a href="https://github.com/taty1202">Open-source code</a>, by Tatyana Araya 👩🏽‍💻
      </small>
    </div>
  );
}