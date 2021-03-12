import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Container,
  InnerContainer,
  ContentContainer,
  TextContainer,
  InfoLine,
  Title,
  BoldTitle,
  Paragraph,
  Button,
  ImageContainer,
  Image,
} from "./infosection.elements";
import { Element, Link } from "react-scroll";

const Infosection = ({
  left,
  title,
  span,
  description,
  buttonText,
  image,
  imageText,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const textVariants = {
    initial: { opacity: 0, x: left ? "-100%" : "100%" },
    animate: { opacity: 1, x: left ? "0%" : "0%" },
  };

  const imageVariants = {
    initial: { opacity: 0, x: left ? "100%" : "-100%" },
    animate: { opacity: 1, x: left ? "0%" : "0%" },
  };

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <Element name="about">
      <Container>
        <InnerContainer left={left}>
          <ContentContainer
            ref={ref}
            initial="initial"
            animate={controls}
            transition={{ duration: 1, ease: "easeOut" }}
            variants={textVariants}
          >
            <InfoLine />
            <TextContainer>
              <Title>
                <BoldTitle>{span}</BoldTitle>
                {title}
              </Title>
              <Paragraph>{description}</Paragraph>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
              >
                <Button>{buttonText}</Button>
              </Link>
            </TextContainer>
          </ContentContainer>
          <ImageContainer
            ref={ref}
            initial="initial"
            animate={controls}
            transition={{ ease: "easeOut" }}
            variants={imageVariants}
          >
            <Image src={image} alt={imageText} />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </Element>
  );
};

export default Infosection;
