import { useEffect, useState } from 'react'
import Sidenav from './components/Sidenav'
import NavbarTop from './components/NavbarTop'
import Login from './components/Login'
// import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Customers from './components/Customers'
import Orders from './components/Orders'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }
  , [isLoggedIn]);



  const router = createBrowserRouter([
    {
        path: "/",
        element: isLoggedIn ? <><NavbarTop login={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/><Sidenav/></> : <><NavbarTop/><Login/></>,
    },
    {
        path: '/login',
        element: <><NavbarTop/><Login/></>
    },
    {
        path: '/dashboard',
        element: <><NavbarTop/><Sidenav/></>
    },
    {
        path: '/Products',
        element: <><NavbarTop/><Products/></>
    },
    {
        path: '/Customers',
        element: <><NavbarTop/><Customers/></>
    },
    {
        path: '/Orders',
        element: <><NavbarTop/><Orders/></>
    },
]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
