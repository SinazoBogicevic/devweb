import styled from "styled-components";
import { NavButton } from "../../Navbar/Navbar.elements";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 50px;
`;

export const Slogan = styled.h4`
  font-size: 38px;
  font-weight: 300;

  @media screen and (max-width: 760px) {
    font-size: 30px;
  }

  @media scree and (max-width: 600px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.95em;
    padding: 0px 12px;
  }
`;

export const Action = styled.h2`
  font-size: 38px;
  font-weight: 700;

  @media screen and (max-width: 760px) {
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.95em;
    padding: 0px 12px;
  }
`;

export const Paragraph = styled.p`
  padding: 24px 8px;

  @media screen and (max-width: 600px) {
    font-size: 0.85em;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7em;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.5em;
  }
`;

export const BlueButton = styled(NavButton)`
  padding: 12px 30px;
  background: webkit
    linear-gradient(to right, #33c8c1 0%, #119bd2 50%, #33c8c1 100%);
  background: linear-gradient(to right, #33c8c1 0%, #119bd2 50%, #33c8c1 100%);
`;
