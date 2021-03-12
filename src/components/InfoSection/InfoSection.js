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
  return (
    <Element name="about">
      <Container>
        <InnerContainer left={left}>
          <ContentContainer
            initial={{ x: left ? "-100%" : "100%" }}
            animate={{ x: left ? "0%" : "0%" }}
            transition={{ ease: "easeOut" }}
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
            initial={{ x: left ? "100%" : "-100%" }}
            animate={{ x: left ? "0%" : "0%" }}
            transition={{ ease: "easeOut" }}
          >
            <Image src={image} alt={imageText} />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </Element>
  );
};

export default Infosection;
