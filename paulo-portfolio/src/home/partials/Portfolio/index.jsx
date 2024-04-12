import React from 'react';
import styled from "styled-components";

import PortfolioGridItem from '../PortfolioGridItem';

import Hopeless from '../../../images/hopeless.png';
import Barthory from '../../../images/barthory_mansion.png';
import HoldTheL from '../../../images/hold_the_l.jpg';
import Nintendo from '../../../images/nintendo.png';
import SaltyEU from '../../../images/saltyEU.png';
import ftw from '../../../images/ftw.png';


const Portfolio = React.forwardRef((_, ref) => (
  <Container ref={ref}>
    <Title>Portfolio</Title>
    <Subtitle>Paulo Dürbeck</Subtitle>
    <Grid>
      <PortfolioGridItem src={Hopeless}>
        <>
        <p>Currently working on a short indie horror game project with a talented team</p>
        </>
      </PortfolioGridItem>
      <PortfolioGridItem src={Barthory}>
        <>
        <a target="_blank" rel="noreferrer" href={'https://fropplestudios.itch.io/barthory-mansion'} >Link to game</a>
        <p>Game designer for Fropple Studios Barthory Mansion horror game.</p>
        </>
      </PortfolioGridItem>
      <PortfolioGridItem src={HoldTheL}>
        <>
        <a target="_blank" rel="noreferrer" href={' https://www.facebook.com/events/611227272640737/'}>Link to event</a>
        <p>Tournament Organizer for Tekken 7 Tournament "Hold the L"</p>
        </>
      </PortfolioGridItem>
      <PortfolioGridItem src={Nintendo}>
        <p>"Tournament Organizer for Nintendo official events"</p>
      </PortfolioGridItem>
      <PortfolioGridItem src={SaltyEU}>
        <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@TeamSaltyEU'>Link to channel</a>
        <p>"Commentator for Salty EU tournaments and events in Tekken 7 and Dragonball FighterZ (2018-2019)"</p>
      </PortfolioGridItem>
      <PortfolioGridItem src={ftw}>
        <a target="_blank" rel="noreferrer" href='https://ftw.pt/index.php/news/ftw-abre-seccao-e-anuncia-equipa-de-tekken-7'>Link to page</a>
        <p>"Team manager and trainer for Tekken 7, in For The Win eSports Team"</p>
      </PortfolioGridItem>
</Grid> 
  </Container>
));

export default Portfolio;


const Container = styled.div`
  width: 100vw;
  background-color: #F5F3EF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw;
`

const Title = styled.h2`
  color: black;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-bottom: 0px;
`

const Subtitle = styled.h3`
  color: #047BB0;
  font-family: 'Raleway';
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 5px;
  margin-bottom: 5.5vw;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  gap: 15px;
`
