import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('https://javascript-enthusiasts-server.vercel.app/course')
        .then( res => res.json())
        .then(data => setCourses(data));
    },[])

    return (
        <div>
            <h4 className='mt-5 '>Available Now: <br />{courses.length} Courses</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;