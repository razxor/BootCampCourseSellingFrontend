import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  './assets/css/custom.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './routers';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
