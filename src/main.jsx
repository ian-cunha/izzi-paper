// Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

// Components
import NavBar from './components/NavBar';
import Wpp from './components/Wpp';
import Footer from './components/Footer';

// Categorias
import Toys from './categories/Toys';
import Desk from './categories/Desk';
import Customized from './categories/Customized';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/brinquedos",
    element: <Toys />,
  },
  {
    path: "/artigos-de-escritorio",
    element: <Desk />,
  },
  {
    path: "/personalizados",
    element: <Customized />,
  },
  {
    path: "/sobre-nos",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Wpp />
    <Footer />
  </React.StrictMode>,
)
