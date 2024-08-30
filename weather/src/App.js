import React, { useState } from 'react';
import Home from './components/Pricipale';
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
      <>
      <Home></Home>
      <CitySearch onCitySearch={handleCitySearch} />
      {weatherData && <WeatherCard data={weatherData} city={city} />}</>
    </div>
  );
}

export default App;
