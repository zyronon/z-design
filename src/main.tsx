import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import './index.css'
import Design from "./pages/design";
import ErrorPage from "./pages/error";
import Test from "./pages/test";

const router = createBrowserRouter([
  {path: "/", element: <Navigate to="/design"/>},
  {path: "/design", element: <Design/>},
  {path: "/test", element: <Test/>},
  {path: "*", element: <ErrorPage/>},
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
