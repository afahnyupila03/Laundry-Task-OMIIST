import { useState, useReducer, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsEnvelopeFill, BsFillTelephoneFill, BsGeoAltFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const newsletterReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@')
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('@')
        };
    }
    return {
        value: '',
        isValid: null
    };
};

const Footer = () => {

    // form Validity
    const [letterisValid, setLetterIsValid] = useState(false)

    // Reducer Function
    const [newsletterState, dispatchNewsletter] = useReducer(
        newsletterReducer, {
            value: '',
            isValid: null
        }
    );
    // Destructuring
    const {isValid: newsletterIsValid} = newsletterState;

    // useEffect Listener
    useEffect(
        () => {
            const identifier = setTimeout(
                () => {
                    setLetterIsValid(newsletterIsValid);
                }, 500
            );

            // Clearout Function
            return () => {
                clearTimeout(identifier);
            };

        }, [newsletterIsValid]
    );

    // ChangeHandler
    const newsletterChangeHandler = (event) => {
        dispatchNewsletter(
            {
                type: 'USER_INPUT',
                val: event.target.value
            }
        );
    };

    return (
        <>
            <Container fluid className=' p-5 bg-dark text-white' variant="dark">
                <Container>
                    <Row>
                        {/* Laundri Area */}
                        <Col lg={3} md={4} sm={12} className='mb-3'>
                            <Link to='/' style={{fontSize: '1.2rem', fontWeight: 'bold'}} className='mb-5 navbar-brand'>
                                OMIIST-LAUNDRY
                            </Link>
                            <div className="laundri-text">
                                <p>
                                    We are many variations of passages
                                    available but the majority have suffered
                                    alteration in some form by injected humour
                                    words believable.
                                </p>
                            </div>
                            <div className='laundri-infor m-0'>
                                    <Link to='/#' className="nav-link mb-2">
                                        <IconContext.Provider value={{ size: '1.2em', className: 'text-success' }}>
                                            <BsFillTelephoneFill /> <span className='mx-2'>237 6 62 68 51 39</span>
                                        </IconContext.Provider>
                                        
                                    </Link>
                                    <Link to='/#' className="nav-link mb-2">
                                        <IconContext.Provider value={{ size: '1.2em', className: 'text-success' }}>
                                            <BsEnvelopeFill /> <span className='mx-2'>hello@gmail.com</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className="nav-link">
                                        <IconContext.Provider value={{ size: '1.2em', className: 'text-success' }}>
                                            <BsGeoAltFill /> <span className='mx-2'>Molyko - Buea</span>
                                        </IconContext.Provider>
                                    </Link>
                            </div>
                        </Col>
                        {/* Quick Links */}
                        <Col lg={3} md={4} sm={12} className='mb-3'>
                            <div className="quickLinks-header">
                                <h3>Quick Links</h3>
                            </div>
                            <div className='links'>
                                
                                    <Link to='/about-us' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>About Us</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>FAQ's</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Terms of Service</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Privacy Policy</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Our Events</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Latest Blog</span>
                                        </IconContext.Provider>
                                    </Link>
                            </div>
                        </Col>
                        {/* Services */}
                        <Col lg={3} md={4} sm={12} className='mb-3'>
                            <div className="service-header">
                                <h3>Services</h3>
                            </div>
                            <div className='service-links'>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Dry Cleaning</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Clothes Laundry</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Commercial Laundry</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Stain Laundry</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Curtains Laundry</span>
                                        </IconContext.Provider>
                                    </Link>
                                    <Link to='/#' className='nav-link'>
                                        <IconContext.Provider value={{ size: '1em', className: 'text-success' }}>
                                            <BsFillCaretRightFill /><span className='mx-3'>Steam Iron</span>
                                        </IconContext.Provider>
                                    </Link>
                            </div>
                        </Col>
                        {/* Newsletter */}
                        <Col lg={3} md={4} sm={12} className='mb-3'>
                            <div className="news-header">
                                <h3>Newsletter</h3>
                            </div>
                            <div className="news-text">
                                <p>
                                    Subscribe Our Newsletter To Get Latest Update And News
                                </p>
                            </div>
                            <div className="new-input">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" value={newsletterState.value} onChange={newsletterChangeHandler} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Button className='mt-2 mb-4' variant='success' disabled={!letterisValid}>Subscribe</Button>
                            </div>
                        </Col>
                        
                    </Row>
                    {/* Footer text */}
                    <Row>
                        <hr />
                        <Col>
                            <p>
                                <span className='text-success'>&copy;</span> {new Date().getFullYear()} <span className='text-success'>Laundri</span> All Rights Reserved.
                            </p>
                        </Col>
                        <Col xs lg="2">
                            <Link to='#'>
                                <IconContext.Provider value={{ className: 'text-success mx-2', size: '1.2em'  }}>
                                    <FaFacebookF />
                                </IconContext.Provider>
                            </Link>
                            <Link to='#'>
                                <IconContext.Provider value={{ className: 'text-success mx-2', size: '1.2em' }}>
                                    <FaLinkedinIn />
                                </IconContext.Provider>
                            </Link>
                            <Link to='#'>
                                <IconContext.Provider value={{ className: 'text-success mx-2', size: '1.2em' }}>
                                    <FaTwitter />
                                </IconContext.Provider>
                            </Link>
                            <Link to='#'>
                                <IconContext.Provider value={{ className: 'text-success mx-2', size: '1.2em' }}>
                                    <FaYoutube />
                                </IconContext.Provider>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );

};


export default Footer;