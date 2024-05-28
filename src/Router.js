import React from 'react'
import {useRoutes } from "react-router";
import Home from "./Pages/home/home";
import About from "./Pages/aboutUs/aboutUs";
import Contact from "./Pages/contactUs/contactUs";
import Services from "./Pages/ourServices/ourServices";

const Router = () => {
  return  useRoutes([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <About/>,
    },

    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path: "/services",
        element: <Services/>,
    },

  ]
 
  )
}

export default Router