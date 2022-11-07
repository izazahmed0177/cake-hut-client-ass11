import Blog from "../../Other/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>

            }
        ]
    }
])