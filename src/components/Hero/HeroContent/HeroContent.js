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
  const variants = {
    initial: { opacity: 0, y: "20%" },
    animate: { opacity: 1, y: "0%" },
  };

  return (
    <ContentContainer>
      <Slogan
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={variants}
      >
        Now - Get online today
      </Slogan>
      <Action
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 0.2 }}
        variants={variants}
      >
        Grow your business online
      </Action>
      <Paragraph
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 0.4 }}
        variants={variants}
      >
        Professional modern website, that will get results
      </Paragraph>
      <Link activeClass="active" to="contact" smooth={true} duration={500}>
        <BlueButton
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.6 }}
          variants={variants}
        >
          Get started
        </BlueButton>
      </Link>
    </ContentContainer>
  );
};

export default HeroContent;
