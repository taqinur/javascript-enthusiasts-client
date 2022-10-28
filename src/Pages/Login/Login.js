import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";



const Login = () => {
    return (
        <Form className='w-sm-50 bg-primary bg-gradient bg-opacity-50 text-dark w-50 my-5 mx-auto border border-dark rounded-2 p-3'>
          <h2>Log In</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h6 className='mt-2'>Do not have an account? <Link to={'/register'}>Register here</Link></h6>
      <ButtonGroup vertical>
      <Button variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Log In with Google
      </Button>
      <Button variant="outline-primary" ><FaGithub></FaGithub> Log In with Github
      </Button>
      </ButtonGroup>
    </Form>
    );
};

export default Login;