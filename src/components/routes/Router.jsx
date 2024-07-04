import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleChef from "../singleChef/SingleChef";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../errorPage/Error";
import Blog from "../blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <SingleChef></SingleChef>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
