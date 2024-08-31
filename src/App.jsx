import React from "react";
import "./index.css";

import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Amigos del alma</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="Campaña interrapidisimo amigos del alma dia amor y amistad"
        />
      </Helmet>

      <React.StrictMode>
        {/* Asegúrate de que RouterProvider envuelva todo */}
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
