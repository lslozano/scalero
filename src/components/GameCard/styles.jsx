import styled from 'styled-components';
import { breakPoints} from '../../breakPoints';

export const CardContainer = styled.div.attrs({
  className: 'cardContainer',
})`
  border: 2px solid #0076c3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-block-start: 25px;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 10px 10px 5px #9b247f;
  }

  ${breakPoints.largeTablet} {
    width: ${props => props.theme.width.gameCard};
  }
`;

export const CardHeader = styled.div`
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

export const CardBody = styled.div`
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

export const CardMetrics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 20px;
`;

export const Rating = styled.p`
  ${breakPoints.smallTablet} {
    font-size: 1.1rem;
  }

  ${breakPoints.xLargeTablet} {
    font-size: 1.3rem;
  }
`;

export const ButtonDetail = styled.div`
  border-radius: 20px;
  border: 1px solid #0076c3;
  background-color: #0076c3;
  font-weight: 700;
  padding: 5px 25px;
  align-self: center;

  a {
    color: white;
    text-decoration: none;
  };

  ${breakPoints.xLargeTablet} {
    a {
      font-size: 1.2rem;
    }
  }
`;
