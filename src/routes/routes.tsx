import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
