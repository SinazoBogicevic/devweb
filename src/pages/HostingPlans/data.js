import servicesShape1 from "../../assets/servicesShape1.svg";
import servicesShape2 from "../../assets/servicesShape2.svg";
import servicesShape3 from "../../assets/servicesShape3.svg";
import { BsLightning as standard, BsAlarm as seo } from "react-icons/bs";
import { BiCartAlt as cart } from "react-icons/bi";

export const data = [
  {
    title: "BlueHost",
    image: servicesShape1,
    icon: standard,
    styleName: "icon",
    modalText:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
    description:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
  },

  {
    title: "GatorHost",
    icon: standard,
    image: servicesShape2,
    styleName: "icon",
    modalText:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
    description:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
  },
  {
    title: "DreamHost",
    icon: standard,
    image: servicesShape3,
    styleName: "icon",
    modalText:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
    description:
      "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.",
  },
];
