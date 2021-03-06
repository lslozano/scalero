import React from 'react';
// Styles
import { ButtonsContainer, Likes, Dislikes } from './styles';
// Assets
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

const VoteButtons = (props) => {
  const {
    voted,
    gamesState,
    gameIndex,
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
  const handleVote = (gameIndex, gamesState, setGames, vote) => {
    const games = [...gamesState];

    let rating;
    const { likes, dislikes } = games[gameIndex];

    if (vote === 'likes') {
      rating = calculateRating(likes + 1, dislikes);
    } else {
      rating = calculateRating(likes, dislikes + 1);
    }

    const game = {
      ...games[gameIndex],
      [vote]: games[gameIndex][vote] + 1,
      rating,
      voted: true,
    }

    games[gameIndex] = game;

    setGames(games);
  }

  // This logic can be applied if we want the user to only vote once
  // if (voted) return <Voted>Thanks for your vote!</Voted>

  return (
    <ButtonsContainer>
      <Likes onClick={() => handleVote(gameIndex, gamesState, setGames, 'likes')}>
        <img src={like} alt="like-icon"/>
      </Likes>
      <Dislikes onClick={() => handleVote(gameIndex, gamesState, setGames, 'dislikes')}>
        <img src={dislike} alt="dislike-icon" />
      </Dislikes>
    </ButtonsContainer>
  )
};

export default VoteButtons;