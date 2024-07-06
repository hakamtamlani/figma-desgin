import React from "react";

const Card = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  reverse,
  bgClass = "bg-gray-800",
  textClass = "text-white",
}) => {
  return (
    <div
      className={`w-full min-h-[100vh] flex justify-center py-20 ${bgClass} ${textClass} p-4`}
    >
      <div
        className={`max-w-auto lg:px-16 md:px-10 px-4 w-full flex py-12 flex-col lg:flex-row ${
          reverse ? "min-w-auto lg:flex-row-reverse flex lg:gap-40" : ""
        } items-center justify-between gap-6 lg:gap-10`}
      >
        <div className="flex flex-col text-center lg:text-left lg:max-w-lg">
          {subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
              {subtitle}
            </h2>
          )}
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-semibold mb-4 tracking-[0.8px]">
            {title}
          </h1>
          <p className="text-base lg:text-lg leading-relaxed tracking-[0.5px]">
            {description}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full max-w-md h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
