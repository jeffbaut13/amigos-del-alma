import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import Onboarding from "./paginas/Onboarding";
import Collage from "./paginas/Collage";
import { Campaña } from "./paginas/Campaña";
import { ErrorPage } from "./ErrorPage";
import { Administrador } from "./paginas/Administrador";
import { Gracias } from "./paginas/Gracias";
import { Layout } from "./Layout";
import { Home } from "./paginas/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout>
          <Home />
        </Layout>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/collage",
    element: (
      <Layout>
        <Collage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/comprar-dije",
    element: (
      <Layout>
        <Campaña />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/administrador",
    element: (
      <Layout>
        <Administrador />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/gracias",
    element: (
      <Layout>
        <Gracias />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
