import React, { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function CitySearch({ onCitySearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onCitySearch(city);
    }
  };

  return (
    <Container className="my-4">
    <Row className="justify-content-center">
      <Col md={6}>
        <Form onSubmit={handleSubmit} className="text-center">
          <Form.Group controlId="formCitySearch">
            <Form.Control
              type="text"
              placeholder="Inserisci una città"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="outline-info" className="mt-2">
            Cerca
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
}

export default CitySearch;
