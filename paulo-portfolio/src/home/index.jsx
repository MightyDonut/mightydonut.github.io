import React from 'react';
import styled from 'styled-components';

import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import SocialsIcon from './partials/SocialsIcon';
import TechContainer from './partials/TechContainer';
import Portfolio from './partials/Portfolio';
import ContactForm from './partials/ContactForm';
import PortfolioVideo from '../video/port2.mp4';

const Home = () => {
  const portfolioRef = React.useRef(null);

  return (
    <>
    
    <Video autoPlay playsInline muted loop>
        <source src={PortfolioVideo} type="video/mp4"/>
      </Video>
    <Container>
      <SocialsContainer>
        <SocialsIcon href='https://www.linkedin.com/in/paulo-durbeck-4b3a591b9/' style={{ width: '20px', height: '20px' }} icon={faLinkedinIn} />
        <SocialsIcon href='http://facebook.com' style={{ width: '14px', height: '30px' }} icon={faFacebookF} />
        <SocialsIcon href='https://www.instagram.com/paulo_durbeck.official/' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
        <SocialsIcon href='https://twitter.com/P_Dürbeck_inf' style={{ width: '18px', height: '18px' }} icon={faXTwitter} />
      </SocialsContainer>

      <RestContainer>
      <NameTitle>Paulo Dürbeck</NameTitle>
      <Subtitle>Game Designer</Subtitle>
      <ViewButton onClick={() => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })}>View my portfolio</ViewButton>

      <TechContainer />

      <Portfolio ref={portfolioRef} />

      <ContactForm />
      </RestContainer>

    </Container>
    </>
  )
}

export default Home;

const Video = styled.video`
  position: absolute;
  bottom: 30%;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
`

const Container = styled.div`
  margin-top: 5%;
  height: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

`

const SocialsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px 24px 3px 24px;
  margin-top: 45vh;
  margin-bottom: -1px;
  background-image: linear-gradient(transparent, #001B28, #001B28);
`

const RestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001B28;
  padding-top: 60px;
`

const NameTitle = styled.h1`
  width: 100%;
  color: white;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 3.5rem;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: #001B28;
`

const Subtitle = styled.h2`
  color: #047BB0;
  font-family: 'Raleway';
  font-size: 1.6rem;
  margin-bottom: 70px;
  margin-top: 2px;
  font-weight: 200;
  letter-spacing: 8px;
`

const ViewButton = styled.button`
  background: transparent;
  border: 1px solid white;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1.6rem;
  color: white;
  padding: 8px;
  cursor: pointer;
  max-width: 400px;

  margin-bottom: 60px;
`

