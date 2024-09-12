import { proxy } from "valtio";

const Dije = proxy({
  rotation: 0.003,
  usuario: "",
  email: "",
  contacto: "",
  nombre: "TOÑO",
  Imagen: "/file2.jpg",
  promoid: "amigoalma",
  readyVideo: false,
  nameDog: {
    rotation: [0, 0, 0],
    position: [0, -0.5, 0],
    zoom: 2,
  },
  reset: {
    //position: [-0.5, -1, 5],
    position: [0, -0.5, 0],
    rotation: [0, 0.4, 0.2],
    zoom: 1,
  },
  home: {
    position: [0, -0.6, 0],
    rotation: [0, 0, 0],
    zoom: 1,
  },
  back: {
    rotation: [0, -3.5, 0],
    position: [0, -0.1, 0],
    zoom: 2,
  },
  EditImage: {
    rotation: [0, 0, 0],
    position: [0, -1.5, 0],
    zoom: 2,
  },
  fontSize: 0.175,
  braile: "⠝ ⠕ ⠍ ⠃⠗ ⠑",

  imageWidth: 1,
  imageHeight: 1,
  imagePositionX: 0,
  imagePositionY: 0,
  iconDije: false,
});

export default Dije;
