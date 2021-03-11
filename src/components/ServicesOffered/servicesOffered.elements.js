import styled from "styled-components";

export const Services = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 5rem;
  text-align: center;
  width: 50%;
`;

export const Line = styled.div`
  width: 30%;
  height: 5px;
  background: webkit
    linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
  background: linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
`;

export const InnerHeading = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

export const Heading = styled.h1`
  font-size: 1.1rem;
  padding-top: 2rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 24px;
  background: #fafafa;
  padding: 20px;
`;
