import React from "react";

const links = [
  { name: "COMERCIAL", url: "#comercial", position: 1 },
  { name: "COMPRA EL COLLAR", url: "#comprar", position: 2 },
  { name: "DETRÁS DE CÁMARAS", url: "#detras", position: 3 },
  { name: "COMPARTE", url: "#compartir", position: 4 },
];
export const LinkRouter = ({ setActive }) => {
  return (
    <div className="AddingtonCF-thin z-[200] menuLink fixed top-0 left-0 w-full h-full bg-black flex justify-evenly items-center">
      <ul className="w-full h-2/4 flex flex-col justify-evenly items-center">
        {links.map((link) => (
          <li
            className="group py-2 relative w-2/5 text-center "
            onClick={() => setActive(false)}
          >
            <span className="absolute h-[1px] left-0 bottom-0 w-0 group-hover:w-full  bg-[#E1C149] transition-all ease-in-out duration-500" />
            <span className="text-[--bg-clar] group-hover:text-[#E1C149] absolute left-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000">
              0{link.position}
            </span>
            <a
              className="text-[--bg-clar] group-hover:text-[#E1C149]"
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
