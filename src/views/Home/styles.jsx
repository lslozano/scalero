import styled from 'styled-components';
import { breakPoints } from '../../breakPoints';

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.theme.flexDirection.gamesContainer};
  flex-wrap: ${props => props.theme.flexWrap.gamesContainer};
  justify-content: ${props => props.theme.justifyContent.gamesContainer};
  margin: 0 auto 25px;

  ${breakPoints.smallTablet} {
    max-width: 700px;
  }
`;

export const ViewButton = styled.button`
  border-radius: 20px;
  border: 1px solid #0076c3;
  background-color: #0076c3;
  font-weight: 700;
  padding: 5px 25px;
  align-self: flex-end;
  color: #fff;
  margin-block-start: 25px;
`;