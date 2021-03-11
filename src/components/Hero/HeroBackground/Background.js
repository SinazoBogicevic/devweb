import React from "react";
import { BgContainer, ContentImageDv } from "./background.elements";
import ParticlesJs from "../Particles/ParticlesJs";
import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";

const Background = () => {
  return (
    <BgContainer>
      <ParticlesJs />
      <ContentImageDv>
        <HeroContent />
        <HeroImage />
      </ContentImageDv>
    </BgContainer>
  );
};

export default Background;
