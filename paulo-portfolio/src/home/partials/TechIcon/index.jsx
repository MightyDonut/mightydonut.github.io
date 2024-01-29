import styled from "styled-components"



const TechIcon = ({ alt, src, onClick }) => {

  return (
    <Container onClick={onClick}>
      <Hexagon><RoundedSquare /><RoundedSquare /><RoundedSquare /></Hexagon>
      <img src={src} alt={alt} />
    </Container>

  )
}


export default TechIcon;


const Container = styled.div`
  height: 118px;
  width: 118px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    position: relative;
    max-height: 70px;
    max-width: 70px;
    z-index: 2;
  }
`

const Hexagon = styled.div`
  position: relative;
  bottom: 40%;
  left: 3%;

  :nth-child(2) {
    transform: rotate(60deg); 
  }

  :nth-child(3) {
    transform: rotate(-60deg); 
  }
`

const RoundedSquare = styled.div`
  position: absolute;
  background-color: white;
  width: 63px;  
  height: 100px;
  border-radius: 10px; 
`