import React from 'react'
import { Link, useParams } from 'react-router-dom';
// Components
import VoteButtons from '../../components/VoteButtons';

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
        <Link to="/">Back home</Link>
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
      <Link to="/">Back home</Link>
      <p>{name}</p>
      <p>{year}</p>
      <p>{description}</p>
      <p>Likes: {likes}</p>
      <p>Dilikes: {dislikes}</p>
      <p>Rating: {rating}</p>
      <VoteButtons
        voted={voted}
        index={indexOfSelectedGame}
        gamesState={gamesState}
        setGames={setGames}
      />
      <p>{reviews}</p>
    </div>
  )
};

export default Game;