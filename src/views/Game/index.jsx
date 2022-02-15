import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
// Styles
import styled from 'styled-components';
import { breakPoints } from '../../breakPoints';
// Components
import GameDetails from '../../components/GameDetails';
import VoteButtons from '../../components/VoteButtons';
import BackHome from '../../components/BackHome';
import AddReviewForm from '../../components/AddReviewForm';
import Reviews from '../../components/Reviews';

const DetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  position: relative;
  width: 100%;

  a {
    color: #0076c3;
    text-decoration: none;
  }

  .likeDislikeButtons {
    align-self: center;
  }

  ${breakPoints.xLargeTablet} {
    margin: 0 auto;
    width: 700px;
  }
`;

const FormButton = styled.div`
  border-radius: 20px;
  border: 1px solid #0076c3;
  background-color: #0076c3;
  font-weight: 700;
  padding: 5px 25px;
  align-self: center;
  color: #fff;
  margin: 25px 0;

  ${breakPoints.xLargeTablet} {
    font-size: 1.2rem;
  }
`;

const Game = (props) => {
  const { gamesState, setGames } = props;
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const params = useParams();
  const { game } = params;
  const gameName = game.replace(/-/g, ' ');
  const selectedGame = gamesState.filter(game => game.name === gameName)

  const [gameInformation] = selectedGame;

  if (gameInformation === undefined) {
    return (
      <>
        <BackHome />
        <p>Game not available in library</p>
      </>
    );
  };

  const indexOfSelectedGame = gamesState.findIndex(game => game.name === gameInformation.name);
  const {
    name,
    year,
    description,
    voted,
    likes,
    dislikes,
    rating,
    reviews,
  } = gameInformation;

  const toggleReviewForm = () => setReviewFormOpen(!reviewFormOpen);

  return (
    <DetailsMainContainer>
      <BackHome />
      <GameDetails
        name={name}
        year={year}
        description={description}
        likes={likes}
        dislikes={dislikes}
        rating={rating}
      />
      <VoteButtons
        voted={voted}
        gameIndex={indexOfSelectedGame}
        gamesState={gamesState}
        setGames={setGames}
      />
      <FormButton onClick={toggleReviewForm}>Write a review!</FormButton>
      {reviewFormOpen &&
        <AddReviewForm
          gamesState={gamesState}
          setGames={setGames}
          gameIndex={indexOfSelectedGame}
          closeForm={toggleReviewForm}
        />
      }
      <Reviews reviews={reviews} />
    </DetailsMainContainer>
  )
};

export default Game;