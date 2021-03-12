import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-scroll";
import {
  Nav,
  NavContainer,
  Logo,
  NavMenu,
  MenuItem,
  NavButton,
  Menu,
  NavCollapsable,
  Hamburger,
  Crosses,
} from "./Navbar.elements";
import { NavbarContext } from "../../NavbarContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, isClicked] = useContext(NavbarContext);
  const [scrollNav, setScrollNav] = useState(false);

  const handleToggle = () => {
    isClicked(!click);
  };

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 10) {
        setScrollNav(true);
        document.querySelector(".menu-items").style.color = "#000";
        document.querySelector("nav").style.boxShadow =
          "0px 20px 50px 16px rgb(237,237,237,0.3)";
        document.querySelector("svg").style.color = "#000";
      } else {
        setScrollNav(false);
        document.querySelector(".menu-items").style.color = "#fff";
        document.querySelector("nav").style.boxShadow =
          "0px 0px 0px rgb(0,0,0,0)";
        document.querySelector("svg").style.color = "#fff";
      }
    };
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <Link activeClass="active" to="home" smooth={true} duration={500}>
          <p>Logo</p>
        </Link>
        <Menu>
          <NavCollapsable>
            <NavMenu className="menu-items">
              <MenuItem>
                <Link
                  activeClass="active"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  activeClass="active"
                  to="products"
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Products
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  activeClass="active"
                  to="hosting"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Hosting
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Info
                </Link>
              </MenuItem>
            </NavMenu>

            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              <NavButton>Hire</NavButton>
            </Link>
          </NavCollapsable>
          <Hamburger clicked={click} onClick={handleToggle} />
          <Crosses clicked={click} onClick={handleToggle} />
        </Menu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
