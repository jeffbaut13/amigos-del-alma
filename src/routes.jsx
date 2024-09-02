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
      <>
        <ScrollToTopOnRouteChange />
        <Home />
      </>
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
    path: "/comprar-dije",
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
