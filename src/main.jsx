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
import Store from './pages/Store';

// Components
import NavBar from './components/NavBar';
import Wpp from './components/Wpp';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produtos",
    element: <Store />
  },
  {
    path: "/sobre-nos",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <NavBar />
    <RouterProvider router={router} />
    <Wpp />
    <Footer />
    </CartProvider>
  </React.StrictMode>,
)
