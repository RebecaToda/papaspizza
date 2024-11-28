import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Registro from "../pages/Registro/Registro";
import Pizza from "../pages/Registro/itens/Pizza/pizza";

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
    path: "/registro/pizza",
    element: <Pizza />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);
