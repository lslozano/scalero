import React from 'react'
import { Link } from 'react-router-dom';
// Components
import VoteButtons from '../VoteButtons';
// Styles
import {
  CardContainer, CardHeader, Title, Year, CardBody,
  Description, CardMetrics, Rating, ButtonsContainer, ButtonDetail,
} from './styles';

const GameCard = (props) => {
  const {
    index,
    name,
    description,
    voted,
    year,
    rating,
    gamesState,
    setGames,
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
        <Rating>Rating: {rating}</Rating>
        <ButtonsContainer>
          <VoteButtons
            voted={voted}
            index={index}
            gamesState={gamesState}
            setGames={setGames}
          />
        </ButtonsContainer>
      </CardMetrics>
      <ButtonDetail>
        <Link to={`/${gameUrl}`}>View game details</Link>
      </ButtonDetail>
    </CardContainer>
  )
}

export default GameCard;