import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
// Components
import GameCard from '../../components/GameCard';
// Styles
import { GamesContainer, ViewButton } from './styles';
// Utility
// Functionality
import getThemeForHomeViewOn from './homeThemes';

const Home = (props) => {
  const { gamesState, setGames } = props;
  const VIEWS = {
    column: 'column',
    grid: 'grid',
  };
  const { column, grid } = VIEWS;
  const [homeViewSelected, setHomeViewSelected] = useState(column);

  const changeHomeView = (homeView) => {
    if (homeView === column) return setHomeViewSelected(grid);

    return setHomeViewSelected(column);
  }

  return (
    <ThemeProvider theme={getThemeForHomeViewOn(homeViewSelected)}>
      <ViewButton onClick={() => changeHomeView(homeViewSelected)}>Change view</ViewButton>
      <GamesContainer>
        {gamesState.map((game, index) => {
          const { name, description, voted, year, rating } = game;
          return (
            <GameCard
              key={index}
              index={index}
              name={name}
              description={description}
              voted={voted}
              year={year}
              rating={rating}
              gamesState={gamesState}
              setGames={setGames}
            />
          )}
        )}
      </GamesContainer>
    </ThemeProvider>
  )
}

export default Home;