import { useReducer, useEffect, useState } from 'react';
import { Button, Card, Container, Form, Col, Row } from 'react-bootstrap';
import userLogin from './userLogin.svg';

import {auth} from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


// Reducers
const usernameReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('')
        };
    }
    if(action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('')
        };
    }
    return {
        value: '',
        isValid: null
    };
};
const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@')
        };
    }
    if(action.type === 'INPUT_BLUR') {
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
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        };
    }
    if(action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        };
    }
    return {
        value: '',
        isValid: null
    }
};

const SignIn = (props) => {

    // Reducer Functions
    const [usernameState, dispatchUsername] = useReducer(
        usernameReducer, {
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

    // State Destructuring
    const {isValid: usernameIsValid} = usernameState;
    const {isValid: emailIsValid} = email;
    const {isValid: passwordIsValid} = password;

    // // Form Validity
    const [formIsValid, setFormIsValid] = useState(false);

    // // useEffect to Listen to Dependency Change
    useEffect(
        () => {
            const signinIsValid = setTimeout(
                () => {
                    setFormIsValid(
                        usernameIsValid && emailIsValid && passwordIsValid
                    );
                }, 500
            );

            // Clearout Function
            return () => {
                clearTimeout(signinIsValid)
            };
        }, [
            usernameIsValid, emailIsValid, passwordIsValid
        ]
    );

    // Change Handler
    const usernameChangeHandler = (event) => {
        dispatchUsername({
            type: 'USER_INPUT',
            val: event.target.value.toUpperCase()
        });
    };
    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const passwordChangeHandler = (event) => {
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value
        });
    }

    // Validate Handler
    const validateUsernameHandler = () => {
        dispatchUsername({
            type: 'INPUT_BLUR'
        });
    };
    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'INPUT_BLUR'
        });
    };
    const validatePasswordHandler = () => {
        dispatchPassword({
            type: 'INPUT_BLUR'
        });
    };

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchUsername('');
        dispatchEmail('');
        dispatchPassword('');
    };

    // firebase SignIn
    const navigate = useNavigate();
    const firebaseSignIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate("/welcome");
            props.onLogin(usernameState.value, email.value, password.value);
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <Container fluid style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: 'cover' }}>
            <Container style={{ padding: '10rem' }}>
                <Row>
                    <Card className='p-5' as={Col} style={{ alignSelf: 'center', border: 'none', background: 'transparent' }}>
                        <Form className='text-success' onSubmit={handleSubmit} style={{ alignSelf: 'center', fontSize: '1.5rem' }}>
                            {/* Sign In Logo */}
                            <img
                                width={350}
                                height={350}
                                src={userLogin}
                                alt='user-login'
                            />
                            {/* username Input */}
                            <Form.Group as={Col} className='mb-3'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type='text'
                                    onChange={usernameChangeHandler}
                                    value={usernameState.value}
                                    onBlur={validateUsernameHandler}
                                    autoComplete='name'
                                />
                            </Form.Group>
                            {/* Email Input */}
                            <Form.Group as={Col} className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    onChange={emailChangeHandler}
                                    value={email.value}
                                    onBlur={validateEmailHandler}
                                    autoComplete='email'
                                    returnkeytype='next'
                                />
                            </Form.Group>
                            {/* Password Input */}
                            <Form.Group as={Col} className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    autoComplete='current-password'
                                    type='password'
                                    onChange={passwordChangeHandler}
                                    value={password.value}
                                    onBlur={validatePasswordHandler}
                                    returnkeytype='done'
                                    securetextentry='true'
                                />
                            </Form.Group>
                            {/* Submit Button */}
                            <Button onClick={firebaseSignIn} variant='success' size='lg' disabled={!formIsValid} style-={{fontWeight: 'bold'}}>
                                Sign In
                            </Button>
                        </Form>
                    </Card>
                </Row>
            </Container>
        </Container>
    );

};

export default SignIn;