import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Gems from './pages/Gems.js';
import Products from './pages/Products.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'gems',
    element: <Gems />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
