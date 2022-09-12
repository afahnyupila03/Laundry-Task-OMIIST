import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TeamTabData from "./TeamTabData";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IconContext } from "react-icons";


const TeamTab = () => {

    return (
        <Container style={{paddingTop: '9rem'}}>
            <Row>
                <h3 className='mb-2 text-center'>Meet Our <span className='text-success'>Team</span></h3>
                {TeamTabData.map((teamData, teamId) => (
                    <Col key={teamId} lg={3} md={6} sm={12} className='p-5'>
                        <Card className='pl-5 pr-5 pt-5 border-success' style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderWidth: '.3rem' }}>
                            <Image src={teamData.img} roundedCircle='true' />
                            <Card.Title className='pt-4 text-center' style={{fontSize: '1.5rem'}}>
                                {teamData.name}
                            </Card.Title>
                            <Card.Subtitle className='text-center text-success'>
                                {teamData.post}
                            </Card.Subtitle>
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    <Link to='/#'>
                                        <IconContext.Provider value={{ className: 'mx-2 text-success', size: '1em', style: { selfAlign: 'center' } }}>
                                            <FaFacebookF />
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#'>
                                        <IconContext.Provider value={{ className: 'mx-2 text-success', size: '1em', style: { selfAlign: 'center' } }}>
                                            <FaLinkedinIn />
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#'>
                                        <IconContext.Provider value={{ className: 'mx-2 text-success', size: '1em', style: { selfAlign: 'center' } }}>
                                            <FaTwitter />
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#'>
                                        <IconContext.Provider value={{ className: 'mx-2 text-success', size: '1em', style: { selfAlign: 'center' } }}>
                                            <FaYoutube />
                                        </IconContext.Provider>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );

};


export default TeamTab;