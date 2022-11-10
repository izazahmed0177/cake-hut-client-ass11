import Blog from "../../Other/Blog/Blog";
import ErrorPage from "../../Other/ErrorPage/ErrorPage";
import AddCake from "../../Pages/AddCake/AddCake";
import CakeDetails from "../../Pages/CakeDetails/CakeDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import EditReviewItem from "../../Pages/MyReview/EditReviewItem";
import MyReview from "../../Pages/MyReview/MyReview";
import OurCake from "../../Pages/OurCake/OurCake";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: () => fetch('https://cake-hut-server-ass11.vercel.app/cakeservices')


            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

            },
            {
                path: '/addcake',
                element: <PrivateRoute><AddCake></AddCake></PrivateRoute>

            },
            {
                path: '/cakeservices/:id',
                element: <CakeDetails></CakeDetails>,
                loader: ({ params }) => fetch(`https://cake-hut-server-ass11.vercel.app/cakeservices/${params.id}`)

            },
            {
                path: '/editreview/:id',
                element: <EditReviewItem></EditReviewItem>,
                loader: ({ params }) => fetch(`https://cake-hut-server-ass11.vercel.app/userreview/${params.id}`)

            }
        ]

    }
])