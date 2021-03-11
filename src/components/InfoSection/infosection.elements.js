import styled from "styled-components";
import { Line } from "../ServicesOffered/servicesOffered.elements";
import {
  Heading,
  InnerHeading,
} from "../ServicesOffered/servicesOffered.elements";
import { NavButton } from "../Navbar/Navbar.elements";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 80px 20px 80px;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: ${({ left }) => (left ? `'col1 col2'` : `'col2 col1'`)};
  grid-column-gap: 24px;
  width: 80%;

  @media screen and (max-width: 800px) {
    grid-template-areas: ${`'col1 col1' 'col2 col2'`};
    grid-row-gap: 24px;
  }
`;

export const ContentContainer = styled.div`
  grid-area: col1;
`;

export const InfoLine = styled(Line)`
  width: 40%;

  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;
export const TextContainer = styled.div`
  max-width: 500px;
`;

export const Title = styled(Heading)`
  font-size: 1.85rem;
  font-weight: 300;
`;

export const BoldTitle = styled(InnerHeading)`
  font-size: 2.2rem;
`;

export const Paragraph = styled.p`
  font-size: 0.85rem;
  padding: 24px 16px 24px 0px;
  color: #5e5e5e;
`;

export const Button = styled(NavButton)`
  padding: 12px 50px;
`;

export const ImageContainer = styled.div`
  grid-area: col2;
  max-width: 585px;
`;

export const Image = styled.img`
  width: 100%;
`;
