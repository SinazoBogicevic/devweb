import { useContext, useEffect } from "react";
import { ModalContext } from "../../ModalContext";
import { Link } from "react-scroll";
import {
  ModalOverlay,
  ModalContainer,
  ImgContainer,
  ModalImg,
  ModalContent,
  ModalTitle,
  ModalText,
  BtnContainer,
  LaterBtn,
  HireBtn,
} from "./modal.elements";
import ReactDOM from "react-dom";

const Modal = () => {
  const [click, isClicked, modalData] = useContext(ModalContext);
  //const [modalData, setModalData] = useContext(ModalContext);

  const closeModal = () => {
    isClicked(!click);
  };

  const onKeyDown = (e) => {
    console.log("escape");
    if (e.keyCode === 27) {
      isClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return ReactDOM.createPortal(
    <ModalOverlay
      hasBtns={modalData.hasBtns}
      open={click}
      onClick={closeModal}
      tag="aside"
      aria-modal="true"
      tabIndex="-1"
      role="dialog"
    >
      <ModalContainer hasBtns={modalData.hasBtns} onClick={closeModal}>
        <ImgContainer>
          <ModalImg src={modalData.img} alt={modalData.alt} />
        </ImgContainer>
        <ModalContent hasBtns={modalData.hasBtns}>
          <ModalTitle>{modalData.title}</ModalTitle>
          <ModalText>{modalData.text}</ModalText>
          <BtnContainer hasBtn={modalData.hasBtns}>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              <HireBtn
                onClick={closeModal}
                aria-label="close-modal"
                id="close-modal"
              >
                {modalData.buttonOne}
              </HireBtn>
            </Link>
            <LaterBtn
              onClick={closeModal}
              aria-label="modal-close"
              id="modal-close"
            >
              {modalData.buttonTwo}
            </LaterBtn>
          </BtnContainer>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
