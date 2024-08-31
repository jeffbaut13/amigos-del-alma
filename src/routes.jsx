import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import Onboarding from "./paginas/Onboarding";
import Collage from "./paginas/Collage";
import { Campaña } from "./paginas/Campaña";
import { ErrorPage } from "./ErrorPage";
import { Administrador } from "./paginas/Administrador";
import { Gracias } from "./paginas/Gracias";

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
        <Onboarding />
      </>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/collage",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Collage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/campana-amigos-del-alma",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Campaña />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/administrador",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Administrador />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/gracias",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Gracias />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
