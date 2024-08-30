import { Col, Container, Row } from 'react-bootstrap';

function Home() {


  return (
    <Container >
        <Row >
            <Col className='testo'>
            <h1 className='text-center'>Benvenuto !</h1>
      <h2>Controlla il meteo nella tua città</h2></Col></Row>
    </Container>
  );
}

export default Home;
