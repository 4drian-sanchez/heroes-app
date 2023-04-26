import React from 'react'
import ReactDOM from 'react-dom/client'

import { HeroesApp } from './HeroesApp'
import './assets/css/styles.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage } from './heroes/Pages/MarvelPage';
import { ErrorPage } from './heroes/Pages/ErrorPage';
import { DcPage } from './heroes/Pages/DcPage';
import { LoginPage } from './auth/Pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'marvel',
        element: <MarvelPage/>,
      },
      {
        path: 'dc',
        element: <DcPage/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
