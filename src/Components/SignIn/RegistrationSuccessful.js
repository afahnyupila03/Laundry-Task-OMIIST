import { Container, Row, Col, Card, Button } from "react-bootstrap";
import welcome from './welcome.svg';
import { Link } from 'react-router-dom'


const RegistrationSuccessful = () => {
    return(
        <Container fluid style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/flat-tropical-leaves-background_23-2148953892.jpg?w=996&t=st=1662276377~exp=1662276977~hmac=00dcf9c2c5db5bd2ee724b342f245851d7bd29f39cc9e63f1aba64cf897fb366")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Container style={{ padding: '5rem' }}>
                <Row>
                    <Col>
                        <Card className='p-3' style={{ background: "transparent", border: 'none', alignSelf: 'center' }}>
                            <img
                                src={welcome}
                                alt='welcome-logo'
                                width={400}
                                height={300}
                                style={{ alignSelf: 'center' }}
                                className='mb-3'
                            />
                            <Card className='text-center text-success mb-4' style={{ background: 'transparent', border: 'none' }}>
                                <Card.Title style={{ fontSize: '5rem' }}>
                                    Registration Successful
                                </Card.Title>
                            </Card>
                            <Link to='/' style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
                                <Button style={{ fontWeight: 'bold', fontSize: '2rem' }} type='submit' variant='outline-success' size='lg'>
                                    Home
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default RegistrationSuccessful;