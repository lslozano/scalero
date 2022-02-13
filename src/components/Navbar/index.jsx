import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const renderGameOptions = (game, index) => {
    const { name } = game;
    const gameUrl = name.replace(/ /g, '-');
    return (
      <GameOption key={index} onClick={() => setMenuOpen(false)}>
        <Link to={`/${gameUrl}`}>{game.name}</Link>
      </GameOption>
    )
  };

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to="/">
          <BrandIcon src={controllerIcon} alt="controller icon" />
          <BrandTitle>Best Videogames</BrandTitle>
        </Link>
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