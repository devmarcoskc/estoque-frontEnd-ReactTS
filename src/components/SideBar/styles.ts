import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";
import IonIcon from '@reacticons/ionicons';
import { Link } from "react-router-dom";

export const SideBar = styled.nav`
  width: 20%;
  height: 100%;
  background-color: ${Colors.primary300};

  @media(max-width: 768px) {
    width: 70%;
    position: fixed;
    left: 0;
    margin-left: -70%;
    transition: all ease .7s;
    z-index: 50;
  }
`;

export const NavContainer = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 70px;

  @media(max-width: 768px) {
    width: 80%;
    align-items: center;
  }
`;

export const NavTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
` ;

export const LinkAndIconArea = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  cursor: pointer;
  text-decoration:none;
  cursor: pointer;
  color: white;
`;

export const LinkNav = styled.span`
  font-size: 17.5px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

export const Icon = styled(IonIcon)`
  font-size: 25px;
  color: inherit;
`;


export const MenuMobile = styled(IonIcon)`
  font-size: 30px;
  color: ${Colors.primary400};
  position: fixed;
  top: 10px;
  left: 20px;
`;

export const CloseMenuMobile = styled(IonIcon)`
  font-size: 30px;
  color: ${Colors.primary400};
`;