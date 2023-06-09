import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const PresentationBox = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

/*
  background-image: radial-gradient(
      circle at 90% 90%,
      ${Color.primary},
      ${Color.secondary}
    );*/



  #presentation-back-image {
    position: absolute;
    opacity: 0.4;
    z-index: -1;
    transition: .25s;


  }
  .presentation-contend {

    z-index: 0;

    display: grid;
    justify-content: left;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    min-height: 100vh;
  }
  .presentation-text {
    gap: 20px;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 60%;
    
  }
  .presentation-button-container {
    display: flex;
    gap: 20px;
  }
  .presentation-title {
    line-height: 1;
  }
  .presentation-description {
  }









  
  @media screen and (max-width: 600px) {

    .presentation-text {
      text-align: center;
      width: 100%;
    }
    .presentation-button-container {
      width: 100%;
      justify-content: center;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .presentation-text {
      width: 80%;
    }  
}

  @media screen and (min-width: 1201px) {
  }
`;
