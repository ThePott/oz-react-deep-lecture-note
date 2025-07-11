import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";

import App from './App.jsx'
import ReducerPage from "../pages/reducer/ReducerPage.jsx"
import ContextAsLecturePage from "../pages/context-as-lecture/page.jsx"

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/reducer",
        element: <ReducerPage />
    },
    {
        path: "/context-as-lecture",
        element: <ContextAsLecturePage />
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
