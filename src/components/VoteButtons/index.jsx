import React from 'react';
// Styles
import { Likes, Dislikes } from './styles';
// Assets
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

const VoteButtons = (props) => {
  const {
    voted,
    gamesState,
    index,
    setGames,
  } = props;

  // Method to determine rating
  const calculateRating = (likes, dislikes) => {
    let rating;
    if (likes === dislikes) return rating = 50;

    rating = ((likes / (dislikes + likes)) * 100);
    return Math.floor(rating);
  }

  // Method to handle Game vote
  const handleVote = (gameKey, gamesState, setGames, vote) => {
    const games = [...gamesState];

    const { likes, dislikes } = games[gameKey];
    const rating = calculateRating(likes, dislikes);

    const game = {
      ...games[gameKey],
      [vote]: games[gameKey][vote] + 1,
      rating,
      voted: true,
    }

    games[gameKey] = game;

    setGames(games);
  }

  // This logic can be applied if we want the user to only vote once
  // if (voted) return <Voted>Thanks for your vote!</Voted>

  return (
    <>
    <Likes onClick={() => handleVote(index, gamesState, setGames, 'likes')}>
      <img src={like} alt="like-icon"/>
    </Likes>
    <Dislikes onClick={() => handleVote(index, gamesState, setGames, 'dislikes')}>
      <img src={dislike} alt="dislike-icon" />
    </Dislikes>
    </>
  )
};

export default VoteButtons;