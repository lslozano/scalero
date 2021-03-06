import styled from 'styled-components';
import { breakPoints } from '../../breakPoints';

export const GameDetailsContainer = styled.div`
`;

export const DetailsContainer = styled.div`
  border: 2px solid #0076c3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-block-start: 25px;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const DetailsHeader = styled.div`
  margin-block-end: 25px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Year = styled.p`
  ${breakPoints.xLargeTablet} {
    font-size: 1.2rem;
  }
`;

export const DetailsBody = styled.div`
  margin-block-end: 15px;
`;

export const Description = styled.p`
  line-height: 1.5;

  ${breakPoints.smallTablet} {
    font-size: 1.1rem;
  }

  ${breakPoints.xLargeTablet} {
    font-size: 1.3rem;
  }
`;

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Rating = styled.p`
  ${breakPoints.smallTablet} {
    font-size: 1.1rem;
  }

  ${breakPoints.xLargeTablet} {
    font-size: 1.3rem;
  }
`;

export const Likes = styled.p`
  ${breakPoints.smallTablet} {
    font-size: 1.1rem;
  }

  ${breakPoints.xLargeTablet} {
    font-size: 1.3rem;
  }
`;

export const Dislikes = styled.p`
  ${breakPoints.smallTablet} {
    font-size: 1.1rem;
  }

  ${breakPoints.xLargeTablet} {
    font-size: 1.3rem;
  }
`;