import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";


const AboutTab = () => {

    return (
        <Container style={{paddingTop: '8rem'}}>
            <Row>
                <Col className='mb-5'>
                    <Card style={{ border: 'dotted green', borderWidth: '.4rem' }} className='p-1 border-success'>
                        <Card.Img 
                            src='https://img.freepik.com/free-photo/clothes-hanging_1339-3159.jpg?w=1380&t=st=1662002173~exp=1662002773~hmac=b3bc3c884776d770fd7b9027b8be0928f5f23004c2ad28dc99b67b86588945f1' 
                            alt='laundry'
                        />
                    </Card>
                </Col>
                <Col>
                    <h4 className='text-success'>
                        ABOUT US
                    </h4>
                    <h2>
                        We Provide  <span className='text-success'>The Best Quality</span> Laundry Services.
                    </h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum 
                        available, but the majority have suffered alteration in 
                        some form, by injected humour, or randomised words which 
                        don't look even slightly believable.
                    </p>
                    <div>
                        <ul>
                            <li className='nav-link my-4'>
                                <IconContext.Provider value={{ className: 'text-success', size: '1.2em' }}>
                                    <FaCheckCircle />
                                </IconContext.Provider>
                                <span className='mx-4'>At vero eos et accusamus et iusto odio.</span>
                            </li>
                            <li className='nav-link my-4'>
                                <IconContext.Provider value={{ className: 'text-success', size: '1.2em' }}>
                                    <FaCheckCircle />
                                </IconContext.Provider>
                                <span className='mx-4'>Established fact that a reader will be distracted</span>
                            </li>
                            <li className='nav-link my-4'>
                                <IconContext.Provider value={{ className: 'text-success', size: '1.2em' }}>
                                    <FaCheckCircle />
                                </IconContext.Provider>
                                <span className='mx-4'>Sed ut perspiciatis unde omnis iste natus sit</span>
                            </li>
                        </ul>
                    </div>
                    <Link to='/about-us'>
                        <Button variant='success'>
                            Discover More <span className="mx-3"><FaArrowRight /></span>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );

};

export default AboutTab;