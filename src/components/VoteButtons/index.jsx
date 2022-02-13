import React from 'react';
// Styles
import { Voted, Likes, Dislikes } from './styles';
// Assets
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

const VoteButtons = (props) => {
  const {
    voted,
    games,
    index,
    setGames,
  } = props;

  const handleVote = (gameKey, gamesState, setGamesState, vote) => {
    const games = [...gamesState];
    const game = {
      ...games[gameKey],
      [vote]: games[gameKey][vote] + 1,
      voted: true,
    }
    games[gameKey] = game;
    console.log(games);
    setGamesState(games);
  }

  if (voted) return <Voted>Thanks for your vote!</Voted>

  return (
    <>
    <Likes onClick={() => handleVote(index, games, setGames, 'likes')}>
      <img src={like} alt="like-icon"/>
    </Likes>
    <Dislikes onClick={() => handleVote(index, games, setGames, 'dislikes')}>
      <img src={dislike} alt="dislike-icon" />
    </Dislikes>
    </>
  )
};

export default VoteButtons;