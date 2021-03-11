import styled from "styled-components";
import footerBg from "../../assets/footerBg.svg";
import { Logo } from "../Navbar/Navbar.elements";
import { NavButton } from "../Navbar/Navbar.elements";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaDev, FaMedium } from "react-icons/fa";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${footerBg});
  background-size: cover;
  background-position: top 20px center;
  background-repeat: no-repeat;
  padding-top: 120px;
  z-index: 5;
`;

export const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: ${`'col1 col2'`};
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 0 18px 0 rgb(50 77 215 / 14%);
  box-shadow: 0px 0px 18px 0px rgb(50, 77, 215, 0.14);
  padding: 90px;
  border-radius: 8px;

  @media screen and (max-width: 1030px) {
    grid-template-areas: ${`'col1 col1' 'col2 col2'`};
  }

  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const FormText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: col1;
`;

export const TopText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;

  @media screen and (max-width: 580px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 476px) {
    font-size: 1rem;
  }
`;

export const BottomText = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 580px) {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: col2;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 80%;
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1030px) {
    height: 100%;
    padding-top: 15px;
  }
`;

export const InputLabelContainer = styled.div`
  position: relative;
  width: 80%;
  border: none;
`;

export const Label = styled.label`
  position: absolute;
  left: 8px;
  top: 1rem;
  color: #2e2e2e;
  transition: 0.4s ease-out;

  @media screen and (width: 1030px) {
    left: 20px;
    top: 30%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  color: #2e2e2e;
  border: 2px solid #e1e1e1;
  border-right-width: 0px;
  border-radius: 8px 0px 0px 8px;
  padding-left: 20px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:focus {
    border: 2.5px solid #007bff;
    border-right: none;
    border-right: 0px;
  }

  &:focus + label,
  &:valid + label {
    top: 0;
    opacity: 0;
  }

  &:valid {
    border-color: #28a745;
  }
`;

export const Submit = styled(NavButton)`
  border-radius: 0px 12px 12px 0px;
  padding: 12px 20px;
`;

export const MyDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-template-areas: ${`'col1 col2'`};
  padding-top: 200px;
  color: #fff;

  @media screen and (max-width: 1000px) {
    grid-template-areas: ${`'col1 col1' 'col2 col2'`};
    grid-column-gap: 0px;
    grid-row-gap: 36px;
  }
`;

export const LinksLogoContainer = styled.div`
  grid-area: col1;
  padding-right: 32px;
`;

export const LogoContainer = styled.div``;

export const FooterLogo = styled(Logo)``;

export const SloganContainer = styled.div`
  padding: 40px 12px 40px 0px;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 380px) {
    width: 90%;
  }
`;

export const SloganText = styled.p`
  font-size: 0.85rem;
  padding-right: 42px;

  @media screen and (max-width: 600px) {
    padding-right: 0px;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-area: col2;

  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 24px;
  }
`;
export const AttributionsContainer = styled.div`
  padding: 60px 0px;
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.3;
  background-color: #fff;
  margin-bottom: 32px;
`;

export const AttText = styled.p`
  font-size: 0.85rem;
  color: #fff;
  padding-bottom: 1rem;
`;
