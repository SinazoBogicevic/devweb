import { infoOne, infoTwo, infoThree } from "./data";
import InfoSection from "../../components/InfoSection/InfoSection";
import { Element } from "react-scroll";

const Info = () => {
  return (
    <>
      <Element name="about">
        <InfoSection {...infoOne} />
        <InfoSection {...infoTwo} />
        <InfoSection {...infoThree} />
      </Element>
    </>
  );
};

export default Info;
