import styled from 'styled-components';
import { breakPoints } from '../../breakPoints';

export const ReviewContainer = styled.div`
  border: 2px solid #0076c3;
  border-radius: 10px;
  margin: 25px 0;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  p {
    line-height: 1.5rem;
  }

  ${breakPoints.smallTablet} {
    p {
      font-size: 1.1rem;
    }
  }

  ${breakPoints.xLargeTablet} {
    p {
      font-size: 1.5rem;
    }
  }
`;