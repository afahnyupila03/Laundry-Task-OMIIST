import { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Container, Col, Form, Row } from 'react-bootstrap';
import signUp from './signUp.svg';
// Firebase Authentication
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase-config";

const firstLastNameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('')
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('')
        };
    }
    return {
        value: '',
        isValid: null
    }
};
const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('')
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('')
        };
    }
    return {
        value: '',
        isValid: null
    }
};
const phoneNumberReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes(237)
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes(237)
        };
    }
    return {
        value: '',
        isValid: null
    }
};
const emailReducer = (state, action) => {
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
    }
};
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6.
        };
    }
    return {
        value: '',
        isValid: null
    }
};

const SignUp = (props) => {

    // Input Reducer Functions
    const [nameState, dispatchName] = useReducer(
        firstLastNameReducer, {
            value: '',
            isValid: null
        }
    );
    const [usernameState, usernameDispatch] = useReducer(
        usernameReducer, {
            value: '',
            isValid: null
        }
    );
    const [phoneNumberState, phoneNumberDispatch] = useReducer(
        phoneNumberReducer, {
            value: '',
            isValid: null
        }
    );
    const [email, dispatchEmail] = useReducer(
        emailReducer, {
            value: '',
            isValid: null
        }
    );
    const [password, dispatchPassword] = useReducer(
        passwordReducer, {
            value: '',
            isValid: null
        }
    );
    // Form Validity
    const [formIsValid, setFormIsValid] = useState(false);

    // Destructuring Reducer States
    const { isValid: nameIsValid } = nameState;
    const { isValid: usernameIsValid } = usernameState;
    const { isValid: phoneNumberIsValid } = phoneNumberState;
    const { isValid: emailIsValid } = email;
    const { isValid: passwordIsValid } = password;

    // useEffect Listening to Change In Dependencies
    useEffect(
        () => {
            const signUpValid = setTimeout(
                () => {
                    setFormIsValid(
                        nameIsValid && usernameIsValid && phoneNumberIsValid && emailIsValid && passwordIsValid
                    );
                }, 500
            );

            // clearOut Function
            return () => {
                clearTimeout(signUpValid)
            };

        }, [
            nameIsValid, usernameIsValid, phoneNumberIsValid, emailIsValid, passwordIsValid
        ]
    );

    // Change Handler
    const nameChangeHandler = (event) => {
        dispatchName({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const usernameChangeHandler = (event) => {
        usernameDispatch({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const phoneNumberChangeHandler = (event) => {
        phoneNumberDispatch({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const passwordChangehandler = (event) => {
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };

    // Handle Submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchName('')
        usernameDispatch('')
        phoneNumberDispatch('')
        dispatchEmail('')
        dispatchPassword('')
    };

    // firebase SignUp
    const navigate = useNavigate();
    const firebaseRegistration = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            navigate("/registration-successful");
            props.onLogin(nameState.value, usernameState.value, phoneNumberState.value, email.value, password.value);
        } catch (error) {
            alert(error.message)
        }
    };

    return(
        <Container fluid style={{ backgroundImage: "url('https://img.freepik.com/free-photo/shiny-golden-particles-with-light-streak_1017-32797.jpg?w=1380&t=st=1662307321~exp=1662307921~hmac=51670dab86866f385e77100b83ff9c9f55b657a66e82e198167b7d6344f89134')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Container style={{padding: '10rem'}}>
                <Row>
                    <Col sm>
                        <img 
                            src={signUp}
                            alt='signup-logo'
                            width={400}
                            height={500}
                        />
                    </Col>
                    <Col sm>
                        <Card className='text-success' style={{ alignSelf: 'center', background: 'transparent', fontWeight: 'bold', fontSize: '1.2rem', border: 'none' }}>
                            <Form onSubmit={handleSubmit}>
                                {/* First and Last Names */}
                                <Form.Group as={Col} className='mb-4'>
                                    <Form.Label>First and Last Names</Form.Label>
                                    <Form.Control
                                        type='text'
                                        autoComplete='name'
                                        onChange={nameChangeHandler}
                                        value={nameState.value}
                                    />
                                </Form.Group>
                                {/* Username */}
                                <Form.Group as={Col} className='mb-4'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type='text'
                                        autoComplete='username'
                                        onChange={usernameChangeHandler}
                                        value={usernameState.value}
                                    />
                                </Form.Group>
                                {/* Email */}
                                <Form.Group as={Col} className='mb-4'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        autoComplete='email'
                                        onChange={emailChangeHandler}
                                        value={email.value}
                                    />
                                </Form.Group>
                                {/* PhoneNumber */}
                                <Form.Group as={Col} className='mb-4'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type='tel'
                                        autoComplete='tel'
                                        onChange={phoneNumberChangeHandler}
                                        value={phoneNumberState.value}
                                    />
                                </Form.Group>
                                {/* Password */}
                                <Form.Group as={Col} className='mb-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        autoComplete='current-password'
                                        onChange={passwordChangehandler}
                                        value={password.value}
                                    />
                                </Form.Group>
                                <Button type='submit' onClick={firebaseRegistration} disabled={!formIsValid} variant='success' style={{ fontWeight: 'bold', fontSize: '1.5rem' }} size='lg'>
                                    Sign Up
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );

};


export default SignUp;