import React, { useState } from "react";
import Card from "../data/Card";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Education",
      description:
        "The education industry plays a crucial role in shaping the minds and futures of individuals. It encompasses formal learning institutions such as schools, colleges, and universities, as well as informal learning environments. Education equips individuals with knowledge, skills, and values necessary for personal and societal development.",
      imageUrl: "/education.jpg",
      imageAlt: "Education Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 2,
      name: "Game & Entertainment",
      description:
        "The game and entertainment industry entertains and engages individuals through various forms of media, including video games, movies, music, and live performances. It provides recreational activities that promote relaxation, enjoyment, and social interaction.",
      imageUrl: "/game.jpg",
      imageAlt: "Game & Entertainment Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 3,
      name: "Travel & Tourism",
      description:
        "Travel and tourism encompass activities related to traveling for leisure, business, or other purposes. It includes transportation, accommodation, attractions, and hospitality services that cater to travelers' needs and preferences. The industry contributes significantly to global economies and cultural exchange.",
      imageUrl: "/travel.jpg",
      imageAlt: "Travel & Tourism Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 4,
      name: "Logistics",
      description:
        "The logistics industry manages the efficient flow and storage of goods, information, and resources from origin to destination. It includes transportation, warehousing, inventory management, and supply chain operations. Logistics plays a vital role in supporting global trade and economic growth.",
      imageUrl: "/logistics.jpg",
      imageAlt: "Logistics Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 5,
      name: "Manufacturing",
      description:
        "The manufacturing industry produces goods and products through various processes, technologies, and systems. It involves designing, producing, and assembling raw materials or components into finished products for consumer or industrial use. Manufacturing drives innovation, productivity, and economic development.",
      imageUrl: "/manufactur.jpg",
      imageAlt: "Manufacturing Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 6,
      name: "Healthcare",
      description:
        "The healthcare industry provides medical services, treatments, and products to maintain and improve people's health. It includes hospitals, clinics, pharmacies, medical devices, and healthcare professionals. Healthcare plays a critical role in promoting well-being, preventing diseases, and treating illnesses.",
      imageUrl: "/healthcare.jpg",
      imageAlt: "Healthcare Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      id: 7,
      name: "Banking & Finance",
      description:
        "Banking is an industry that handles cash, credit, and other financial transactions for individual consumers and businesses alike. Banking provides the liquidity needed for families and businesses to invest in the future, manage risk, and achieve financial goals.",
      imageUrl: "/bank.jpg",
      imageAlt: "Banking & Finance Image",
      reverse: false,
      bgClass: "bg-white",
      textClass: "text-black",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center my-6">
        HOW WE EMPOWER DIFFERENT INDUSTRIES
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button rounded-md bg-gray-800 text-white py-1 px-4 transition-transform transform hover:scale-105 ${
              selectedCategory.id === category.id ? "bg-orange-500" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <Card
          title={selectedCategory.name}
          description={selectedCategory.description}
          imageUrl={selectedCategory.imageUrl}
          imageAlt={selectedCategory.imageAlt}
          reverse={selectedCategory.reverse}
          bgClass={selectedCategory.bgClass}
          textClass={selectedCategory.textClass}
        />
      </div>
    </div>
  );
};

export default Category;
