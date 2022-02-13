import styled from 'styled-components';

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
`;