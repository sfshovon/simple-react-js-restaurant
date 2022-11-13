import React, { useEffect, useState } from 'react';

const SideSlider = ({sideSliderImages}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      (currentSlide < sideSliderImages.length - 1)
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(0);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-1000 overflow-hidden" style={{backgroundImage: `url(${sideSliderImages[currentSlide].img})`}}>

    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80"></div>
  
    {/* Dot Circles */}
    <div className="flex absolute bottom-32 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div onClick={() => setCurrentSlide(0)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 0 ? "opacity-100" : "opacity-40" }`}>
      </div>
      <div onClick={() => setCurrentSlide(1)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 1 ? "opacity-100" : "opacity-40"}`}>
      </div>
      <div onClick={() => setCurrentSlide(2)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 2 ? "opacity-100" : "opacity-40"}`}>
      </div>
      <div onClick={() => setCurrentSlide(3)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 3 ? "opacity-100" : "opacity-40"}`}>
      </div>
      <div onClick={() => setCurrentSlide(4)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 4 ? "opacity-100" : "opacity-40"}`}>
      </div>
      <div onClick={() => setCurrentSlide(5)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 5 ? "opacity-100" : "opacity-40"}`}>
      </div>
      <div onClick={() => setCurrentSlide(6)} className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer ${currentSlide === 6 ? "opacity-100" : "opacity-40"}`}>
      </div>
    </div>

  </div>
  );
};

export default SideSlider;