import React from "react";

export const CajaVideosTitulos = () => {
  return (
    <div className="titulos h-full px-2 lg:w-[60%] xs:w-full whitespace-nowrap">
      <div className="border border-[--borderOpacity] border-dashed  p-2 rounded-xl w-full h-full">
        <div className="border border-[--borderOpacity] rounded-xl w-full h-full flex justify-center items-center">
          <div className="w-4/5">
            <div className="titleBox w-full flex justify-center items-center">
              <h3 className="text-start lg:text-5xl xs:text-4xl">
                Detrás de la <br />
                emotiva producción <br />
                Amigos del Alma.
                <figure className="w-full mx-auto my-6">
                  <svg
                    id="uuid-a71b0a1e-de76-4da8-809a-02fb9fedb1f3"
                    data-name="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 456.58 27.18"
                  >
                    <g
                      id="uuid-cbe2be71-87a3-4b52-ba54-c722af1b2208"
                      data-name="Capa_1"
                    >
                      <path
                        d="M.25.25h141.9c1.92,0,3.48,1.55,3.5,3.47l.18,19.73c.03,3.25,4.09,4.71,6.18,2.22l19.51-23.26c.67-.79,1.65-1.25,2.68-1.25h282.12"
                        style={{
                          fill: "none",
                          stroke: "#ddc7b8",
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                          strokeWidth: "1px",
                        }}
                      />
                    </g>
                  </svg>
                </figure>
              </h3>
            </div>
            <p className="NeueHaas-Ligth text-center lg:text-sm xs:text-xs text-[--tercero]">
              Hay historias de vida que nos inspiraron y{" "}
              <br className="lg:hidden" />
              que deberías conocer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
