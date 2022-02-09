import React, { useState } from 'react';
import {
  NavbarContainer, BrandContainer, BrandIcon, BrandTitle, MenuIcon,
} from './styles';
import controllerIcon from '../../assets/controllerIcon.png';
import menuIcon from '../../assets/menuIcon.png';
import closeIcon from '../../assets/closeIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const menuImg = menuOpen ? closeIcon : menuIcon;

  return (
    <NavbarContainer>
      <BrandContainer>
        <BrandIcon src={controllerIcon} alt="controller icon" />
        <BrandTitle>Best Videogames</BrandTitle>
      </BrandContainer>
      <MenuIcon onClick={handleMenuClick} src={menuImg} alt="menu icon" />
    </NavbarContainer>
  )
}

export default Navbar;