import { Container, Row, Col, Card, Button, CardImg } from 'react-bootstrap';
import ServiceData from './ServiceData';
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
    return (
        <Container style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <Row>

                <h2 className='text-center mb-5'>Our Services</h2>

                {ServiceData.map((service, dataId) => (
                    <Col key='dataId' lg={4} md={6} sm={12}>
                        <Card className='mb-5 text-left' style={{ border: 'none' }}>
                            <CardImg src={service.img} variant="card-img-top" className='mb-3' />
                            <h3>{service.service}</h3>
                            <p>{service.description}</p>
                            <Button style={{ textAlign: 'left', width: '10rem' }} variant='success' size='sm'>
                                Discover More <span className='mx-2'><FaArrowRight /></span>
                            </Button>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    );
};

export default Services;