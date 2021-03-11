import { HostingTextContainer } from "./hosting.elements";
import {
  Services,
  Container,
  Line,
  InnerHeading,
  Heading,
  CardsContainer,
} from "../ServicesOffered/servicesOffered.elements";
import { Element } from "react-scroll";
import PricingCard from "../PricingCard/PricingCard";

const Hosting = ({ data }) => {
  return (
    <Element name="hosting">
      <Services>
        <Container>
          <HostingTextContainer>
            <Line />
            <Heading>
              <InnerHeading>Budget and Quality plans, </InnerHeading> hosting
              plan that best suits your business
            </Heading>
          </HostingTextContainer>
          <CardsContainer>
            {data.map((card, index) => (
              <PricingCard key={index} data={card} />
            ))}
          </CardsContainer>
        </Container>
      </Services>
    </Element>
  );
};

export default Hosting;
