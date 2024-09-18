import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const BotonCompra = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Si el valor no es nulo, el captcha está verificado
  };

  const handleClick = () => {
    alert("Pasando al pago...");
  };

  return (
    <>
      <label className="flex items-center gap-4 lg:w-3/4 xs:w-[90%]">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isAccepted}
          className="w-16 h-16 inline-block"
        />
        <span className="text-black NeueHaas-Ligth lg:text-[0.6rem] xs:text-xs">
          Autorizo el tratamiento de mis datos personales para la finalidad
          descrita en la{" "}
          <a
            href="https://www.interrapidisimo.com/proteccion-de-datos-personales/"
            className="text-black"
          >
            <strong className="NeueHaas-Medium">
              Política de tratamiento de datos Personales
            </strong>
          </a>
          de Inter Rapidísimo.
        </span>
      </label>
      <ReCAPTCHA
        className="lg:my-4 xs:my-2"
        sitekey="6LfzPkgqAAAAAAr0swKl0883weytfpI5QR0iFVot"
        onChange={handleCaptchaChange}
      />
      <button
        onClick={handleClick}
        disabled={!isAccepted || !captchaVerified}
        className={
          isAccepted && captchaVerified
            ? "enabled opacity-100"
            : "disabled opacity-35"
        }
      >
        Ir a pagar
      </button>
    </>
  );
};

export default BotonCompra;
