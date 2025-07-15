import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";

import App from './App.jsx'
import ReducerPage from "../pages/reducer/ReducerPage.jsx"
import ReduxLegacyPage from "../pages/redux-legacy/ReduxLegacyPage.jsx"
import ReduxToolkitPage from "../pages/redux-toolkit/ReduxToolkitPage.jsx"

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
        path: "/redux-legacy",
        element: <ReduxLegacyPage />
    },
    {
        path: "/redux-toolkit",
        element: <ReduxToolkitPage />
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
