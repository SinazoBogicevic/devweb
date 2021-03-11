import { useState, createContext } from "react";
import servicesShape1 from "./assets/servicesShape1.svg";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [click, isClicked] = useState(false);
  const [modalData, setModalData] = useState({
    img: servicesShape1,
    alt: "some image",
    title: "Test Modal",
    text: "This is a test modal",
    buttonOne: "",
    buttonTwo: "",
    hasBtns: true,
  });

  return (
    <ModalContext.Provider value={[click, isClicked, modalData, setModalData]}>
      {props.children}
    </ModalContext.Provider>
  );
};
