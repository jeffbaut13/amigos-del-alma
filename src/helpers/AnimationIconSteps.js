import gsap from "gsap";

const animationIcons = (a, b, c, up, down, isTrue) => {
  gsap.to(a, {
    top: up ? b : "",
    bottom: down ? b : "",
    left: c,
    ease: "power1.inOut",
    duration: 0.5,
    opacity: isTrue ? 0 : 1,
  });
};

export const animaitionsGroup = (currentSlide) => {
  animationIcons(".circuloUno", "0%", "0%", true, false);
  if (currentSlide == 1) {
    animationIcons(".circuloDos", "0%", "30%", true, false);
    animationIcons(".circuloTres", "0%", "60%", true, false);
    animationIcons(".circuloCuatro", "0%", "30%", true, false, true);
    animationIcons(".circuloCinco", "0%", "0%", false, true, true);
    animationIcons(".circuloSeis", "0%", "100%", false, true);
  }
  if (currentSlide == 2) {
    animationIcons(".circuloDos", "0%", "30%", true, false);
    animationIcons(".circuloTres", "0%", "60%", true, false);
    animationIcons(".circuloCuatro", "0%", "60%", false, true, true);
    animationIcons(".circuloCinco", "0%", "0%", false, true);
    animationIcons(".circuloSeis", "0%", "100%", false, true);
  }
  if (currentSlide == 3) {
    animationIcons(".circuloDos", "0%", "65%", true, false);
    animationIcons(".circuloTres", "0%", "100%", true, false);
    animationIcons(".circuloCuatro", "0%", "40%", true, false);
    animationIcons(".circuloCinco", "0%", "0%", false, true, true);
    animationIcons(".circuloSeis", "0%", "140%", false, true);
  }
  if (currentSlide == 4) {
    animationIcons(".circuloDos", "0%", "65%", true, false);
    animationIcons(".circuloTres", "0%", "100%", true, false);
    animationIcons(".circuloCuatro", "0%", "40%", true, false);
    animationIcons(".circuloCinco", "0%", "40%", false, true);
    animationIcons(".circuloSeis", "0%", "140%", false, true);
  }
  if (currentSlide == 5) {
    animationIcons(".circuloDos", "0%", "25%", true, false);
    animationIcons(".circuloTres", "0%", "55%", true, false);
    animationIcons(".circuloCuatro", "0%", "40%", true, false, true);
    animationIcons(".circuloCinco", "0%", "50%", false, true);
    animationIcons(".circuloSeis", "0%", "100%", false, true);
  }
};
