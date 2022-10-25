import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Pages/Categories/Categories";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/category/:id',
                element:<Categories></Categories>
            },
            {
                path: '/course/:id',
                element:<CourseDetails></CourseDetails>
            }
        ]
    }
])