// pages/index.js (or any other page)
import React from "react";
import Card from '../data/Card';

const AboutPage = () => {
  return (
    <div>
      <Card
        title="WEB DEVELOPMENT SERVICES"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime excepturi accusantium quod earum, optio eaque non soluta dicta repellendus dolorum aliquam, veritatis fuga corporis fugit rerum magnam eos. Ipsum, saepe."
        imageUrl="about.png"
        imageAlt="Hero Image"
        reverse={false}
      />
    </div>
  );
};

export default AboutPage;
