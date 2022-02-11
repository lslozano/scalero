import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: red;
  background-image: linear-gradient(to right, #9b247f, #0076c3);
  height: 60px;
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
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
  font-size: 1rem;
  line-height: 1.5;
`;

export const MenuIcon = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(100%);
  cursor: pointer;
`;

export const GamesOptions = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
`;

export const GameOption = styled.div`
  border: 1px solid #006ac9;
  border-top: none;
  color: #fff;
  padding: 10px;
  text-align: center;
  background-color: #006ac9;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(to right, #9b247f, #0076c3);
  }
`;