import React, { useState } from 'react';
import CitySearch from './InputSearch';
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
    <div className='d-flex justify-content-center'>
      <h1>Benvenuto !</h1>
      <h2>Controlla il meteo nella tua città</h2>
    </div>
  );
}

export default Home;
