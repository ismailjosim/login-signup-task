import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AttendanceTable from '../Components/AttendanceTable';
import Form from '../Components/Form';
import Login from '../Components/Login';
import MainLayout from '../MainLayout';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
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
            },
            {
                path: '/table',
                element: <AttendanceTable />
            }
        ]
    }

])

export default routes;
