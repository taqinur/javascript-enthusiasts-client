import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
              <Row>
                <Col lg="3" className='d-lg-block d-xl-block d-xs-none d-sm-none'>
                  <LeftNavbar></LeftNavbar>
                </Col>              
                <Col lg="9"  className="mx-auto row row-cols-2">
                    
                    {
                        courses.map(course => <Card style={{ width: '18rem'}} className= "mx-auto my-4 bg-light">
                        <Card.Img style={{ height: '12rem' }} variant="top" src={course.image} />
                        <Card.Body>
                          <Card.Title>{course.title}</Card.Title>
                          <Card.Text>
                            {course.description.slice(0,55)+'..'}
                          </Card.Text>
                          <Button variant="outline-dark" className='text-bg-white'><Link to={`/course/${course.id}`}>Explore More</Link></Button>
                        </Card.Body>
                      </Card>)
                    }
                </Col>
              </Row>
          </Container>
    );
};

export default Courses;