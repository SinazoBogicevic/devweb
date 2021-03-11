import React from "react";
import {
  ContentContainer,
  Slogan,
  Action,
  BlueButton,
  Paragraph,
} from "./heroContent.elements";
import { Link } from "react-scroll";

const HeroContent = () => {
  return (
    <ContentContainer>
      <Slogan>Now - Get online today</Slogan>
      <Action>Grow your business online</Action>
      <Paragraph>Professional modern website, that will get results</Paragraph>
      <Link activeClass="active" to="contact" smooth={true} duration={500}>
        <BlueButton>Get started</BlueButton>
      </Link>
    </ContentContainer>
  );
};

export default HeroContent;
