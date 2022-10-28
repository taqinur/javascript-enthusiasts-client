import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
              <Row>
                <Col lg="3">
                  <div className='d-lg-block d-xl-block d-xs-none d-sm-none'>
                  <LeftNavbar></LeftNavbar>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="9">
                    <h2>total {courses.length}</h2>
                </Col>
              </Row>
          </Container>
    );
};

export default Courses;