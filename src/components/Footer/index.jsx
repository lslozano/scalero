import React from 'react'
// Styles
import { FooterContainer, Title, LinksContainer, LogoLink } from './styles';
// Assets
import githubLogo from '../../assets/githubLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Luis Lozano</Title>
      <LinksContainer>
        <LogoLink href="https://www.linkedin.com/in/lslozano">
          <img src={linkedinLogo} alt="linkedin logo" />
        </LogoLink>
        <LogoLink href="https://www.github.com/lslozano">
          <img src={githubLogo} alt="github logo" />
        </LogoLink>
      </LinksContainer>
    </FooterContainer>
  )
}
;
export default Footer;