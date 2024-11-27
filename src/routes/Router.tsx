import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
  },
]);
