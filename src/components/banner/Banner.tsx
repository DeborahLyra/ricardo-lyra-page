import { useState, useEffect } from "react";
import photo1 from '/public/static/banner-photo-1.png';
import photo2 from '/public/static/banner-photo-2.png';
import photo3 from '/public/static/banner-photo-3.png';

const images = [photo1, photo2, photo3];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); 

  const goToPrevious = () => {
    setFade(false); 
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFade(true); 
    }, 300); 
  };

  const goToNext = () => {
    setFade(false); 
    setTimeout(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setFade(true); 
    }, 300); 
  };

  const getBackgroundPosition = () => {
    return currentIndex === 0 ? "md:bg-top lg:bg-top" : "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext(); 
    }, 4000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="max-w-full h-[450px] relative group md:h-[500px] lg:h-[550px] mt-0 md:mt-4 lg:mt-6">
      {/* Imagem */}
      <div
        className={`w-full h-full bg-contain bg-center transition-opacity duration-500 ease-in-out bg-no-repeat md:bg-cover lg:bg-cover ${fade ? "opacity-100" : "opacity-0"} ${getBackgroundPosition()}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Botão para voltar */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white p-3 md:p-4 lg:p-6 rounded-full lg:hover:bg-blue-800 transition"
      >
        ❮
      </button>

      {/* Botão para avançar */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white p-3 md:p-4 lg:p-6 rounded-full lg:hover:bg-blue-800 transition"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-sky-700" : "bg-blue-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
