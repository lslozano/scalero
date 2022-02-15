import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
// Components
import GameCard from '../../components/GameCard';
// Styles
import { GamesContainer } from './styles';
// Utility
// Functionality
import getThemeForHomeViewOn from './homeThemes';

const Home = (props) => {
  const { gamesState, setGames } = props;
  const [homeViewSelected, setHomeViewSelected] = useState('column');

  return (
    <ThemeProvider theme={getThemeForHomeViewOn(homeViewSelected)}>
      <button onClick={() => setHomeViewSelected('grid')}>Change view</button>
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