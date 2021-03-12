import styled from "styled-components";
import { NavButton } from "../Navbar/Navbar.elements";

export const ModalOverlay = styled.aside`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: ${({ hasBtns }) => (hasBtns ? "1fr 2fr" : "1fr 1fr")};
  grid-row-gap: ${({ hasBtns }) => (hasBtns ? "10px" : "0px")};
  position: fixed;
  top: 10%;
  background: #fff;
  padding: ${({ hasBtns }) => (hasBtns ? "40px 20px" : "20px")};

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 771px) {
  }

  @media screen and (max-width: 685px) {
  }

  @media screen and (max-width: 501px) {
    grid-template-rows: ${({ hasBtns }) => (hasBtns ? "1fr 2fr" : "1fr")};
  }

  @media screen and (max-width: 390px) {
    padding: 30px 4px;
  }

  @media screen and (max-width: 380px) {
    grid-template-rows: ${({ hasBtns }) => (hasBtns ? "1fr 2fr" : "1fr 1fr")};

    width: 95%;
  }
`;

export const ImgContainer = styled.div`
  max-width: 243px;
  justify-self: center;
`;

export const ModalImg = styled.img`
  width: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ hasBtns }) => (hasBtns ? "24rem" : "20rem")};
  height: ${({ hasBtns }) => (hasBtns ? "15rem" : "8rem")};
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 700;
`;

export const ModalText = styled.p`
  width: 75%;
  margin: 16px;
`;

export const BtnContainer = styled.div`
  display: ${({ hasBtn }) => (hasBtn ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

export const LaterBtn = styled(NavButton)`
  background: #fff;
  color: #000;
  border: 1px solid #fe8464;
  padding: 12px 30px;
  transition: bakground 0.6s ease-in-out;
  &:hover {
    color: #fff;
    background: webkit
      linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
    background: linear-gradient(
      to right,
      #fe8464 0%,
      #fe6e9a 50%,
      #fe8464 100%
    );
  }

  @media screen and (max-width: 390px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 310px) {
    padding: 8px 18px;
  }
`;

export const HireBtn = styled(NavButton)`
  padding: 12px 30px;
  transition: background 0.6s ease-in-out;
  &:hover {
    border: 1px solid #fe8464;
    color: #fff;
    background: webkit
      linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
    background: #fff;
    color: #000;
  }

  @media screen and (max-width: 390px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 310px) {
    padding: 8px 18px;
  }
`;
