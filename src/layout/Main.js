import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import LeftNavbar from '../Pages/Common/LeftNavbar/LeftNavbar';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Container>
              <Row>
                <Col lg="3">
                  <LeftNavbar></LeftNavbar>
                </Col>
              </Row>
              <Row>
                <Col lg="9">
                  <h2><Outlet></Outlet></h2>            </Col>
              </Row>
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Main;