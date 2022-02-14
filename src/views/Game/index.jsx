import React from 'react'
import { useParams } from 'react-router-dom';
// Components
import VoteButtons from '../../components/VoteButtons';
import BackHome from '../../components/BackHome';
import AddReviewForm from '../../components/AddReviewForm';
import Reviews from '../../components/Reviews';

const Game = (props) => {
  const { gamesState, setGames } = props;
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

  return (
    <div>
      <BackHome />
      <p>{name}</p>
      <p>{year}</p>
      <p>{description}</p>
      <p>Likes: {likes}</p>
      <p>Dilikes: {dislikes}</p>
      <p>Rating: {rating}</p>
      <VoteButtons
        voted={voted}
        gameIndex={indexOfSelectedGame}
        gamesState={gamesState}
        setGames={setGames}
      />
      <AddReviewForm gamesState={gamesState} setGames={setGames} gameIndex={indexOfSelectedGame}/>
      <Reviews reviews={reviews} />
    </div>
  )
};

export default Game;