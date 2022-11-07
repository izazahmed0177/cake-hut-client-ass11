import Blog from "../../Other/Blog/Blog";
import ErrorPage from "../../Other/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>

            },
        ]
    }
])