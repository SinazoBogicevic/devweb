import {
  Services,
  Container,
  TextContainer,
  Line,
  InnerHeading,
  Heading,
  CardsContainer,
} from "./servicesOffered.elements";
import { Element } from "react-scroll";
import PricingCard from "../PricingCard/PricingCard";

const ServicesOffered = ({ data }) => {
  console.log(data);
  return (
    <Services>
      <Container>
        <TextContainer>
          <Line />
          <Heading>
            <InnerHeading>Clean and Simple Design, </InnerHeading>Comes with
            everything you need to get started!
          </Heading>
        </TextContainer>
        <Element name="products">
          <CardsContainer>
            {data.map((card, index) => (
              <PricingCard key={index} data={card} />
            ))}
          </CardsContainer>
        </Element>
      </Container>
    </Services>
  );
};

export default ServicesOffered;
