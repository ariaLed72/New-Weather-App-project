import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "San Diego",
    temperature: 87,
    date: "Wednesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    wind: "7"
  };

  return (
    <div className="weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Where are you looking for?"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-danger w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul className="list">
          <li>Last Updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div className="d-flex">
              <strong className="temperature-number">
                {weatherData.temperature}{" "}
              </strong>
              <span className="units">
                <a href="/">°C</a> --- <a href="/">°F</a>
              </span>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="d-flex img"
              />
            </div>
          </div>
        </div>
        <div className="col-6 other-data">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
