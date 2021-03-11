import {
  FooterLinksContainer,
  LinksHeading,
  LinkText,
} from "./footerlinks.elements";
import { Link } from "react-scroll";

const FooterLinks = ({ heading, texts, elements }) => {
  return (
    <FooterLinksContainer>
      <LinksHeading>{heading}</LinksHeading>
      {texts.map((link, index) => {
        const i = elements[index];
        return (
          <Link
            activeClass="active"
            to={i}
            smooth={true}
            duration={500}
            key={index}
          >
            <LinkText key={index}>{link}</LinkText>
          </Link>
        );
      })}
    </FooterLinksContainer>
  );
};

export default FooterLinks;
