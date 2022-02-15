import React from 'react';
// Styles
import {
  GameDetailsContainer, DetailsContainer, DetailsHeader, Title,
  Year, DetailsBody, Description, MetricsContainer, Rating,
  Likes, Dislikes,
} from './styles';

const GameDetails = (props) => {
  const { name, year, description, likes, dislikes, rating } = props;
  return (
    <GameDetailsContainer>
      <DetailsContainer>
        <DetailsHeader>
          <Title>{name}</Title>
          <Year>{year}</Year>
        </DetailsHeader>
        <DetailsBody>
          <Description>{description}</Description>
        </DetailsBody>
      </DetailsContainer>
      <MetricsContainer>
        <Rating>Rating: {rating}</Rating>
        <Likes>Likes: {likes}</Likes>
        <Dislikes>Dislikes: {dislikes}</Dislikes>
      </MetricsContainer>
    </GameDetailsContainer>
  )
}

export default GameDetails