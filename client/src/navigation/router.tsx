import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from '../pages/home-page/home-page';
import WheelPage from 'pages/wheel-page'
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.WheelPage.routePath,
        element: <WheelPage />,
      },
    ],
  },
]);

export default router;
