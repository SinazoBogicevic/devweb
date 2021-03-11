import styled from "styled-components";

export const Overlay = styled.aside`
  position: sticky;
  top: 70px;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  transform: ${({ close }) => (close ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.6s ease-out;
  z-index: 7;
  background: rgba(0, 0, 0, 0.2);
`;

export const SideContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #fff;
  transition: 0.8s ease-out;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const SideNav = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

export const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  text-align: center;
`;

export const SideItem = styled.li`
  cursor: pointer;
  margin-bottom: 60px;
  font-size: 1.2rem;
  &:hover {
    color: #fe8464;
  }
`;
