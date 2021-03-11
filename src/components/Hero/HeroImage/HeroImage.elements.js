import styled from "styled-components";

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 650px;

  @media screen and (max-width: 600px) {
    max-width: 500px;
  }

  @media screen and (max-width: 480px) {
    max-width: 400px;
  }

  @media screen and (max-width: 380px) {
    max-width: 300px;
  }
`;
