
import React from "react";
import FullDate from "./FullDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">
              <FullDate date={props.data.date} /> | {props.data.description}
            </li>
            <li>
              Humidity: <strong>{Math.round(props.data.humidity)}%</strong> | Wind:{" "}
              <strong>{Math.round(props.data.wind)}mph</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}