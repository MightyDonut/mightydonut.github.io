import { useState } from "react"

import TechIcon from '../TechIcon';

import Unreal from '../../../images/unreal.png';
import Unity from '../../../images/unity.png';
import Photoshop from '../../../images/photoshop.png';
import HTML5 from '../../../images/html5.png';
import Illustrator from '../../../images/illustrator.png';
import styled from "styled-components";


const infos = {
  "Unreal": {
    image: Unreal,
    content:
      <>
        <li>Environment</li>
        <li>Blueprints</li>
        <li>Full Game Development</li>
        <li>C++</li>
        <li>Light</li>
        <li>RealTime Render</li>
      </>,
  },
  "Unity": {
    image: Unity,
    content:
      <>
        <li>Environment</li>
        <li>Blueprints</li>
        <li>Full Game Development</li>
        <li>C++</li>
        <li>Light</li>
        <li>RealTime Render</li>
      </>
  }
}

const TechContainer = () => {
  const [view, setView] = useState(null);

  const handleClick = item => {
    setView(infos[item]);
  }


  return (
    <Container>
      <Slider $isviewing={view !== null}>
        <Buttons>
          <SkillsExperience>Skills & Experience</SkillsExperience>
          <SkillsExpSubtitle>Paulo Durbeck</SkillsExpSubtitle>
          <HexagonContainer>
            <TechIcon onClick={() => handleClick("Unreal")} src={Unreal} alt="Unreal" />
            <TechIcon onClick={() => handleClick("Unity")} src={Unity} alt="Unity" />
            <TechIcon onClick={() => handleClick("Photoshop")} src={Photoshop} alt="Photoshop" />
            <TechIcon onClick={() => handleClick("HTML5")} src={HTML5} alt="HTML5" />
            <TechIcon onClick={() => handleClick("Illustrator")} src={Illustrator} alt="Illustrator" />
          </HexagonContainer>
        </Buttons>
        <CardContainer onClick={() =>
          setView(null)
        }>
          <Card onClick={(e) => e.stopPropagation()}>
            {view?.content || null}
          </Card>
        </CardContainer>
      </Slider>
    </Container>
  )
}

export default TechContainer;

const Container = styled.div`
  overflow-x: hidden;
`


const SkillsExperience = styled.h2`
  color: white;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-bottom: 0px;
`

const SkillsExpSubtitle = styled.h3`
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
  left: ${({ $isviewing }) => $isviewing ? '-100vw' : '0vw'};

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

const Card = styled.div`
  width: 95%;
  max-width: 780px;
  height: 95%;
  background-color: white;
` 