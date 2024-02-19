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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Description>
        <h2>CONTACT ME</h2>

        <FormBottom>
        
        </FormBottom>
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
    height: 150px;
  }
` 

const Description = styled.span`
  margin-top: 5%;
  font-weight: 700;
  letter-spacing: 0.08rem;
  max-width: 70%;
  text-align: left;
`

const FormBottom = styled.div`
  display: flex;
`