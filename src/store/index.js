import { proxy } from "valtio";

const Dije = proxy({
  rotation: 0.003,
  contacto: "",
  nameDog: {
    position: [1.5, 0, 3.5],
  },
  reset: {
    position: [-0.5, -1, 5],
  },
  back: {
    position: [-1.5, 0, -3],
  },
  fontSize: 0.175,
  nombre: "NOMBRE",
  braile: "⠝ ⠕ ⠍ ⠃⠗ ⠑",

  Imagen: "/file2.jpg",
  imageWidth: 1,
  imageHeight: 1,
  imagePositionX: 0,
  imagePositionY: 0,
});

export default Dije;
