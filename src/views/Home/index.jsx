import React from 'react'
import styled from 'styled-components';
// Data
import { gamesData } from '../../gamesData';
// Components
import GameCard from '../../components/GameCard';

const GamesContainer = styled.div`
  padding: 0 25px;
  margin-block-end: 25px;
`;

const Home = () => {
  return (
    <GamesContainer>
      {gamesData.map((game, index) => {
        const { name, description, year } = game;
        return (
          <GameCard
            key={index}
            name={name}
            description={description}
            year={year}
          />
        )}
      )}
    </GamesContainer>
  )
}

export default Home;