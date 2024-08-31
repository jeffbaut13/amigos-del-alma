import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import Onboarding from "./paginas/Onboarding";
import Collage from "./paginas/Collage";
import { Campaña } from "./paginas/Campaña";
import { ErrorPage } from "./ErrorPage";
import { Administrador } from "./paginas/Administrador";
import { Gracias } from "./paginas/Gracias";
import { Layout } from "./Layout";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ScrollToTopOnRouteChange />
        <Onboarding />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/collage",
    element: (
      <Layout>
        <ScrollToTopOnRouteChange />
        <Collage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/campana-amigos-del-alma",
    element: (
      <Layout>
        <ScrollToTopOnRouteChange />
        <Campaña />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/administrador",
    element: (
      <Layout>
        <ScrollToTopOnRouteChange />
        <Administrador />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/gracias",
    element: (
      <Layout>
        <ScrollToTopOnRouteChange />
        <Gracias />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
