import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                path: '/courses',
                element:<Courses></Courses>,
                loader: () => fetch('https://javascript-enthusiasts-server.vercel.app/course')
            },
            {
                path: '/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://javascript-enthusiasts-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element:<FAQ></FAQ>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])