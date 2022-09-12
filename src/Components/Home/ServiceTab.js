import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import ServiceTabData from "./ServiceTabData";
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const ServiceTab = () => {

    return (
        <Container style={{ paddingTop: '8rem' }}>
            <Row>

                <h2 className='text-center mb-5'>Our Services</h2>

                {ServiceTabData.map((serviceData, data) => (
                    <Col key={data} lg={4} md={6} sm={12}>
                        <Card className='mb-4 text-left' style={{ border: 'none' }}>
                            <CardImg src={serviceData.img} variant="card-img-top" className='mb-3' />
                            <h3>{serviceData.service}</h3>
                            <p>{serviceData.description}</p>
                            <Button style={{ textAlign: 'left', width: '10rem' }} variant='success' size='sm'>
                                Discover More <span className='mx-2'><FaArrowRight /></span>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <Link to='/services' style={{ textDecoration: 'none' }}>
                        <Button variant='success' className='mt-5 m-auto align-self-center d-flex' style={{ textDecoration: 'none' }}>
                            Discover More <span className='mx-3'><FaArrowRight /></span>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );

};

export default ServiceTab;