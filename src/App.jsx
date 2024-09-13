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
          content="Nueva campaña de Inter Rapidísimo para Amor y Amistad que cuenta la noble historia de Toño, el perrito y Alejo, el pianista, dos compañeros unidos por la vida, que nos demuestran que la entrega y fidelidad se entregan desde el corazón.
"
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
