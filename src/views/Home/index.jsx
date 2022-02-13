import React from 'react'
import styled from 'styled-components';
// Components
import GameCard from '../../components/GameCard';

const GamesContainer = styled.div`
  padding: 0 25px;
  margin-block-end: 25px;
`;

const Home = (props) => {
  const { gamesState, setGames } = props;

  return (
    <GamesContainer>
      {gamesState.map((game, index) => {
        const { name, description, voted, year } = game;
        return (
          <GameCard
            key={index}
            index={index}
            name={name}
            description={description}
            voted={voted}
            year={year}
            gamesState={gamesState}
            setGames={setGames}
          />
        )}
      )}
    </GamesContainer>
  )
}

export default Home;