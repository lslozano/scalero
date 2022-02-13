import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-image: linear-gradient(to right, #9b247f, #0076c3);
  margin: 0 -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  margin-block-start: auto;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 1rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95px;
  justify-content: space-between;
`;

export const LogoLink = styled.a`
  cursor: pointer;

  img {
    width: 30px;
    filter: invert(100%);
  }
`;