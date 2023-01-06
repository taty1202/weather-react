import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastTemp(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastTemp">
      <div className="forecast-time">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()}</span>
        <span className="forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}