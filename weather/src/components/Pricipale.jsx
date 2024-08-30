import React, { useState } from 'react';
import CitySearch from '../components/CitySearch';
import { infoWeatherData } from './FetchingInfo';
import WeatherCard from './WeatherCard';

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleCitySearch = async (cityName) => {
    const data = await infoWeatherData(cityName);
    setWeatherData(data);
    setCity(cityName);
  };

  return (
    <div>
      <h1>Benvenuto !</h1>
      <h2>Controlla il meteo nella tua città</h2>
      <CitySearch onCitySearch={handleCitySearch} />
      {weatherData && <WeatherInfo data={weatherData.current} city={city} />}
    </div>
  );
}

export default Home;
