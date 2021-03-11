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
  const variants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 1,
      x: "100%",
    },
    exit: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <Element name="about">
      <Container>
        <InnerContainer left={left}>
          <ContentContainer
            initial="initial"
            animate="animate"
            exit="exit"
            variants="variants"
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
          <ImageContainer>
            <Image src={image} alt={imageText} />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </Element>
  );
};

export default Infosection;
