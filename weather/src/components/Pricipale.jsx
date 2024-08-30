import { Col, Container, Row } from 'react-bootstrap';
import '../App.css'

function Home() {


  return (
    <Container >
        <Row >
            <Col className='testo'>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Rai_Meteo_-_Logo_2018.svg" 
              alt="logo" 
              className="logo" 
            />
            <h1 className='text-center text-info'>Benvenuto !</h1>
      <h2 className='text-info'>Controlla il meteo nella tua città</h2></Col></Row>
    </Container>
  );
}

export default Home;
