import { createBrowserRouter } from "react-router-dom";
import { Home, NotFoundPage, Properties } from "./pages";
import RootLayout from "./layouts/RootLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'Propiedades',
                element: <Properties />,
            },
        ],
    },
])