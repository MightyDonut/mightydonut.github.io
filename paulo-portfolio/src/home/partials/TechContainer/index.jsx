import { useState } from "react"

import TechIcon from '../TechIcon';

import Unreal from '../../../images/unreal.png';
import UnrealS from '../../../images/unrealsmall.png';
import Unity from '../../../images/unity.png';
import UnityS from '../../../images/unitysmall.png';
import Photoshop from '../../../images/photoshop.png';
import Excel from  '../../../images/excel.png';
import Xd from '../../../images/xd.png';
import Premiere from '../../../images/premiere.png';
import Audition from '../../../images/audition.png';
import CardBg from '../../../images/cardbg.png'
import styled from "styled-components";


const infos = {
  "Unreal": {
    image: Unreal,
    content:
      <>
        <li>3D Game Dev</li>
        <li>In engine blockouts (Grayboxing)</li>
        <li>Simple blueprints</li>
        <li>Particle System (Niagara)</li>
        <li>Level Design</li>
      </>,
  },
  "Unity": {
    image: Unity,
    content:
      <>
        <li>2D Game Dev</li>
        <li>3D Game Dev</li>
        <li>In engine blockouts</li>
        <li>Simple C#</li>
        <li>Level Design</li>
      </>
  },
  "Photoshop": {
    image: Photoshop,
    content:
      <>
        <li>Image edits and corrections</li>
        <li>Intermediate to Advanced Software knowledge</li>
      </>
  },
  "Excel": {
    image: Excel,
    content:
      <>
        <li>Rational Game Design</li>
        <li>Dealing with Data and formatting</li>
        <li>Formulas and Functions</li>
      </>
  },
  "Xd": {
    image: Xd,
    content:
      <>
        <li>UX Design for great player experience</li>
        <li>UI Design implementation</li>
      </>
  },
  "Premiere": {
    image: Premiere,
    content:
      <>
        <li>Video assembly</li>
        <li>Experienced editing</li>
        <li>Image correction</li>
      </>
  },
  "Audition": {
    image: Audition,
    content:
      <>
        <li>Simple Audio Edits</li>
        <li>Sound creation from scratch</li>
        <li>Audio corrections</li>
      </>
  },
}

const TechContainer = () => {
  const [view, setView] = useState(null);

  const handleClick = item => {
    setView(infos[item]);
  }


  return (
    <Container>
      <Slider $isviewing={view !== null}>
        <Buttons>-
          <Title>Skills & Experience</Title>
          <Subtitle>Paulo Durbeck</Subtitle>
          <HexagonContainer>
            <TechIcon onClick={() => handleClick("Unreal")} src={UnrealS} alt="Unreal" />
            <TechIcon onClick={() => handleClick("Unity")} src={UnityS} alt="Unity" />
            <TechIcon onClick={() => handleClick("Photoshop")} src={Photoshop} alt="Photoshop" />
            <TechIcon onClick={() => handleClick("Excel")} src={Excel} alt="Excel" />
            <TechIcon onClick={() => handleClick("Xd")} src={Xd} alt="xd" />
            <TechIcon onClick={() => handleClick("Premiere")} src={Premiere} alt="premiere" />
            <TechIcon onClick={() => handleClick("Audition")} src={Audition} alt="audition" />
          </HexagonContainer>
        </Buttons>
        <CardContainer onClick={() =>
          setView(null)
        } >
          <ClickBG onClick={() =>
            setView(null)
          } />
          <Card onClick={(e) => e.stopPropagation()}>
            <img src={view?.image || ""} alt={view || ""} />
            <ul>
              {view?.content || null}
            </ul>
          </Card>
        </CardContainer>
      </Slider>
    </Container>
  )
}

export default TechContainer;

const Container = styled.div`
  overflow-x: hidden;
  height: 700px;
`

const Title = styled.h2`
  color: white;
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
  margin-bottom: 40px;
`

const Slider = styled.div`
  position: absolute;
  width: 200vw;
  display: flex;
  left: ${({ $isviewing }) => $isviewing ? '-101vw' : '-1vw'};

  transition: left 0.5s ease-in-out;

  > :nth-child(1) {
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ $isviewing }) => $isviewing ? '0' : '100'};
  }

  > :nth-child(2) {
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ $isviewing }) => $isviewing ? '100' : '0'};
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const HexagonContainer = styled.div`
  max-width: 35vw;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const CardContainer = styled.div`
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
`

const ClickBG = styled.div`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
`

const Card = styled.div`
  z-index: 1;
  width: 95%;
  max-width: 780px;
  height: 100%;
  max-height: 406px;
  background-color: #F5F3EF;
  display: flex;
  align-items: center;
  background: url(${CardBg});
  background-size: cover;
  
  > img {
    height: 200px;
    margin-left: 3%;
  }

  > ul {
    font-size: 1.7rem;
    font-family: 'Raleway';
    font-weight: 750;
    text-align: left;
    letter-spacing: 0.2rem;
    margin-left: 12%;

    > li::marker {
      content: "//";
      font-weight: 800;
      color: #00A2E9;
    }

  }
`
