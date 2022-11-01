import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Housing from './pages/Housing/index.jsx'
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/housing",
    element: <Housing />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
