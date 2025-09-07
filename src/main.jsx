import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/Components/pages/About/About.jsx';
import Contact from './assets/Components/pages/Contact/Contact.jsx';
import Favorites from './assets/Components/pages/Favorites/Favorites.jsx';
import Main from './assets/Components/Main/Main.jsx';
import Home from './assets/Components/pages/Home/Home.jsx';
import PropertyDetails from './assets/Components/pages/PropertyDetails/PropertyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>Oops....!!! </h2>,
    children:[
      {
        path: '/',
        loader: () => fetch('../public/properties.json'),
        element: <Home></Home>
      },
      {
        path:'/:propertyId',
        loader: () => fetch('../public/properties.json'),
        element: <PropertyDetails></PropertyDetails>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
