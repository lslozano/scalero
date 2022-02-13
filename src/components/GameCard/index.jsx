import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import {
  CardContainer, CardHeader, Title, Year, CardBody,
  Description, CardMetrics, Rating, Likes, Dislikes,
  ButtonsContainer, ButtonDetail,
} from './styles';
// Assets
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

const GameCard = (props) => {
  const {
    index,
    name,
    description,
    year,
    games,
    setGames,
  } = props;

  const gameUrl = name.replace(/ /g, '-');

  const handleVote = (gamesState, gameKey, vote, setGamesState) => {
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

  return (
    <CardContainer>
      <CardHeader>
        <Title>{name}</Title>
        <Year>{year}</Year>
      </CardHeader>
      <CardBody>
        <Description>{description}</Description>
      </CardBody>
      <CardMetrics>
        <Rating>Rating: 0</Rating>
        <ButtonsContainer>
          <Likes onClick={() => handleVote(games, index, 'likes', setGames)}>
            <img src={like} alt="like-icon"/>
          </Likes>
          <Dislikes onClick={() => handleVote(games, index, 'dislikes', setGames)}>
            <img src={dislike} alt="dislike-icon" />
          </Dislikes>
        </ButtonsContainer>
      </CardMetrics>
      <ButtonDetail>
        <Link to={`/${gameUrl}`}>View game details</Link>
      </ButtonDetail>
    </CardContainer>
  )
}

export default GameCard;