import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Resume from '../pages/Resume';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'resume',
            element: <Resume/>
        },
      ]
    },
  ]);

