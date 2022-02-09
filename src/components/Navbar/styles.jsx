import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: red;
  background-image: linear-gradient(to right, #9b247f, #0076c3);
  height: 60px;
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BrandIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BrandTitle = styled.h1`
  margin-inline-start: 10px;
  color: #fff;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(100%);
  cursor: pointer;
`;

export const GamesOptions = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
`;

export const GameOption = styled.div`
  border: 2px solid #006ac9;
  border-top: none;
  color: #000;
  padding: 10px;
  text-align: center;
  :hover {
    background-image: linear-gradient(to right, #9b247f, #0076c3);
    color: #fff;
  }
  cursor: pointer;
`;