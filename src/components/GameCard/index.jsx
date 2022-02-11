import React from 'react'
// Styles
import {
  CardContainer, CardHeader, Title, Year, CardBody,
  Description, CardMetrics, Rating, Likes, Dislikes,
} from './styles';

const GameCard = (props) => {
  const {
    name,
    description,
    year,
  } = props;

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
        <Likes onClick={() => console.log('Clicked on like')}>Like</Likes>
        <Dislikes onClick={() => console.log('Clicked on dislike')}>Dislike</Dislikes>
      </CardMetrics>
      <button>View game details</button>
    </CardContainer>
  )
}

export default GameCard;