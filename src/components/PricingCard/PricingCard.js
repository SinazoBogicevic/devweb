import { useContext, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    delay,
  },
}) => {
  const [click, isClicked, modalData, setModalData] = useContext(ModalContext);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const controls = useAnimation();

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const transition = { delay: delay };

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

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <CardContainer
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
      transition={transition}
      onClick={handleReadMore}
    >
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
