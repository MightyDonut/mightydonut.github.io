import React from 'react';
import styled from 'styled-components';

import { faLinkedinIn, faFacebookF, faInstagram, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import SocialsIcon from './partials/SocialsIcon';
import TechIcon from './partials/TechIcon';

import Unreal from '../images/unreal.png';
import Unity from '../images/unity.png';
import Photoshop from '../images/photoshop.png';
import HTML5 from '../images/html5.png';
import Illustrator from '../images/illustrator.png';


const Home = () => {
  return (
    <Container>
      {/* TODO: put video in background */}
      <SocialsContainer>
        <SocialsIcon href='http://likedit.com' style={{ width: '20px', height: '20px' }} icon={faLinkedinIn} />
        <SocialsIcon href='http://facebum.com' style={{ width: '14px', height: '30px' }} icon={faFacebookF} />
        <SocialsIcon href='http://instagrog.com' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
        <SocialsIcon href='http://gomgle.com' style={{ width: '18px', height: '18px' }} icon={faGooglePlay} />
      </SocialsContainer>

      <NameTitle>Paulo Durbeck</NameTitle>
      <Subtitle>Game Designer</Subtitle>
      <ViewButton>View my portfolio</ViewButton>

      <SkillsExperience>Skills & Experience</SkillsExperience>
      <SkillsExpSubtitle>Paulo Durbeck</SkillsExpSubtitle>

      <TechContainer>
        <TechIcon src={Unreal} alt="Unreal" />
        <TechIcon src={Unity} alt="Unity" />
        <TechIcon src={Photoshop} alt="Photoshop" />
        <TechIcon src={HTML5} alt="HTML5" />
        <TechIcon src={Illustrator} alt="Illustrator" />
      </TechContainer>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 200vh;
  background-color: #001B28;
  overflow-x: hidden;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 50vh;
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
`

const SkillsExperience = styled.h2`
  color: white;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 300px;
`

const SkillsExpSubtitle = styled.h3`

`

const TechContainer = styled.div`
  max-width: 35vw;
  flex-wrap: wrap;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`