import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

const Home = () => {
    return (
        <div>
            <Container>
              <Row>
                <Col lg="3">
                  <div className=''>
                  <LeftNavbar></LeftNavbar>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="9">
                  <Outlet></Outlet>            
                  </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Home;