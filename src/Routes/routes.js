import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Componets/Home/Home';
import Main from '../Layout/Main';

export const routes = createBrowserRouter([
    
         {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/home',
                    element: <Home></Home>
                }
            ]




        }

])