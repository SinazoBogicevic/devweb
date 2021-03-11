import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

export const Scrollbox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  font-size: 1.5rem;
  color: #fff;
  background: -webkit-linear-gradient(left, #361cc1 0%, #2e82ef 100%);
  background: -o-linear-gradient(left, #361cc1 0%, #2e82ef 100%);
  background: linear-gradient(to right, #361cc1 0%, #2e82ef 100%);
  z-index: 7;
  cursor: pointer;
  transition: 0.3s ease-in;
`;

export const Toparrow = styled(RiArrowUpSLine)`
  font-size: 2rem;
  font-weight: 900;
`;
