import styled from "styled-components";
import { breakPoints } from "../../breakPoints";

export const NavbarContainer = styled.nav.attrs({
  className: 'navbarContainer',
})`
  background-color: red;
  background-image: linear-gradient(to right, #9b247f, #0076c3);
  height: 60px;
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;

  ${breakPoints.smallTablet} {
    margin: 0 -50px;
    padding: 0 50px;
  }
`;

export const BrandContainer = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  };
`;

export const BrandIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${breakPoints.smallTablet} {
    width: 40px;
    height: 40px;
  }
`;

export const BrandTitle = styled.h1`
  margin-inline-start: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5;

  ${breakPoints.smallTablet} {
    font-size: 1.5rem;
  }
`;

export const MenuIcon = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(100%);
  cursor: pointer;

  ${breakPoints.smallTablet} {
    width: 35px;
    height: 35px;
  }
`;

export const GamesOptions = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 1;

  a {
    color: #fff;
    text-decoration: none;
  };
`;

export const GameOption = styled.div`
  border: 1px solid #006ac9;
  border-top: none;
  padding: 10px;
  text-align: center;
  background-color: #006ac9;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(to right, #9b247f, #0076c3);
  }
`;