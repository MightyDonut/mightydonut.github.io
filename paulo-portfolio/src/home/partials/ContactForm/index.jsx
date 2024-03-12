import React from 'react';
import styled from "styled-components"

import pfp from '../../../images/pfp.png';



const ContactForm = () => {
  return (
    <Container>
      <Title>about & contact me</Title>
      <Subtitle>Paulo Durbeck</Subtitle>

      <FormContainer>
        <img src={pfp} alt="Paulo Ian Durbeck" />
        <Description>
        My name is Paulo Durbeck, and I am currently a Junior game designer with a Bachelor's in Games and Multimedia. I'm currently working on improving my portfolio by developing prototypes with a small group of talanted individuals during our free time, while seeking for internship opportunities to further enhance my abilities and advance my personal career.
        <br/><br/>
        I've had many connections with the world of games before in various different fields, outside of game development.
        <br/>
        I've organized small tournaments and events before, as well as commentate on various different fighting game tournaments, with the organizers "SaltyEU".
        <br/>
        I have also worked with Nintendo of Portugal, both officially and unofficially in order to organize larger tournaments and other smaller events.
        <br/>
        In the topic of eSports, I have also previously managed a Tekken 7 Competitive team for about a year, being both the team manager as well as the trainer for the players.
        <br/>
        In terms of technology, I work freelance in association with a store in my home town, repairing broken consoles.
        <br/><br/>
        I possess skills in softwares such as Adobe Premiere, Audition, Xd, Photoshop, Maya, Blender, Unreal Engine 4/5, Unity, Excel, Miro and Trello as well as some other flowcharting tools. 
        <br/>
        I've also created a fair amount of Game design documents, and Rational Game Design Documents as well.
        </Description>
        <h2>CONTACT ME</h2>
        <a href="mailto:paulodurbeck.info@gmail.com">paulodurbeck.info@gmail.com</a>
      </FormContainer>
    </Container>
  )
}

export default ContactForm


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vw;
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

const FormContainer = styled.div`
  width: 95vw;
  background-color: #F5F3EF;
  max-width: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 0%;
  margin-top: 10%;
  color: #182934;

  > img {
    height: 200px;
  }

  > a {
    font-family: 'Raleway';
    font-size: 1.2rem;
    font-weight: 700;
    color: #047BB0;
  }
` 

const Description = styled.span`
  margin-top: 5%;
  font-weight: 700;
  letter-spacing: 0.08rem;
  max-width: 70%;
  text-align: left;
`