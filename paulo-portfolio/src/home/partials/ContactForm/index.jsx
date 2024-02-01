import React from 'react';
import styled from "styled-components"




const ContactForm = () => {
  return (
    <Container>
      <Title>about & contact me</Title>
      <Subtitle>Paulo Durbeck</Subtitle>

      <FormContainer>
        WHAT
      </FormContainer>
    </Container>
  )
}

export default ContactForm


const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  max-width: 800px;
` 