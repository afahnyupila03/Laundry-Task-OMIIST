import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillMenuButtonWideFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const NavbarTab = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/' className='navbar-brand'>OMIIST-LAUNDRY</Link>
                    <Navbar.Toggle className='border-success text-success' variant='success' bg='outline-success' aria-controls="responsive-navbar-nav">
                        <BsFillMenuButtonWideFill />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link'>Home</Link>
                            {props.onIsLoggedIn ? '' : <Link to='/about-us' className='nav-link'>About Us</Link>}
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/contact-us' className='nav-link'>Contact Us</Link>
                        </Nav>
                        {
                            props.onIsLoggedIn ? 
                            (
                                    <Nav>
                                        <Link to='/' className='nav-link'>
                                            <Button variant='outline-success' onClick={props.onLogOut}>
                                                Log Out
                                            </Button>
                                        </Link>
                                    </Nav>
                            ) 
                            :
                            (
                                    <Nav>
                                        <Link to='/sign-up' className='nav-link'>
                                            <Button variant='outline-success'>
                                                Sign Up
                                            </Button>
                                        </Link>
                                        <Link to='sign-in' className='nav-link'>
                                            <Button variant='outline-success'>
                                                Sign In
                                            </Button>
                                        </Link>
                                    </Nav>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

};


export default NavbarTab;