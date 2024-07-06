import React from "react";
import Card from "../data/Card";

const Hero = () => {
  return (
    <div>
      <Card
        subtitle="WEB DEVELOPMENT"
        title="HAVE YOUR SITE WITH NO FUSS"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam modi consequuntur doloribus cumque vel aperiam minus nostrum aut expedita veritatis culpa sint eaque, officiis dignissimos porro, aspernatur totam quod!"
        imageUrl="/hero.png"
        imageAlt="About Image"
        reverse={true}
        bgClass="bg-white"
        textClass="text-black"
      />
    </div>
  );
};

export default Hero;
