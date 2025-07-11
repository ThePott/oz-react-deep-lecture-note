import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import ReducerPage from "../pages/reducer/page.jsx"

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/reducer",
        element: <ReducerPage />
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
