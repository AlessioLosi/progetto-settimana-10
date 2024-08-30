import React, { useState, useEffect } from 'react';

function FetchingInfo() {
  const [city, setCity] = useState('Roma'); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);


  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c906786fcf8000ed9d78c6205f38333a&units=metric`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recuperare i dati meteo');
        }
      })
      .then((data) => {
        setWeatherData(data); 
        setError(null); 
      })
      .catch((error) => {
        setError(error.message); 
        console.log('ERROR!', error);
      });
  };


  useEffect(() => {
    fetchWeatherData();
  }, [city]); 

  return (
    <div>
      <h1>Meteo di {city}</h1>
      {error && <p>{error}</p>}
      {weatherData ? (
        <div>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condizioni: {weatherData.weather[0].description}</p>
          <p>Vento: {weatherData.wind.speed} m/s</p>
          <p>Umidità: {weatherData.main.humidity}%</p>
        </div>
      ) : (
        <p>Nessuna città trovata</p>
      )}
    </div>
  );
}

export default FetchingInfo;
