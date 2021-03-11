import {
  Container,
  Ball,
  BallTwo,
  BallThree,
  TextContainer,
  LoadingText,
} from "./loading.elements";

const Loading = () => {
  return (
    <Container>
      <TextContainer>
        <LoadingText>Loading</LoadingText>
      </TextContainer>
      <Ball />
      <BallTwo />
      <BallThree />
    </Container>
  );
};

export default Loading;
