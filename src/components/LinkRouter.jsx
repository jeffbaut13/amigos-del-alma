import React from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "Comercial", url: "#comercial", position: 1 },
  { name: "Compra el collar", url: "#comprar", position: 2 },
  { name: "Detrás de cámaras", url: "#detras", position: 3 },
  { name: "Comparte", url: "#compartir", position: 4 },
];

export const LinkRouter = ({ setActive }) => {
  const navigate = useNavigate();

  const handleClick = (hash) => {
    setActive(false);

    if (window.location.pathname === "/") {
      window.location.hash = hash;

      // Delay para asegurar que el hash esté aplicado antes de hacer el scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Navega al home y añade el hash
      navigate(`/${hash}`);

      // Delay para asegurar que el DOM del home está cargado antes de intentar hacer scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Ajusta este valor si es necesario para darle más tiempo al DOM para cargar
    }
  };

  return (
    <div className="   z-[200] menuLink fixed top-0 left-0 w-full h-full bg-black flex justify-evenly items-center">
      <ul className="w-full h-2/4 flex flex-col justify-evenly items-center">
        {links.map((link) => (
          <li
            key={link.position}
            className="cursor-pointer group py-2 relative w-2/5 text-center"
            onClick={() => handleClick(link.url)}
          >
            <span className="absolute h-[1px] left-0 bottom-0 w-0 group-hover:w-full bg-[#E1C149] transition-all ease-in-out duration-500" />
            <span className="AddingtonCF-thin text-[--second] absolute left-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000">
              0{link.position}
            </span>
            <span className="text-[--second] group-hover:text-[#e1c149]">
              {link.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
