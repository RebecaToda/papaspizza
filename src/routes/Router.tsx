import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Registro from "../pages/Registro/Registro";
import Pizza from "../pages/Registro/itens/Pizza/pizza";
import Bebida from "../pages/Registro/itens/Bebida/bebida";

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
    path: "/registro/bebida",
    element: <Bebida />,
  },

  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);
