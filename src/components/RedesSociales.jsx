import React from "react";
import backgroundImage from "/imagenes/making.jpg";

export const RedesSociales = () => {
  return (
    <div className=" moires h-screen w-full relative flex items-center justify-center px-40 ">
      <div className="flex flex-col items-center h-2/3 w-[70%] relative border border-[--second] px-40 py-16 border-dashed rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-video z-10" />
        <figure className="w-full h-full absolute inline-block p-2">
          <img
            className="object-cover"
            src="/imagenes/redes-sociales.webp"
            alt=""
          />
        </figure>
        <div className="h-full flex z-10 relative">
          <h2 className="text-[--colorYellow] text-lg text-center">
            ¿tienes un amigo que debería <br />
            conocer esta historia
            <span className="rotate-180 inline-block -translate-x-1">¿</span>
          </h2>
        </div>
        <div className="flex w-full flex-col h-24 z-10">
          <h2 className="w-full text-[--colorYellow] text-sm text-center">
            compártele este contenido aquí
          </h2>
          <div className="w-full flex mt-8 justify-around">
            <button className="group btn-home w-32 text-xs flex items-center justify-center ">
              <span className="w-6 h-6 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 40.59 40.02"
                >
                  <g>
                    <g id="Capa_1">
                      <g>
                        <path
                          style={{ fillRule: "evenodd" }}
                          className=" fill-[--primary] group-hover:fill-[--second]"
                          d="M28.42,14.28c-6.54-.39-5.32,2.22-5.38,6.39,1.37,0,4.34,0,5.16,0-.33,2.11-.76,4.89-.83,5.35-1.55,0-2.98.01-4.32.02.01,4.32.05,8.68-.01,13-.6.07-2.37.12-2.72.12-1.02-.03-2.42-.08-3.16-.13,0-2.32.09-10.85.08-13.01-1.16,0-3.23.01-4.72,0,0-1.09-.02-3.47,0-5.36.85-.02,3.75,0,4.73-.03,0-1.21,0-2.38-.01-3.92-.01-5.42,3.53-8.53,11.19-6.99,0,1.28,0,3.61,0,4.56h0Z"
                        />
                        <path
                          style={{ strokeMiterlimit: 10 }}
                          className="fill-none stroke-[--primary] group-hover:stroke-[--second] "
                          d="M.95,19.98c.09,10.68,8.82,19.38,19.54,19.26,10.56.04,19.65-9.49,19.04-20.11C39.06,9.02,30.7.8,20.53.64,10.04.49,1.1,8.83.95,19.98h0Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>
            <button className="group btn-home w-32 text-xs flex items-center justify-center ">
              <span className="w-6 h-6 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 41 40.11"
                >
                  <g>
                    <g id="Capa_1">
                      <g>
                        <path
                          style={{ fillRule: "evenodd" }}
                          className=" fill-[--primary] group-hover:fill-[--second]"
                          d="M23.07,30.59c-2.6,0-5.16.05-7.78-.05-1.41-.05-2.88-.22-3.85-.92-1.77-1.26-1.97-2.99-2.04-5.08-.08-2.22-.03-4.87-.04-7.12,0-1.67-.04-4.09.79-5.52.86-1.48,2.24-2.08,3.91-2.25,2.3-.24,11.52-.37,13.44.39,1.01.4,1.88,1.18,2.33,2.17.76,1.68.62,4.35.63,6.2,0,2.12.05,5.62-.1,7.32-.14,1.51-.56,2.64-1.53,3.51-.59.53-1.18.82-2,1.03-1.01.26-2.64.3-3.74.3h0ZM16.54,7.25c-2.66.05-4.77.09-6.77,1.64-.81.63-1.53,1.57-1.94,2.51-.74,1.72-.75,3.63-.77,5.66-.02,2.15-.11,7.37.16,9.43.32,2.47,1.63,4.65,3.99,5.65,1.74.74,3.61.75,5.66.77,2.13.03,4.31.05,6.44,0,2.7-.06,4.99-.13,6.98-1.83.15-.13.31-.26.43-.4,1.99-2.17,2.03-4.55,2.06-7.57.03-2.11.1-7.43-.17-9.46-.16-1.16-.61-2.61-1.31-3.5-.78-.99-1.52-1.61-2.69-2.15-1.6-.73-3.77-.75-5.68-.77-2.11-.03-4.28-.04-6.38,0h0ZM19.7,15.81c2.34-.17,4.34,1.72,4.49,4.03.16,2.34-1.68,4.38-4.03,4.51-1.74.1-3.31-.83-4.09-2.35-1.31-2.54.27-5.96,3.62-6.2h0ZM19.55,13.5c-3.65.22-6.45,3.3-6.24,6.97.22,3.62,3.34,6.42,7,6.19,1.6-.1,2.86-.68,4.05-1.72,1.44-1.29,2.27-3.21,2.15-5.26-.21-3.58-3.32-6.41-6.95-6.19h0ZM26.6,11.69c-.84.11-1.46.87-1.35,1.72.1.79.8,1.45,1.73,1.34.8-.1,1.46-.79,1.34-1.72-.1-.78-.8-1.46-1.71-1.34h0Z"
                        />
                        <path
                          style={{ strokeMiterlimit: 10 }}
                          className="fill-none stroke-[--primary] group-hover:stroke-[--second] "
                          d="M.63,20.11c.09,10.68,8.82,19.38,19.54,19.26,10.56.04,19.65-9.49,19.04-20.11C38.75,9.15,30.38.93,20.21.77,9.73.62.79,8.96.63,20.11h0Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>
            <button className="group btn-home w-32 text-xs flex items-center justify-center ">
              <span className="w-6 h-6 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 40.23 40.17"
                >
                  <g>
                    <g id="Capa_1">
                      <g>
                        <path
                          style={{ fillRule: "evenodd" }}
                          className=" fill-[--primary] group-hover:fill-[--second]"
                          d="M11.3,28.99c.08-.62.59-2.21.81-2.98.15-.53.11-.54-.13-.93-1.49-2.36-1.84-5.4-.92-8.1,1.26-3.7,4.64-6.24,8.53-6.45,4-.22,7.63,2.05,9.27,5.68,1.15,2.55,1.07,5.67-.21,8.15-.82,1.59-2.09,2.94-3.62,3.87-2.97,1.81-6.78,1.87-9.78.06-.45-.27-.46-.19-.97-.05-.33.09-.65.17-.98.25-.45.12-1.63.44-2,.51h0ZM8.54,31.73c1.46-.24,3.38-.86,4.86-1.26,1.53-.41,1.04-.33,2.31.21,3.56,1.52,7.81.98,10.94-1.16,2.92-2.18,4.77-5.14,4.95-8.87.2-4.09-1.71-7.87-5.11-10.16-6.46-4.34-15.25-1.03-17.42,6.32-.71,2.41-.61,5.5.48,7.81.08.18.16.34.25.52.42.81.36.57.04,1.74-.18.64-1.24,4.28-1.3,4.84h0ZM16.17,14.75c-.85.07-1.39.73-1.66,1.46-.5,1.34-.16,2.53.54,3.67.51.84.76,1.11,1.31,1.79,1.12,1.41,2.78,2.64,4.44,3.32.74.3,1.59.63,2.52.59,2.32-.11,2.92-2.27,2.56-2.73-.39-.49-1.91-1.13-2.6-1.29-.32-.08-.41-.08-.58.11-.18.2-.19.22-.33.46-.17.28-.43.7-.76.79-.5.12-1.81-.78-2.1-.99-.47-.34-1.06-.82-1.41-1.3-.25-.34-.57-.7-.79-1.16-.25-.53.26-.55.77-1.42.12-.21.14-.37.05-.63-.24-.7-.63-1.48-.94-2.17-.11-.25-.1-.35-.35-.44-.2-.07-.45-.08-.67-.07h0Z"
                        />
                        <path
                          style={{ strokeMiterlimit: 10 }}
                          className="fill-none stroke-[--primary] group-hover:stroke-[--second] "
                          d="M.77,20.19c.09,10.68,8.82,19.38,19.54,19.26,10.56.04,19.65-9.49,19.04-20.11C38.89,9.23,30.52,1.01,20.35.85,9.87.7.93,9.03.77,20.19h0Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
