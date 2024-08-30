import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const città = ['Roma', 'Milano', 'Napoli', 'Torino', 'Firenze','Los Angeles'];

function FixedCard() {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c906786fcf8000ed9d78c6205f38333a&units=metric`);
      
      if (!response.ok) {
        throw new Error(`Errore nel recupero dei dati`);
      }

      const data = await response.json();
      setWeatherData((prevData) => ({
        ...prevData,
        [city]: data,
      }));
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  useEffect(() => {
    città.forEach((city) => {
      fetchWeatherData (city);
    });
  }, []);

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {città.map((city) => (
          <Col key={city} md={4} className="mb-4 text-center">
            {weatherData[city] ? (
              <Card className="mb-3 border-info" style={{ backgroundColor: 'white' }}>
                <Card.Body>
                  <Card.Title>Meteo a {weatherData[city].name}</Card.Title>
                  <Card.Subtitle className="mb-2 ">
                    <h4>Temperatura: {weatherData[city].main.temp}°C</h4>
                  </Card.Subtitle>
                  <Card.Text>
                    <h4>Condizioni: {weatherData[city].weather[0].description}</h4>
                    <h4>Vento: {weatherData[city].wind.speed} m/s</h4>
                    <h4>Umidità: {weatherData[city].main.humidity}%</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <p>nessuna città trovata</p>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FixedCard;

