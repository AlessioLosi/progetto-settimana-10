import React, { useState } from 'react';
import Home from './components/Pricipale';
import CitySearch from './components/InputSearch';
import WeatherCard from './components/WeatherCard';
import {infoWeatherData} from './components/FetchingInfo';
import ColorSchemesExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFisse from './components/CardFisse';
import Footercustom from './components/Footer';


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
      <ColorSchemesExample></ColorSchemesExample>
      <Home></Home>
      <CitySearch onCitySearch={handleCitySearch} />
      {weatherData && <WeatherCard data={weatherData} city={city} />}</>
      <CardFisse></CardFisse>
      <Footercustom></Footercustom>
    </div>
  );
}

export default App;
