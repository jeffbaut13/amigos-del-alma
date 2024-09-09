import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Collage = () => {
  const [images, setImages] = useState([
    "/imagenes/foto1.jpg",
    "/imagenes/foto2.jpg",
    "/imagenes/foto3.jpg",
    "/imagenes/foto4.jpg",
    "/imagenes/foto5.jpg",
    "/imagenes/foto6.jpg",
    "/imagenes/foto7.jpg",
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const selectedImageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadedImage = localStorage.getItem("uploadedImage");
    if (uploadedImage) {
      setImages((prevImages) => [
        ...prevImages.slice(0, 3),
        uploadedImage,
        ...prevImages.slice(3),
      ]);
      localStorage.removeItem("uploadedImage");
    }

    gsap.fromTo(
      ".collage-container",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  const getRandomPosition = () => {
    const positions = ["-50%", "0%", "25%", "50%", "75%", "100%", "150%"];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    gsap.to(selectedImageRef.current, {
      duration: 0.5,
      scale: 0.5,
      opacity: 0,
      onComplete: () => setSelectedImage(null),
    });
  };

  const handleNextClick = () => {
    gsap.to(".collage-container", {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      onComplete: () => {
        navigate("/campana-amigos-del-alma"); // Navega al componente Comercial
      },
    });
  };

  useEffect(() => {
    if (selectedImage) {
      gsap.fromTo(
        selectedImageRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedImage]);

  return (
    <div className="home relative w-full h-full overflow-hidden bg-black collage-container">
      <div className="absolute inset-0 z-10 flex flex-col text-[--colorYellow] space-y-8 items-center justify-center bg-black bg-opacity-50 pointer-events-none">
        <p>tu recuerdo se ha sumado a este gran álbum de historias</p>
        <img
          className="w-96 h-auto"
          src="/iconos/TituloCentrado.svg"
          alt="Título"
        />
      </div>

      <div className="absolute inset-0 flex overflow-hidden">
        <button
          className="border absolute bottom-28 left-1/2 transform -translate-x-1/2 border-[--colorYellow] w-44 h-10 z-10  rounded-lg  "
          onClick={handleNextClick}
        >
          siguiente
        </button>

        <div className="flex flex-nowrap space-x-8 animate-scroll relative">
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="flex-none relative w-[300px] h-[300px] cursor-pointer"
              style={{
                transform: `translateY(${getRandomPosition()})`,
              }}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`collage-${index}`}
                className="object-cover absolute w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80 cursor-pointer"
          onClick={handleCloseImage}
        >
          <img
            ref={selectedImageRef}
            src={selectedImage}
            alt="selected"
            className="object-contain w-[80%] h-[80%]"
          />
        </div>
      )}
    </div>
  );
};

export default Collage;
