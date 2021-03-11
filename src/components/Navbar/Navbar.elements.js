import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  color: white;
  width: 100%;
  height: 70px;
  margin-top: -70px;
  z-index: 6;
  transition: 0.6s ease-out;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80%;
  max-height: 100%;
`;

export const Logo = styled.img`
  width: 60px;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 950px) {
    width: 35%;
  }

  @media screen and (max-width: 760px) {
    width: 10%;
  }
`;

export const NavCollapsable = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-width; 60%;

@media screen and  (max-width: 760px){
    display: none;
}
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  margin-right: 42px;
  cursor: pointer;
`;

export const NavButton = styled.button`
  padding: 12px 62px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 0.95rem;
  white-space: nowrap;
  background: webkit
    linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
  background: linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
  color: white;
  transition: 0.6s transform;
  &:active {
    transform: scale(0.9);
  }
`;

export const NavIcon = styled.img``;

export const Hamburger = styled(GoThreeBars)`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
