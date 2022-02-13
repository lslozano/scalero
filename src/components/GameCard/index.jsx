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
    name,
    description,
    year,
  } = props;

  const gameUrl = name.replace(/ /g, '-');

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
          <Likes onClick={() => console.log('Clicked on like')}>
            <img src={like} alt="like-icon"/>
          </Likes>
          <Dislikes onClick={() => console.log('Clicked on dislike')}>
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