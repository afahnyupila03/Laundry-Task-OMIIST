import {Card, Container, Col, Row} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGem, FaBtc, FaRegCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";



const QualityTab = () => {

    return (
        <Container>
            <Row style={{ paddingTop: '8rem' }}>
                <Col lg={3} md={6} sm={12}>
                    <Card className='text-center p-4 mb-4 text-white bg-info' style={{border: 'none'}}>
                        <IconContext.Provider value={{ style: { marginLeft: '6rem' }, size: '3em', color: 'white' }}>
                            <FaGem className='text-center' />
                        </IconContext.Provider>
                        <h3 className='mt-4'>
                            Quality Service
                        </h3>
                        <p>
                            Contrary to popular belief psum is top simply random
                        </p>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='my-4 mb-4 text-center p-4 bg-success text-white' style={{border: 'none'}}>
                        <IconContext.Provider value={{ style: { marginLeft: '6rem' }, size: '3em', color: 'white' }}>
                            <FaRegCreditCard />
                        </IconContext.Provider>
                        <h3 className='mt-4'>
                            Order and Pay Online
                        </h3>
                        <p>
                            Contrary to popular belief psum is top simply random
                        </p>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='p-4 text-center mb-4 text-white bg-info' style={{border: 'none'}}>
                        <IconContext.Provider value={{ style: { marginLeft: '6rem' }, size: '3em', color: 'white' }}>
                            <TbTruckDelivery />
                        </IconContext.Provider>
                        <h3 className='mt-4'>
                            Fast Delivery
                        </h3>
                        <p>
                            Contrary to popular belief psum is top simply random
                        </p>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    
                        <Card className='my-4 text-center p-4 text-white bg-success' style={{border: 'none'}}>
                            <IconContext.Provider value={{ style: { marginLeft: '6rem' }, size: '3em', color: 'white' }}>
                                <FaBtc />
                            </IconContext.Provider>
                            <h3 className='mt-4'>
                                Affordable Pricing
                            </h3>
                            <p>
                                Contrary to popular belief psum is top simply random
                            </p>
                        </Card>
                    
                </Col>
            </Row>
        </Container>
    );

};

export default QualityTab;