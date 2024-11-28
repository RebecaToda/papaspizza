import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Registro from "../pages/Registro/Registro";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);
