import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { BsPersonCircle, BsFillCalendar2RangeFill } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Blog = () => {

    return (
        <Container style={{paddingTop: '8rem', paddingBottom: '8rem'}}>
            <Row>
                <div className='text-center mb-5'>
                    <h4 className='text-success'>OUR BLOG</h4>
                    <h1>Latest <span className='text-success'>News</span> &amp; Blog</h1>
                </div>
                <Col lg={4} md={6} sm={12}>
                    <Card style={{border: 'none'}} className='mb-4'>
                        <CardImg src='https://live.themewild.com/laundri/assets/img/blog/01.jpg' variant="card-img-top" />
                        <CardHeader className='mb-2 border-success' style={{borderRight: 'none', borderLeft:'none', borderTop: 'none', background: 'none'}}>
                            <Row>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsPersonCircle />
                                    </IconContext.Provider>
                                    <span className='mx-1'>By Alicia Davis</span>
                                </Col>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsFillCalendar2RangeFill />
                                    </IconContext.Provider>
                                    <span className='mx-1'>June 26, 2022</span>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Card.Title>
                            There Are Many Variations Of The Passages Available Suffered
                        </Card.Title>
                        <Card.Body>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </Card.Body>
                        <Card.Footer style={{border: 'none', background: 'none'}}>
                            <Button variant='success'>
                                Read More 
                                <span className='px-3'><FaArrowRight /></span>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card style={{border: 'none'}} className='mb-4'>
                        <CardImg src='https://live.themewild.com/laundri/assets/img/blog/02.jpg' variant="card-img-top" />
                        <CardHeader className='mb-2 border-success' style={{borderRight: 'none', borderLeft:'none', borderTop: 'none', background: 'none'}}>
                            <Row>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsPersonCircle />
                                    </IconContext.Provider>
                                    <span className='mx-1'>By Alicia Davis</span>
                                </Col>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsFillCalendar2RangeFill />
                                    </IconContext.Provider>
                                    <span className='mx-1'>June 26, 2022</span>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Card.Title>
                            There Are Many Variations Of The Passages Available Suffered
                        </Card.Title>
                        <Card.Body>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </Card.Body>
                        <Card.Footer style={{border: 'none', background: 'none'}}>
                            <Button variant='success'>
                                Read More 
                                <span className='px-3'><FaArrowRight /></span>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card style={{border: 'none'}} className='mb-4'>
                        <CardImg src='https://live.themewild.com/laundri/assets/img/blog/03.jpg' variant="card-img-top" />
                        <CardHeader className='mb-2 border-success' style={{borderRight: 'none', borderLeft:'none', borderTop: 'none', background: 'none'}}>
                            <Row>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsPersonCircle />
                                    </IconContext.Provider>
                                    <span className='mx-1'>By Alicia Davis</span>
                                </Col>
                                <Col>
                                    <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                        <BsFillCalendar2RangeFill />
                                    </IconContext.Provider>
                                    <span className='mx-1'>June 26, 2022</span>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Card.Title>
                            There Are Many Variations Of The Passages Available Suffered
                        </Card.Title>
                        <Card.Body>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </Card.Body>
                        <Card.Footer style={{border: 'none', background: 'none'}}>
                            <Button variant='success'>
                                Read More 
                                <span className='px-3'><FaArrowRight /></span>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='success mt-5 m-auto align-self-center d-flex'>
                        Load More<span className='px-3'><FaArrowRight /></span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );

};

export default Blog;