import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 2px solid #0076c3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-block-start: 25px;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 10px 10px 5px #9b247f;
  }
`;

export const CardHeader = styled.div`
  margin-block-end: 25px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Year = styled.p``;

export const CardBody = styled.div`
  margin-block-end: 15px;
`;

export const Description = styled.p`
  line-height: 1.5;
`;

export const CardMetrics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 20px;
`;

export const Rating = styled.p``;

export const ButtonsContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
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

export const ButtonDetail = styled.div`
    border-radius: 20px;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    font-weight: 700;
    padding: 5px 25px;
    align-self: center;
`;
