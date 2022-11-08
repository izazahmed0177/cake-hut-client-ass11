import Blog from "../../Other/Blog/Blog";
import ErrorPage from "../../Other/ErrorPage/ErrorPage";
import AddCake from "../../Pages/AddCake/AddCake";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import OurCake from "../../Pages/OurCake/OurCake";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/ourcake',
                element: <OurCake></OurCake>,
                loader: () => fetch('http://localhost:5000/cakeservices')


            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>

            },
            {
                path: '/addcake',
                element: <AddCake></AddCake>

            },
        ]

    }
])