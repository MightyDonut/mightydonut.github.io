import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialsIcon = ({ style, icon, href }) => {

  const handleClick = () => {
    window.open(href, "_blank", "noreferrer");
  }

  return (
    <Container onClick={handleClick}>
      <FontAwesomeIcon color='#342620' style={style} icon={icon} />
    </Container>
  )
}

export default SocialsIcon

const Container = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  padding: 12px;
` 