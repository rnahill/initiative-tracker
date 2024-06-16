import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from "./pages/HomePage"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    //   errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        }
        // ,
        // {
        //   path: '/About',
        //   element: <AboutPage />,
        // }
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );