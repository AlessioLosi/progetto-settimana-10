import React from 'react';
import { Card } from 'react-bootstrap';

function WeatherCard({ data, city }) {
  if (!data) {
    return <p>Nessun dato disponibile</p>;
  }

  return (
    <Card className="border-info mb-3 p-5" >
      <Card.Body>
        <Card.Title>Weather in {data.name}</Card.Title>
        <Card.Subtitle className="mb-2 ">
          <h4>Temperature: {data.main.temp}°C</h4>
        </Card.Subtitle>
        <Card.Text>
          <h4>Conditions: {data.weather[0].description}</h4>
          <h4>Wind: {data.wind.speed} m/s</h4>
          <h4>Umidity: {data.main.humidity}%</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;

