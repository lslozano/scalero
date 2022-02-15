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