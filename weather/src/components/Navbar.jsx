import { Col, Row, Container } from "react-bootstrap";
import CitySearch from "./InputSearch";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCust() {
  return (
    
      <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Row>
                <Col>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav></Col> <Col><CitySearch/></Col></Row>
        </Container>
      </Navbar>
  );
}

export default NavbarCust;