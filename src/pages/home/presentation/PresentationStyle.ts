import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const PresentationBox = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .presentation-backimage {
    position: absolute;
    z-index: -1;
    min-width: 100vw;
    min-height: 100vh;
  }
  .presentation-contend {
    padding: 5%;

    display: grid;
    justify-content: left;
    width: 100%;
    min-height: 100vh;
  }
  .presentation-text {
    gap: 20px;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 60%;
    line-height: 1;
  }
  .presentation-button-container {
    display: flex;
    gap: 20px;
  }
  .presentation-title {
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
