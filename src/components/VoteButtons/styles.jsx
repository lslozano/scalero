import styled from 'styled-components';
import { breakPoints } from '../../breakPoints';

export const ButtonsContainer = styled.div.attrs(
  { className: 'likeDislikeButtons' }
)`
  width: 80px;
  display: flex;
  justify-content: space-between;

  ${breakPoints.largeTablet} {
    width: 100px;
  }
`;

export const Voted = styled.p`
  color: #9b247f;
`;

export const Likes = styled.button`
  width: 30px;
  height: 30px;
  background-color: #0076c3;
  border-radius: 50%;
  border: 1px solid #9b247f;

  :hover {
    background-color: #9b247f;
    border-color: #0076c3;
  }

  img {
    filter: invert(100%);
  }

  ${breakPoints.smallTablet} {
    width: 35px;
    height: 35px;
  }

  ${breakPoints.largeTablet} {
    width: 40px;
    height: 40px;
  }
`;

export const Dislikes = styled.button`
  width: 30px;
  height: 30px;
  background-color: #0076c3;
  border-radius: 50%;
  border: 1px solid #9b247f;

  :hover {
    background-color: #9b247f;
    border-color: #0076c3;
  }

  img {
    filter: invert(100%);
  }

  ${breakPoints.smallTablet} {
    width: 35px;
    height: 35px;
  }

  ${breakPoints.largeTablet} {
    width: 40px;
    height: 40px;
  }
`;