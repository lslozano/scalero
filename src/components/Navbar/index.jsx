import React, { useState } from 'react';
// Styles
import {
  NavbarContainer, BrandContainer, BrandIcon, BrandTitle, MenuIcon,
  GamesOptions, GameOption,
} from './styles';
// Assets
import controllerIcon from '../../assets/controllerIcon.png';
import menuIcon from '../../assets/menuIcon.png';
import closeIcon from '../../assets/closeIcon.png';
// Data
import { gamesData } from '../../gamesData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const menuImg = menuOpen ? closeIcon : menuIcon;
  const renderGameOptions = game => <GameOption>{game.name}</GameOption>;

  return (
    <NavbarContainer>
      <BrandContainer>
        <BrandIcon src={controllerIcon} alt="controller icon" />
        <BrandTitle>Best Videogames</BrandTitle>
      </BrandContainer>
      <MenuIcon onClick={handleMenuClick} src={menuImg} alt="menu icon" />
      {menuOpen &&
        <GamesOptions>
          {gamesData.map(renderGameOptions)}
        </GamesOptions>
      }
    </NavbarContainer>
  )
}

export default Navbar;