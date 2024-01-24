import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialsIcon = ({ style, color, icon, href }) => {

  const handleClick = () => {
    window.open(href, "_blank", "noreferrer");
  }

  return (
    <Container onClick={handleClick}>
      <FontAwesomeIcon style={style} icon={icon} color={color} />
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