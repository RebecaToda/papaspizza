import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Registro from "../pages/Registro/Registro";
import Pizza from "../pages/Registro/itens/Pizza/pizza";
import Bebida from "../pages/Registro/itens/Bebida/bebida";
import Pedidos from "../pages/Pedidos/Pedidos";
import Relatorios from "../pages/Relatorios/Relatorios";
import Dados from "../pages/Pedidos/Dados/Dados";

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
    path: "/pedidos",
    element: <Pedidos />,
  },
  {
    path: "/pedidos/dados",
    element: <Dados />,
  },
  {
    path: "/relatorios",
    element: <Relatorios />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);
