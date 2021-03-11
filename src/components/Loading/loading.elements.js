import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
`;

export const Ball = styled.div`
  border: none;
  border-radius: 50%;
  background-color: #fe8464;
  height: 80px;
  width: 80px;
  margin-right: 2rem;
  animation: bounce 0.7s linear infinite alternate;
  transform: translateY(0%);
  z-index: 10;

  @keyframes bounce {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-200%);
    }
  }

  @media screen and (max-width: 548px) {
    width: 50px;
    height: 50px;
    margin: 0px 8px;
  }
`;

export const BallTwo = styled(Ball)`
  animation-delay: 0.4s;
`;

export const BallThree = styled(Ball)`
  animation-delay: 0.8s;
`;
