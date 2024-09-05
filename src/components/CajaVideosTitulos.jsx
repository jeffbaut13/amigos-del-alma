import React from "react";

export const CajaVideosTitulos = () => {
  return (
    <div className="titulos h-full px-2 w-[60%]  whitespace-nowrap">
      <div className="border border-[--second] border-dashed  p-2 rounded-xl w-full h-full">
        <div className="border border-[--second] rounded-xl w-full h-full flex justify-center items-center">
          <div className="w-4/5">
            <h3 className="uppercase  text-center moires text-5xl">
              Detrás <br />
              de la emotiva <br /> producción <br /> amigos del alma.
              <figure className="w-[85%] mx-auto my-6">
                <svg
                  id="uuid-8e4034d7-59df-41ec-bec8-16573a19c1cf"
                  data-name="Capa 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 607.66 27.6"
                >
                  <g
                    id="uuid-1857a6df-aee0-40b2-9d05-248e1d04ae1f"
                    data-name="Capa 1"
                  >
                    <path
                      className="stroke-[--second]"
                      d="m0,.5h284.94c1.69,0,3.06,1.37,3.06,3.06v19.86c0,3.42,4.26,4.99,6.48,2.38l19.55-23.05c.66-.78,1.63-1.23,2.65-1.23h290.99"
                      style={{
                        fill: "none",
                        strokeMiterlimit: 10,
                        strokeWidth: "0.5px",
                      }}
                    />
                  </g>
                </svg>
              </figure>
            </h3>
            <p className="text-center">
              hay historias de vida que nos inspiraron <br />y que deberías
              conocer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
