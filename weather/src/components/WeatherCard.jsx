import React from 'react';


function WeatherCard({ data, city }) {
        if (!data) {
          return <p>Nessun dato disponibile</p>;
        }
        
  return (
    <div className="weather-info">
      <h2>Meteo a{data.name}</h2>
      <h4>Temperatura: {data.main.temp}°C</h4>
      <h4>Condizioni: {data.weather.description}</h4>
      <h4>Vento: {data.wind.speed} m/s</h4>
      <h4>Umidità: {data.main.humidity}%</h4>
    </div>
  );
}

export default WeatherCard;
