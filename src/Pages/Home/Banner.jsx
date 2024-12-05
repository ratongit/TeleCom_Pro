import React, { useState, useEffect } from "react";

import Img1 from '../../assets/Img/Tower1.webp'
import Img9 from '../../assets/Img/img.webp'
import Img2 from '../../assets/Img/pexels-will-4316235.jpg'
import Img3 from '../../assets/Img/pexels-ray-strassburger-2735117-13866733.jpg'
import Img4 from '../../assets/Img/pexels-chuck-15104403.jpg'
import Img5 from '../../assets/Img/pexels-felipe-helfstein-871817-17791917.jpg'
import Img6 from '../../assets/Img/pexels-eberhardgross-2098404.jpg'
import Img7 from '../../assets/Img/pexels-derlei-2081132.jpg'
import Img8 from '../../assets/Img/pexels-andre-furtado-43594-234824.jpg'


const slides = [

  {
    imgSrc:'https://images.pexels.com/photos/14558163/pexels-photo-14558163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imgAlt: "Vibrant abstract painting with swirling blue and light pink hues on a canvas.",
    title: "Front end developers",
    description:
      "The architects of the digital world, constantly battling against their mortal enemy – browser compatibility.",
  },


  {
    imgSrc:"https://images.pexels.com/photos/9039845/pexels-photo-9039845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.",
    title: "Back end developers",
    description:
      "Because not all superheroes wear capes, some wear headphones and stare at terminal screens.",
  },


  {
    imgSrc:"https://images.pexels.com/photos/19851982/pexels-photo-19851982/free-photo-of-low-angle-shot-of-telecommunications-towers-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Vibrant abstract painting with swirling blue and purple hues on a canvas.",
    title: "Full stack developers",
    description: "Where 'burnout' is just a fancy term for 'Tuesday'.",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 4600);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-[92%] h-[450px] my-10 mx-auto rounded-md overflow-hidden bg-black">
      <div className="absolute inset-0 transition-opacity duration-1000 ">

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-green-500 to-blue-500 opacity-100 pointer-events-none">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >

            {/* Main Content here */}

            <img
              src={slide.imgSrc}
              alt={slide.imgAlt}
              className="absolute w-full h-full object-cover"
            />
 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900   to-transparent opacity-50 pointer-events-none"></div>

            <div className="relative z-10 p-5 text-center">
              <h3 className="text-2xl font-bold">{slide.title}</h3>
              <p className="text-sm mt-2">{slide.description}</p>
            </div>
          </div>

        ))}


</div>

      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

  {/* Next Btn start */}
      {/* <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={handlePrevious}
        aria-label="Previous Slide"
      >
        &#9664;
      </button> */}

  {/* Next Btn start */}
      {/* <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &#9654;
      </button> */}

  {/* Next Btn start */}
       {/* <button
        className="absolute bottom-5 right-5 bg-black/50 text-white p-2 rounded-full"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Play Carousel" : "Pause Carousel"}
      >
        {isPaused ? "Play" : "Pause"}

      </button> */}


    </div>
  );
};

export default Banner;
