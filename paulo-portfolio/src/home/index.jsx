import React from 'react';
import styled from 'styled-components';

import { faLinkedinIn, faFacebookF, faInstagram, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import SocialsIcon from './partials/socialsIcon';

const Home = () => {
  return (
    <Container>
      {/* TODO: put video in background */}
      <SocialsContainer>
        <SocialsIcon href='http://likedit.com' style={{ width: '20px', height: '20px' }} icon={faLinkedinIn} color='#342620' />
        <SocialsIcon href='http://facebum.com' style={{ width: '14px', height: '30px' }} icon={faFacebookF} color='#342620' />
        <SocialsIcon href='http://instagrog.com' style={{ width: '20px', height: '20px' }} icon={faInstagram} color='#342620' />
        <SocialsIcon href='http://gomgle.com' style={{ width: '18px', height: '18px' }} icon={faGooglePlay} color='#342620' />
      </SocialsContainer>

      <NameTitle>Paulo Durbeck</NameTitle>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #001B28;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`

const NameTitle = styled.h1`
  font-family: 'Raleway';
  color: white;
  text-transform: uppercase;
`



