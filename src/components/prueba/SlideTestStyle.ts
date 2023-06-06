import { Color, FontSize } from "../../utils/Config";
import styled from 'styled-components'

export const SlideTestBox = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
height: 100vh;

.item-container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  position: relative; 

}
.item-text{
   
  z-index: 1;
text-align: right;
align-items: end;
width: 80%;

}
.item-title{
  font-family: 'Abril Fatface', sans-serif;
  font-size: 7em;

}
.item-description{
  font-size: 0.85em;

}
.item-image{
  z-index: 0;
  opacity: 0.5;
  object-fit: cover;
  width: 85%;
  height: 85%;
  position: absolute;
}

.item-button-container{ 
  display: flex;
  justify-content: right;
}
`