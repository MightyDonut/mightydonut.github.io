import React from 'react';
import styled from "styled-components";

import Hopeless from '../../../images/hopeless.png';
import Barthory from '../../../images/barthory_mansion.png';
import HoldTheL from '../../../images/hold_the_l.jpg';
import Nintendo from '../../../images/nintendo.png';
import SaltyEU from '../../../images/saltyEU.png';
import ftw from '../../../images/ftw.png';


const Portfolio = React.forwardRef((_, ref) => (
  <Container ref={ref}>
    <Title>Portfolio</Title>
    <Subtitle>Paulo Durbeck</Subtitle>
    <Grid>
      <GridItem src={Hopeless} />
      <GridItem src={Barthory} />
      <GridItem src={HoldTheL} />
      <GridItem src={Nintendo} />
      <GridItem src={SaltyEU} />
      <GridItem src={ftw} />
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

const GridItem = styled.img`
  height: 278px;
  width: 450px;
  cursor: pointer;
`
