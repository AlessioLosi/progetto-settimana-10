import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" alt="sole" className='sole'/></Navbar.Brand>
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