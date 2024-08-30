import React, { useState } from 'react';
import CitySearch from './components/InputSearch';
import WeatherCard from './components/WeatherCard';
import {infoWeatherData} from './components/FetchingInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleCitySearch = async (cityName) => {
    const data = await infoWeatherData(cityName);
    setWeatherData(data);
    setCity(cityName);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySearch onCitySearch={handleCitySearch} />
      {weatherData && <WeatherCard data={weatherData} city={city} />}
    </div>
  );
}

export default App;
