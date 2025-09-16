import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import MainLayout from "../layout/Layout";
import ComponentOne from "../pages/ComponentOne";
import ComponentTwo from "../pages/ComponentTwo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/one",
                element: <ComponentOne />
            },
            {
                path: "/two",
                element: <ComponentTwo />
            },
        ]
    },
])