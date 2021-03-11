import { useState, useContext } from "react";
import {
  FooterContainer,
  ContentContainer,
  Form,
  InputContainer,
  InputLabelContainer,
  FormText,
  ContactContainer,
  TopText,
  BottomText,
  Label,
  Submit,
  Input,
  MyDetailsContainer,
  LinksLogoContainer,
  LogoContainer,
  FooterLogo,
  SloganContainer,
  SloganText,
  LinksContainer,
  AttributionsContainer,
  FooterLine,
  AttText,
} from "./footer.elements";
import { linksTwo, linksThree } from "../FooterLinks/data";
import { Link, Element } from "react-scroll";
import { ModalContext } from "../../ModalContext";
import FooterLinks from "../FooterLinks/FooterLinks";
import ParticlesContainer from "../Hero/Particles/ParticlesJs";
import mailbox from "../../assets/mailbox.svg";
import logo from "../../assets/logo.png";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [click, isClicked, modalData, setModalData] = useContext(ModalContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const clearEmailField = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isClicked(!click);
    setModalData((prevState) => ({
      ...prevState,
      img: mailbox,
      alt: "mailbox illustration with mail inside",
      title: "Email sent",
      modalText: "Hi, thanks for reaching out. I'll get back to you asap",
      text: "Hi, thanks for reaching out. I'll get back to you asap",
      hasBtns: false,
    }));

    axios
      .post("/api/sendmail", { client: email })
      .then((res) => {
        clearEmailField();
        console.log(`email sent`);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  };
  return (
    <FooterContainer>
      <ParticlesContainer />
      <ContentContainer>
        <Element name="contact">
          <ContactContainer>
            <FormText>
              <TopText>Contact us today </TopText>
              <BottomText>free consultation</BottomText>
            </FormText>
            <Form method="POST" onSubmit={handleSubmit}>
              <InputContainer>
                <InputLabelContainer>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    required
                    onChange={handleEmail}
                  />
                  <Label htmlFor="email">Email</Label>
                </InputLabelContainer>
                <Submit>Connect</Submit>
              </InputContainer>
            </Form>
          </ContactContainer>
          <MyDetailsContainer>
            <LinksLogoContainer>
              <LogoContainer>
                <Link
                  activeClass="active"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <FooterLogo src={logo} alt="bullseye image and T26" />
                </Link>
              </LogoContainer>
              <SloganContainer>
                <SloganText>
                  In today’s market having a wesite is essential if you don't
                  want to get left behind. Without a website your business is
                  invisible. Stay competitive in this increasingly digital world
                  and get a website.
                </SloganText>
              </SloganContainer>
            </LinksLogoContainer>
            <LinksContainer>
              <FooterLinks {...linksTwo} />
              <FooterLinks {...linksThree} />
            </LinksContainer>
          </MyDetailsContainer>
          <AttributionsContainer>
            <FooterLine />
            <AttText>Developed by T26</AttText>
          </AttributionsContainer>
        </Element>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
