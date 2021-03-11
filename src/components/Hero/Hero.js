import React from "react";
import Background from "./HeroBackground/Background";
import { HeroContainer } from "./hero.elements";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
      <HeroContainer>
        <Background />
      </HeroContainer>
    </Element>
  );
};

export default Hero;
