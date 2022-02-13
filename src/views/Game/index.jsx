import React from 'react'
import { useParams } from 'react-router-dom';
// Components
import VoteButtons from '../../components/VoteButtons';

const Game = (props) => {
  const { gamesState } = props;
  const params = useParams();
  const { game } = params;
  const gameName = game.replace(/-/g, ' ');

  const selectedGame = gamesState.filter(game => game.name === gameName);
  const [gameInformation] = selectedGame;
  console.log(gameInformation);
  const { name, year, description, likes, dislikes, reviews } = gameInformation;

  return (
    <div>
      <p>{name}</p>
      <p>{year}</p>
      <p>{description}</p>
      <p>{likes}</p>
      <p>{dislikes}</p>
      <p>{reviews}</p>
    </div>
  )
};

export default Game;