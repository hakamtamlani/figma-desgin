import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { data } from "../data/data";
import './index.css';

const SectionCard = () => {
  const [getData, setGetData] = useState(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col min-h-screen pb-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
          TURN YOUR IDEA INTO A GAME | WE MAKE <br /> IT HAPPEN FOR YOU
        </h1>
        <p className="text-lg md:text-xl text-center max-w-prose mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum
          qui nulla iste, eaque accusamus praesentium consectetur culpa rerum?
        </p>
      </div>
      <div className="container mx-auto px-7">
        <Slider {...settings}>
          {getData.map((item, i) => (
            <div key={i} className="px-2">
              <div className="bg-slate-700 p-4 px-4text-white shadow-lg text-center rounded-md">
                <div className="flex items-center justify-center mb-4">
                  <h1 className=" text-6xl"> {item.img}</h1>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="mb-4">{item.subtitle}</p>
                <p className="mb-4">{item.tech}</p>
                <p className="mb-4">{item.tech1}</p>
                <p className="mb-4">{item.tech2}</p>
                <p className="mb-4">{item.tech3}</p>
                <div className="flex items-center justify-center mt-4">
                  <button className="flex items-center font-semibold gap-2 hover:text-green-400">
                    Read more <FaLongArrowAltRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionCard;
