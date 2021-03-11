import styled from "styled-components";
import bannerBg from "../../assets/bannerBg.svg";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-image: url(${bannerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
`;
