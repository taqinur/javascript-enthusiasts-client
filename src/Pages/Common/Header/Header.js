import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/jse.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}
                Javascript Enthusiasts
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5 px-3">
            <Link to={'/home'}>Home</Link>
            <Link to={'/courses'}>Courses</Link>
            <Link to={'/faq'}>FAQ</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/login'}>Log In</Link>
            <Link to={'/register'}>Register
            </Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;