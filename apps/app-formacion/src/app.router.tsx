import React from "react";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import AppLayout from "./app.layout";
import Inicio from "./pages/inicio/inicio";
import { PageNotFound } from "./pages/shared/page-not-found";

const Routes = {
  "/": { relativePath: "/" },
  inicio: { relativePath: "/inicio" },
};

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.inicio.relativePath} replace />,
      },
      {
        path: Routes.inicio.relativePath,
        element: <Inicio />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
