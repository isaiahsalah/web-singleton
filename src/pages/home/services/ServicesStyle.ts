import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const ServicesBox = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  justify-content: center;
  align-content: space-between;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(
    circle at 0% 20%,
    ${Color.secondary},
    ${Color.primary}
  );
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);


  #services-back-image {
    //max-height: 100%;
    opacity: 0.1;
    position: fixed;
    object-fit: cover;
    width: 120%;
    z-index: 0;
    opacity: 0.1;
    top: 0;
  }

  .title-section-back {
    //right: 0;
  }

  .services-list-container {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
  }
  .services-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    width: 60%;
    min-height: 100vh;
    gap: 20px;
  }
  .services-list-item {
    display: flex;
    flex-wrap: wrap;
    align-content:start;
    gap:10px;
    
  }
  .services-list-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    fill: ${Color.alternative};
    //border: 1px solid;
    //border-radius: 25%;
    font-size: 45px;
    width: 50px;
    height: 50px;
    margin-inline: 20px;
  }

  .services-list-item-description {
    display: -webkit-box;
  -webkit-line-clamp: 4; /* Establece el número máximo de líneas */
  -webkit-box-orient: vertical;
  overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.25s;
    text-align: justify;
  }

  @media screen and (max-width: 600px) {
    .services-list {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-content: center;
      width: 100%;
      min-height: 100vh;
      gap: 20px;
    }
    .services-list-item {
      align-items: center;
    }
    .services-list-item-icon{

    }
    .services-list-item-title{
      //width: 100%;
      line-height: 1;
    }
    #services-back-image {
      width: auto;
    height: 100%;
    opacity: 0.1;
    position: fixed;
    object-fit: cover;
    z-index: 0;
    opacity: 0.1;
    top: 0;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .services-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
      width: 100%;
      min-height: 100vh;
      gap: 20px;
    }
    .services-list-item {
      align-items: center;
    }
    #services-back-image {
      width: auto;
    height: 100%;
    opacity: 0.1;
    position: fixed;
    object-fit: cover;
    z-index: 0;
    opacity: 0.1;
    top: 0;
  }

  }

  @media screen and (min-width: 1201px) {
    #services-back-image {

  }
  }
`;
