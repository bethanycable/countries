import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&units=imperial&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }, [capital, api_key]);

  while (weather.length !== 0) {
    return (
      <div>
        <h2>Weather in {capital[0]}</h2>
        <p>temperature {weather.main.temp} Farenheit</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />

        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }
};

export default Weather;
