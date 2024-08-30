import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.pngtree.com%2Ffree-sun-png&psig=AOvVaw266wrdgxi4HNEQSLVphA0N&ust=1725108123493000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDkzdrenIgDFQAAAAAdAAAAABAE" alt="sole" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features"> Contatti</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;