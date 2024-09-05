import gsap from "gsap";

export const handleGsasp = (activeBox, funcion) => {
  const tl = gsap.timeline();
  const time = 1;
  const easeEffect = "power4.inOut";

  tl.fromTo(
    ".titulos",
    {
      transform: "translate3d(0vw, 0vw, 0px)",
      //opacity: 1,
      width: "60%",
    },
    {
      transform: "translate3d(66vw, 0vw, 0px)",
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

  if (activeBox === "firstVideo") {
    tl.to(
      ".firstVideo",
      {
        top: "0%",
        bottom: "50%",
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
        left: "0%",
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

  tl.fromTo(
    ".cajaTitulos",
    {
      bottom: "2rem",
      opacity: 0,
    },
    {
      position: "relative",
      bottom: "0rem%",
      height: "20%",
      ease: easeEffect,
      opacity: 1,
      duration: time,
    },
    "<+=0.5"
  );
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
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
    "<-=1"
  );

  tl.add(() => funcion());
};
