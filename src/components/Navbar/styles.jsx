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
`;

export const BrandTitle = styled.h1`
  margin-inline-start: 10px;
  color: #fff;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(100%);
`;