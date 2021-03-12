import styled from "styled-components";
import { RiArrowRightSLine as arrow } from "react-icons/ri";
import { motion } from "framer-motion";

export const CardContainer = motion.custom(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px 30px;
  border: 2px solid #fff;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  box-shadow: 8px 15px 24px #fcfcfc;
  &:hover {
    border: 2px solid #fe8464;
    .rotation-animation {
      animation: rotation 0.6s linear;
      animation-fill-mode: forwards;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(35deg);
    }
  }
`);

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 24px;
`;

export const BackgroundImg = styled.img`
  position: absolute;
`;

export const TopImgContainer = styled.div`
  z-index: 2;
`;

export const ServiceIcon = styled.img``;

export const TopImg = styled.img``;

export const Title = styled.h3`
  text-transform: capitalize;
  padding-bottom: 24px;
`;

export const Description = styled.p`
  padding-bottom: 24px;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Text = styled.p``;

export const Arrow = styled(arrow)`
  font-size: 1.7rem;
  font-weight: 500;
`;
