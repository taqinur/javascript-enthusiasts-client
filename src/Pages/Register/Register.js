import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Form className='w-sm-50 bg-primary bg-gradient bg-opacity-50 text-dark w-50 my-3 mx-auto border border-dark rounded-2 p-3'>
        <h2>Register</h2>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
        <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="photoURL" name="photoURL" placeholder="Enter photoURL" />
        </Form.Group>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with the Terms and Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <h6 className='mt-2'>Already have an account? <Link to={'/login'}>Log In here</Link></h6>
    </Form>
    );
};

export default Register;