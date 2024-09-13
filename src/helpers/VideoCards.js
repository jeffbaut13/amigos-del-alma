import gsap from "gsap";
import { full, laptop, minilaptop, mobile, tablet } from "./Medidas";

const destopk = full || minilaptop || laptop;

export const handleGsasp = (activeBox, funcion) => {
  const tl = gsap.timeline();
  const time = 1;
  const easeEffect = "power4.inOut";

  if (destopk) {
    tl.fromTo(
      ".titulos",
      {
        transform: "translate3d(0vw, 0vw, 0px)",
        //opacity: 1,
        width: "60%",
      },
      {
        transform: "translate3d(95vw, 0vw, 0px)",
        //opacity: 0,
        width: "0%",
        ease: easeEffect,
        duration: time,
      }
    );
    tl.fromTo(
      ".videos",
      {
        width: "40%",
        left: "0%",
        translateX: "0%",
      },
      {
        width: "70%",
        left: "50%",
        translateX: "-50%",
        ease: easeEffect,
        duration: time,
      },
      "<  "
    );
    gsap.fromTo(
      ".videoCajas",
      {
        height: "100%",
      },
      {
        height: "80%",
        ease: easeEffect,
        //opacity: 0,
        duration: time,
      }
    ),
      "<";
  }
  if (mobile || tablet) {
    tl.fromTo(
      ".titulos",
      {
        transform: "translate3d(0vw, 0vw, 0px)",
        //opacity: 1,

        height: "50%",
      },
      {
        transform: "translate3d(95vw, 0vw, 0px)",
        //opacity: 0,

        height: "0%",
        ease: easeEffect,
        duration: time,
      }
    );
    tl.fromTo(
      ".videos",
      {
        width: "100%",
        height: "50%",
        left: "0%",
        translateX: "0%",
      },
      {
        width: "100%",
        height: "100%",
        left: "50%",
        translateX: "-50%",
        ease: easeEffect,
        duration: time,
      },
      "<  "
    );
    gsap.fromTo(
      ".videoCajas",
      {
        height: "100%",
      },
      {
        height: "50%",
        ease: easeEffect,
        //opacity: 0,
        duration: time,
      }
    ),
      "<";
  }

  if (activeBox === "firstVideo") {
    tl.to(
      ".firstVideo",
      {
        height: "100%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
    gsap.to(".secondVideo", {
      transform: "translate3d(-100vw, 0, 0px)",

      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".thirtVideo", {
      transform: "translate3d(0, -100vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }

  if (activeBox === "secondVideo") {
    tl.to(
      ".secondVideo",
      {
        width: "100%",
        height: "100%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );

    gsap.to(".thirtVideo", {
      transform: "translate3d(0, -100vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".firstVideo", {
      transform: "translate3d(0vw, 100vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }

  if (activeBox === "thirtVideo") {
    tl.to(
      ".thirtVideo",
      {
        width: "100%",
        height: "100%",

        ease: easeEffect,
        duration: time,
      },
      "<"
    );

    gsap.to(".secondVideo", {
      transform: "translate3d(-100vw, 0, 0px)",

      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".firstVideo", {
      transform: "translate3d(0vw, 100vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }
  if (destopk) {
    tl.fromTo(
      ".cajaTitulos",
      {
        bottom: "2rem",
        opacity: 0,
      },
      {
        position: "relative",
        bottom: "0rem",
        height: "20%",
        ease: easeEffect,
        opacity: 1,
        duration: time,
      },
      "<+=0.5"
    );
  }
  if (mobile || tablet) {
    tl.fromTo(
      ".cajaTitulos",
      {
        bottom: "2rem",
        opacity: 0,
      },
      {
        position: "relative",
        bottom: "0rem",
        height: "50%",
        ease: easeEffect,
        opacity: 1,
        duration: time,
      },
      "<+=0.5"
    );
  }
  tl.to(
    ".contenidoCard ",
    {
      display: "inline-block",
    },
    "<"
  );
  tl.to(
    `.${activeBox} br`,
    {
      display: "none",
    },
    "<-=1"
  );
  tl.to(
    `.titleCard`,
    {
      textAlign: "center",
      width: "50%",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    "<-=1"
  );

  tl.add(() => funcion());
};

export const resetAnimation = (activeBox) => {
  const tl = gsap.timeline();
  const time = 1;
  const easeEffect = "power4.inOut";

  tl.to(
    ".cajaTitulos",

    {
      bottom: "1rem",
      ease: easeEffect,
      opacity: 0,
      duration: time,
    }
  );

  if (destopk) {
    tl.to(
      ".titulos",
      {
        transform: "translate3d(0vw, 0vw, 0px)",
        //opacity: 1,
        width: "60%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
    tl.to(
      ".videos",
      {
        width: "40%",
        left: "0%",
        translateX: "0%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
  }
  if (mobile || tablet) {
    tl.to(
      ".titulos",
      {
        transform: "translate3d(0vw, 0vw, 0px)",
        //opacity: 1,
        width: "100%",
        height: "50%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
    tl.to(
      ".videos",
      {
        width: "100%",
        height: "50%",
        left: "0%",
        translateX: "0%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
  }

  gsap.to(
    ".videoCajas",
    {
      height: "100%",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    },
    "<"
  );

  if (activeBox === "secondVideo") {
    tl.fromTo(
      ".secondVideo",
      {
        height: "100%",
        width: "100%",
      },
      {
        height: "49.5%",
        width: "49.5%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );

    gsap.to(".thirtVideo", {
      transform: "translate3d(0, 0vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".firstVideo", {
      transform: "translate3d(0vw, 0vh, 0px) ",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }
  if (activeBox === "thirtVideo") {
    tl.fromTo(
      ".thirtVideo",
      {
        height: "100%",

        width: "100%",
      },
      {
        height: "49.5%",

        width: "49.5%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );

    gsap.to(".secondVideo", {
      transform: "translate3d(0, 0vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".firstVideo", {
      transform: "translate3d(0vw, 0vh, 0px) ",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }
  if (activeBox === "firstVideo") {
    tl.fromTo(
      ".firstVideo",
      {
        height: "100%",
      },
      {
        //height: "49.5%",
        height: "100%",
        ease: easeEffect,
        duration: time,
      },
      "<"
    );
    gsap.to(".secondVideo", {
      transform: "translate3d(0vw, 0, 0px)",

      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
    gsap.to(".thirtVideo", {
      transform: "translate3d(0, 0vh, 0px)",
      ease: easeEffect,
      //opacity: 0,
      duration: time,
    });
  }
  tl.to(
    ".contenidoCard ",
    {
      display: "none",
    },
    "<"
  );
  tl.to(
    ".cajaTitulos",
    {
      position: "absolute",
      height: "20%",
    },
    "<"
  );

  tl.to(`.titleCard`, {
    textAlign: "start",
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  });
  tl.to(`.${activeBox} br`, {
    display: "block",
  });

  tl.to(
    ".cajaTitulos",
    {
      bottom: "1rem",
      opacity: 1,
    },
    "<"
  );
};
