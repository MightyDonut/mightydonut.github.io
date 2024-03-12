import React from 'react';
import styled from 'styled-components';

import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import SocialsIcon from './partials/SocialsIcon';
import TechContainer from './partials/TechContainer';
import Portfolio from './partials/Portfolio';
import ContactForm from './partials/ContactForm';

const Home = () => {
  const portfolioRef = React.useRef(null);

  return (
    <Container>
      {/* TODO: put video in background */}
      <SocialsContainer>
        <SocialsIcon href='https://www.linkedin.com/in/paulo-durbeck-4b3a591b9/' style={{ width: '20px', height: '20px' }} icon={faLinkedinIn} />
        <SocialsIcon href='http://facebook.com' style={{ width: '14px', height: '30px' }} icon={faFacebookF} />
        <SocialsIcon href='https://www.instagram.com/paulo_durbeck.official/' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
        <SocialsIcon href='https://twitter.com/P_Durbeck_inf' style={{ width: '18px', height: '18px' }} icon={faXTwitter} />
      </SocialsContainer>

      <NameTitle>Paulo Durbeck</NameTitle>
      <Subtitle>Game Designer</Subtitle>
      <ViewButton onClick={() => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })}>View my portfolio</ViewButton>

      <TechContainer />

      <Portfolio ref={portfolioRef} />

      <ContactForm />

    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 45vh;
`

const NameTitle = styled.h1`
  color: white;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 3.5rem;
  margin-bottom: 0;
  margin-top: 50px;
`

const Subtitle = styled.h2`
  color: #047BB0;
  font-family: 'Raleway';
  font-size: 1.6rem;
  margin-bottom: 100px;
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

  margin-bottom: 30px;
`

