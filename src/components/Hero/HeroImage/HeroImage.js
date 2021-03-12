import React from "react";
import { ImageContainer, Image } from "./HeroImage.elements";
import headerhero from "../../../assets/headerhero.png";

const HeroImage = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const transition = {
    duration: 1,
    delay: 1.2,
  };
  return (
    <ImageContainer>
      <Image
        src={headerhero}
        alt="computer screen"
        initial="initial"
        animate="animate"
        variants={variants}
        transition={transition}
      />
    </ImageContainer>
  );
};

export default HeroImage;
