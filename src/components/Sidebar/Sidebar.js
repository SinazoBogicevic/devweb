import React, { useState, useContext } from "react";
import {
  Overlay,
  SideContainer,
  SideNav,
  SideMenu,
  SideItem,
} from "./Sidebar.elements";
import { Link } from "react-scroll";
import { NavbarContext } from "../../NavbarContext";

const Sidebar = () => {
  const [click, isClicked] = useContext(NavbarContext);
  const closeSidebar = () => {
    isClicked(!click);
    console.log(click);
  };
  return (
    <Overlay onClick={closeSidebar} close={click}>
      <SideContainer>
        <SideNav>
          <SideMenu>
            <SideItem>
              <Link
                onClick={closeSidebar}
                activeClass="active"
                to="home"
                smooth={true}
                duration={400}
              >
                Home
              </Link>
            </SideItem>
            <SideItem>
              <Link
                onClick={closeSidebar}
                activeClass="active"
                to="products"
                smooth={true}
                duration={400}
              >
                Products
              </Link>
            </SideItem>
            <SideItem>
              <Link
                onClick={closeSidebar}
                activeClass="active"
                to="hosting"
                smooth={true}
                duration={400}
              >
                Hosting
              </Link>
            </SideItem>
            <SideItem>
              <Link
                onClick={closeSidebar}
                activeClass="active"
                to="about"
                smooth={true}
                duration={400}
              >
                Info
              </Link>
            </SideItem>
          </SideMenu>
        </SideNav>
      </SideContainer>
    </Overlay>
  );
};

export default Sidebar;
