import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Form from '../Components/Form';
import Login from '../Components/Login';

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Form />,
    },
    {
        path: '/signup',
        element: <Form />,
    }
])

export default routes;
