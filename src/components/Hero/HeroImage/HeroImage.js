import React from "react";
import { ImageContainer, Image } from "./HeroImage.elements";
import headerhero from "../../../assets/headerhero.png";

const HeroImage = () => {
  return (
    <ImageContainer>
      <Image src={headerhero} alt="computer screen" />
    </ImageContainer>
  );
};

export default HeroImage;
