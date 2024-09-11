import gsap from "gsap";
import { full, laptop, minilaptop, mobile, tablet } from "./Medidas";

const destopk = full || minilaptop || laptop;

export const AnimationMarketing = (abrirDije, dijeCanvaRef) => {
  const easeAnim = "power1.inOut";
  const time = 0.3;
  const tl = gsap.timeline();

  if (abrirDije) {
    gsap.to(".BlurBack", {
      opacity: 1,
      ease: easeAnim,
      duration: time,
    });
    tl.fromTo(
      dijeCanvaRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: easeAnim,
        duration: 0.5,
      }
    );
    if (mobile || tablet) {
      tl.to(".contaiMarket", {
        width: "100%",
        ease: easeAnim,
        duration: time,
      });
      tl.to(
        ".containMarket_child",
        {
          height: "85%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
    }
    if (destopk) {
      tl.fromTo(
        ".textoMarket",
        {
          width: "25%",
        },
        {
          width: "0%",
          ease: easeAnim,
          duration: time,
        }
      );

      tl.fromTo(
        ".btnMarket",
        {
          width: "50%",
        },
        {
          width: "0%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
      tl.fromTo(
        ".dijeMarket",
        {
          width: "25%",
        },
        {
          width: "100%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".cardDije",
        {
          width: "0%",
        },
        {
          width: "50%",
          ease: easeAnim,
          duration: time,
        }
      );

      tl.fromTo(
        ".dijeCanva",
        { width: "100%", height: "100%" },
        {
          width: "50%",
          height: "100%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
    }

    if (mobile || tablet) {
      tl.fromTo(
        ".textoMarket",
        {
          height: "50%",
        },
        {
          height: "0%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".dijeMarket",
        {
          height: "50%",
        },
        {
          height: "100%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".cardDije",
        {
          height: "0%",
        },
        {
          height: "50%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".dijeCanva",
        { width: "100%", height: "100%" },
        {
          height: "50%",
          width: "100%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
    }

    tl.to(
      dijeCanvaRef.current,

      {
        opacity: 1,
        ease: easeAnim,
        duration: time,
      },
      ">+=0.5"
    );
    tl.fromTo(
      ".cardDije",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: easeAnim,
        duration: time,
      },
      "<+=0.3"
    );
    gsap.to(".closeCard", {
      display: "inline-block",
      delay: 2.5,
    });
  } else if (abrirDije == false) {
    gsap.to(".BlurBack", {
      opacity: 0,
      ease: easeAnim,
      duration: time,
      delay: 0.8,
    });

    tl.to(
      dijeCanvaRef.current,

      {
        opacity: 0,
        ease: easeAnim,
        duration: time,
      }
    );

    if (mobile || tablet) {
      tl.to(".contaiMarket", {
        width: "80%",
        ease: easeAnim,
        duration: time,
      });
      tl.to(
        ".containMarket_child",
        {
          height: "80%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
    }

    if (destopk) {
      tl.to(".dijeCanva", { width: "100%", height: "100%" });
      tl.to(
        ".cardDije",
        {
          width: "0%",
        },
        "<"
      );

      tl.to(".dijeMarket", {
        width: "25%",
      });

      tl.to(".btnMarket", {
        width: "50%",
      });
      tl.to(
        ".textoMarket",
        {
          width: "25%",
        },
        "<"
      );
    }
    if (mobile || tablet) {
      tl.to(".dijeCanva", { width: "100%", height: "100%" });
      tl.to(
        ".cardDije",
        {
          height: "0%",
        },
        "<"
      );
      tl.to(".dijeMarket", {
        height: "50%",
      });
      tl.to(".btnMarket", {
        height: "50%",
      });
      tl.to(
        ".textoMarket",
        {
          height: "50%",
        },
        "<"
      );
    }

    tl.to(dijeCanvaRef.current, {
      opacity: 1,
    });
    gsap.to(".closeCard", {
      display: "none",
    });
  }
};
