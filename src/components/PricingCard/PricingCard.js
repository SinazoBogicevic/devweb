import { useContext } from "react";
import { ModalContext } from "../../ModalContext";
import {
  CardContainer,
  ImagesContainer,
  BackgroundImg,
  TopImgContainer,
  TopImg,
  Title,
  Description,
  ActionButton,
  Text,
  Arrow,
} from "./pricingcard.elements";
import servicesShape from "../../assets/servicesShape.svg";

const PricingCard = ({
  data: {
    title,
    image,
    modalText,
    description,
    icon,
    buttonElement,
    styleName,
  },
}) => {
  const [click, isClicked, modalData, setModalData] = useContext(ModalContext);
  const handleReadMore = () => {
    isClicked(!click);
    setModalData((prevState) => ({
      ...prevState,
      img: image,
      title: title,
      text: modalText,
      buttonOne: "Hire me",
      buttonTwo: "browse",
      hasBtns: true,
    }));
  };
  return (
    <CardContainer onClick={handleReadMore}>
      <ImagesContainer>
        <BackgroundImg
          src={servicesShape}
          alt="blue triangle"
          className="rotation-animation"
        />
        <TopImgContainer>
          <TopImg src={image} alt="rounded triangle" />
        </TopImgContainer>
      </ImagesContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ActionButton onClick={handleReadMore}>
        <Text onClick={handleReadMore}>learn more</Text>
        <Arrow onClick={handleReadMore} />
      </ActionButton>
    </CardContainer>
  );
};

export default PricingCard;
