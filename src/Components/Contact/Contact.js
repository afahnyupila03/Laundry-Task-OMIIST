import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useReducer, useState, useEffect } from 'react';

// UserReducers
// Names and Email
const fullNameReducer = (state, action) => {
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
    };
};
// PhoneNumber and Address
const phoneNumberReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes(+237)
        };
    }
    if(action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes(+237)
        };
    }
    return {
        value: '',
        isValid: null
    }
};
const addressReducer = (state, action) => {
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
// Message
const messageReducer = (state, action) => {
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
    }
};

const Contact = () => {

    // UseReducer functions
    // Full Names and Email
    const [fullNameState, dispatchFullName] = useReducer(
        fullNameReducer, {
            value: '',
            isValid: null
        }
    );
    const [emailState, dispatchEmail] = useReducer(
        emailReducer, {
            value: '',
            isValid: null
        }
    );

    // Phone Number and Address
    const [phoneNumberState, dispatchPhoneNumber] = useReducer(
        phoneNumberReducer, {
            value: '',
            isValid: null
        }
    );
    const [addressState, dispatchAddress] = useReducer(
        addressReducer, {
            value: '',
            isValid: null
        }
    );

    // Message
    const [messageState, dispatchMessage] = useReducer(
        messageReducer, {
            value: '',
            isValid: null
        }
    );

    // Destructuring useRuducer States
    // Name and Email
    const {isValid: fullNameIsValid} = fullNameState;
    const {isValid: emailIsValid} = emailState;

    // PhoneNumber and Address
    const {isValid: phoneNumberIsValid} = phoneNumberState;
    const {isValid: addressIsValid} = addressState;

    // Message
    const {isValid: messageIsValid} = messageState;

    // Form Validity
    const [formIsValid, setFormIsValid] = useState(false);

    // Useffect listener for dependency Change
    useEffect(
        () => {
            const messageValid = setTimeout(
                () => {
                    setFormIsValid(
                        fullNameIsValid && emailIsValid && phoneNumberIsValid && addressIsValid && messageIsValid
                    );
                }, 500
            );
            return () => {
                clearTimeout(messageValid)
            };
        }, [
            fullNameIsValid, emailIsValid, phoneNumberIsValid, addressIsValid, messageIsValid
        ]
    );

    // Event Change Handlers
    // Name and email
    const fullNameChangeHandler = (event) => {
        dispatchFullName({
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

    // phoneNumber and Address
    const phoneNumberChangeHandler = (event) => {
        dispatchPhoneNumber({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const addressChangeHandler = (event) => {
        dispatchAddress({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };

    // Message
    const messageChangeHandler = (event) => {
        dispatchMessage({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            fullNameState.value, emailState.value, phoneNumberState.value, addressState.value, messageState.value
        );
    };

    return (
        <>
            <Container fluid style={{ backgroundImage: "url('https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=1380&t=st=1662023020~exp=1662023620~hmac=e6d6a398741612fb548d02b62beade2d98def9bd4137726885d492e0e1df83be')" }}>
                <Container style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    {/* Full Names */}
                                    <Form.Group as={Col}>
                                        <Form.Label className='text-white'>Full Names</Form.Label>
                                        <Form.Control type="text" placeholder="Full Names"
                                            onChange={fullNameChangeHandler}
                                            value={fullNameState.value}
                                        />
                                        <Form.Text className="text-danger">
                                            Enter Full Names
                                        </Form.Text>
                                    </Form.Group>

                                    {/* Email */}
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className='text-white'>Enter Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email"
                                            onChange={emailChangeHandler} value={emailState.value}
                                        />
                                        <Form.Text className="text-danger">
                                            Enter valid email address
                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    {/* Phone Number */}
                                    <Form.Group as={Col}>
                                        <Form.Label className='text-white'>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="+237"
                                            onChange={phoneNumberChangeHandler} value={phoneNumberState.value}
                                        />
                                        <Form.Text className="text-danger">
                                            Include (+237)
                                        </Form.Text>
                                    </Form.Group>

                                    {/* Address */}
                                    <Form.Group as={Col}>
                                        <Form.Label className='text-white'>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Address"
                                            onChange={addressChangeHandler} value={addressState.value}
                                        />
                                        <Form.Text className="text-danger">
                                            Enter Address
                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text-white'>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3}
                                        onChange={messageChangeHandler} value={messageState.value}
                                    />
                                </Form.Group>
                                <Button variant='success' disabled={!formIsValid}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                {/* Google Map */}
                <iframe
                    src="https://maps.google.com/maps?q=OMIIST&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    style={{ width: "100%", height: "700px" }}
                ></iframe>
            </Container>
        </>
    );
};

export default Contact;