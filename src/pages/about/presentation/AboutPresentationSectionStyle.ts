import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const AboutPresentationSectionBox = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  #about-back-image {
    position: fixed;
    opacity: 0.4;
    z-index: -1;
    transition: 0.25s;
  }
  .about-contend {
    z-index: 0;

    display: grid;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    min-height: 100vh;
  }
  
  .about-text {
    gap: 20px;
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 60%;
    
  }
  .about-button-container {
    justify-content: center;
    display: flex;
    gap: 20px;
  }
`;
