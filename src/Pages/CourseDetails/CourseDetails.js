import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {title, price, description, category, image} = course;

    return (
        <div className="m-auto mt-5 card mb-3" style={{ maxWidth: '40rem', maxHeight: '40rem'}} >
        <div className="row g-0">
            <div className="col-md-4 my-auto">
                <img src={image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <small className='text-danger'>Difficulty level: {category}</small>
                <p className="card-text">{description}</p>
                <h3 className="card-text text-info">Price: BDT {price}</h3>
                <Button variant="outline-dark"><Link>Get Premium Access</Link></Button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CourseDetails;