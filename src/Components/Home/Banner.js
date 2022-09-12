import {Container, Col, Row, Button} from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const bannerImgStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/clothes-hang_1339-2012.jpg?w=1380&t=st=1661997082~exp=1661997682~hmac=2d32a30b5eda0db30db3344cc7215e0c99bd12601bf44a74fe6d93202549261d")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};
const textStyle={
    paddingTop: '10rem',
    paddingBottom: '10rem'
}

const Banner = () => {

    return (
        <Container fluid className='banner-image' style={bannerImgStyle}>
            <Container style={textStyle}>
                <Row>
                    <Col sm className='mb-5'>
                        <h3 className='text-white'>
                            <span className='text-success'>BEST </span>LAUNDRY SOLUTIONS!!
                        </h3>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <Button variant='success'>
                            Learn More <span className='mx-3'><FaArrowRight /></span>
                        </Button>
                    </Col>
                    <Col sm>
                        <h3 className='text-white'>
                            OUR <span className='text-success'>SERVICES</span> OFFERED
                        </h3>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <p className='text-white'>
                            There are many variations of passages orem psum available but the majority have suffered alternation.
                        </p>
                        <Link to='/services'>
                            <Button variant='success'>
                                Discover More <span className='mx-3'><FaArrowRight /></span>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    );

};


export default Banner;