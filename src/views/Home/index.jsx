import React from 'react'
import styled from 'styled-components';
// Components
import GameCard from '../../components/GameCard';
// Styles
import { breakPoints } from '../../breakPoints';

const GamesContainer = styled.div`
  margin: 25px 0;

  div:first-child {
    margin-block-start: 0;
  }

  ${breakPoints.smallTablet} {
    margin: 25px auto;
    max-width: 700px;
  }
`;

const Home = (props) => {
  const { gamesState, setGames } = props;

  return (
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
  )
}

export default Home;