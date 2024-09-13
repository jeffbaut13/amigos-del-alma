import React from "react";
import { TwitterShareButton, WhatsappShareButton } from "react-share";

export const RedesSociales = () => {
  const texto = {
    texto:
      "En Amigos del Alma puedes personalizar y comprar el mismo collar de Toño y Alejo. Conoce esta historia y todo lo que hay detrás de ella en:",
    url: "https://amigodelalma.com/",
  };

  const compartirConWebShareAPI = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Compartir",
          text: texto.texto + " " + texto.url,
        })
        .then(() => console.log("Contenido compartido exitosamente"))
        .catch((error) => console.error("Error al compartir:", error));
    } else {
      console.log(
        "Web Share API no soportada, usando la biblioteca react-share."
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(/imagenes/redes-sociales.webp)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen w-full relative flex items-center justify-center lg:px-40 xs:px-0"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-video z-10" />
      <div className="flex items-center lg:h-2/3 xs:h-1/2 w-[80%] relative border border-[--borderOpacity] p-2 border-dashed rounded-xl overflow-hidden">
        <div className="border border-[--borderOpacity] w-full h-full flex flex-col items-center justify-evenly bg-black bg-opacity-30 rounded-xl">
          <div className="flex flex-col justify-center items-center z-10 relative">
            <figure className="lg:w-80 xs:w-80 mb-8">
              <img src="/iconos/TituloCentrado.svg" alt="Título" />
            </figure>
            <h2 className="text-[--colorYellow] text-xl mt-8 text-center">
              ¿Tienes un amigo que debería <br />
              conocer esta historia?
            </h2>
          </div>
          <div className="flex w-full flex-col z-10">
            <h2 className="w-full NeueHaas-Ligth text-center text-xs text-[--tercero]">
              Compártele este contenido aquí
            </h2>
            <div className="w-full flex flex-col mt-8 justify-around items-center gap-2">
              <button
                onClick={() => {
                  compartirConWebShareAPI();
                }}
                className="group btn-home w-28 py-1 flex items-center justify-center transition-all duration-300"
              >
                <span className="w-6 h-6 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 41 42"
                  >
                    <g>
                      <g id="Capa_1">
                        <g>
                          <path
                            style={{ fillRule: "evenodd" }}
                            className=" fill-[--primary]"
                            d="M28.42,14.28c-6.54-.39-5.32,2.22-5.38,6.39,1.37,0,4.34,0,5.16,0-.33,2.11-.76,4.89-.83,5.35-1.55,0-2.98.01-4.32.02.01,4.32.05,8.68-.01,13-.6.07-2.37.12-2.72.12-1.02-.03-2.42-.08-3.16-.13,0-2.32.09-10.85.08-13.01-1.16,0-3.23.01-4.72,0,0-1.09-.02-3.47,0-5.36.85-.02,3.75,0,4.73-.03,0-1.21,0-2.38-.01-3.92-.01-5.42,3.53-8.53,11.19-6.99,0,1.28,0,3.61,0,4.56h0Z"
                          />
                          <path
                            style={{ strokeMiterlimit: 10 }}
                            className="fill-none stroke-[--primary]"
                            d="M.95,19.98c.09,10.68,8.82,19.38,19.54,19.26,10.56.04,19.65-9.49,19.04-20.11C39.06,9.02,30.7.8,20.53.64,10.04.49,1.1,8.83.95,19.98h0Z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
              <TwitterShareButton title={texto.texto} url={texto.url}>
                <span className="group btn-home w-28 py-1 my-3 flex items-center justify-center transition-all duration-300 rounded-full">
                  <span className="w-6 h-6 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 45.7 45.7"
                    >
                      <g id="uuid-1820ef8c-e06a-4ba4-99bb-b6b902a92245">
                        <g id="uuid-ae8199f1-8ae9-48a4-be76-d671c7ce96b2">
                          <path
                            class="fill-black"
                            d="M25.4,21l10.1-10.8h-2.5l-8.7,9.3-7-9.3h-7.8l10.4,14-10.5,11.3h2.5l9.1-9.8,7.3,9.8h7.8l-10.8-14.4h0ZM22.4,24.3l-1.1-1.5-8.1-10.8h3.3l6.6,8.9,1.1,1.5,8.4,11.3h-3.3l-7-9.3h0Z"
                          />
                        </g>
                        <circle
                          class="fill-none stroke-black"
                          style={{ strokeMiterlimit: 10, strokeWidth: "1px" }}
                          cx="22.8"
                          cy="22.8"
                          r="22.2"
                        />
                      </g>
                    </svg>
                  </span>
                </span>
              </TwitterShareButton>

              <WhatsappShareButton title={texto.texto} url={texto.url}>
                <span className="group btn-home w-28 py-1 flex items-center justify-center transition-all duration-300 rounded-full">
                  <span className="w-6 h-6 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 41 42.5"
                    >
                      <g>
                        <g id="Capa_1">
                          <g>
                            <path
                              style={{ fillRule: "evenodd" }}
                              className=" fill-[--primary]"
                              d="M11.3,28.99c.08-.62.59-2.21.81-2.98.15-.53.11-.54-.13-.93-1.49-2.36-1.84-5.4-.92-8.1,1.26-3.7,4.64-6.24,8.53-6.45,4-.22,7.63,2.05,9.27,5.68,1.15,2.55,1.07,5.67-.21,8.15-.82,1.59-2.09,2.94-3.62,3.87-2.97,1.81-6.78,1.87-9.78.06-.45-.27-.46-.19-.97-.05-.33.09-.65.17-.98.25-.45.12-1.63.44-2,.51h0ZM8.54,31.73c1.46-.24,3.38-.86,4.86-1.26,1.53-.41,1.04-.33,2.31.21,3.56,1.52,7.81.98,10.94-1.16,2.92-2.18,4.77-5.14,4.95-8.87.2-4.09-1.71-7.87-5.11-10.16-6.46-4.34-15.25-1.03-17.42,6.32-.71,2.41-.61,5.5.48,7.81.08.18.16.34.25.52.42.81.36.57.04,1.74-.18.64-1.24,4.28-1.3,4.84h0ZM16.17,14.75c-.85.07-1.39.73-1.66,1.46-.5,1.34-.16,2.53.54,3.67.51.84.76,1.11,1.31,1.79,1.12,1.41,2.78,2.64,4.44,3.32.74.3,1.59.63,2.52.59,2.32-.11,2.92-2.27,2.56-2.73-.39-.49-1.91-1.13-2.6-1.29-.32-.08-.41-.08-.58.11-.18.2-.19.22-.33.46-.17.28-.43.7-.76.79-.5.12-1.81-.78-2.1-.99-.47-.34-1.06-.82-1.41-1.3-.25-.34-.57-.7-.79-1.16-.25-.53.26-.55.77-1.42.12-.21.14-.37.05-.63-.24-.7-.63-1.48-.94-2.17-.11-.25-.1-.35-.35-.44-.2-.07-.45-.08-.67-.07h0Z"
                            />
                            <path
                              style={{ strokeMiterlimit: 10 }}
                              className="fill-none stroke-[--primary]"
                              d="M.77,20.19c.09,10.68,8.82,19.38,19.54,19.26,10.56.04,19.65-9.49,19.04-20.11C38.89,9.23,30.52,1.01,20.35.85,9.87.7.93,9.03.77,20.19h0Z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </span>
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
