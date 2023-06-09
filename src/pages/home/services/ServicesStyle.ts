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
  /*background-image: radial-gradient(
    circle at 90% 90%,
    ${Color.primary},
    ${Color.secondary}
  );*/
  z-index: 1;

  #services-back-image {
    opacity: 1;
    position: absolute;
    z-index: -2;
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
    gap: 20px;
  }
  .services-list-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 25%;
    width: 50px;
    height: 50px;
    font-size: 35px;
  }

  .services-list-item-description {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .services-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
      text-align: center;
      width: 100%;
      min-height: 100vh;
      gap: 20px;
    }
    .services-list-item {
      justify-content: center;
      align-items: center;
    }
    .services-list-item-icon{

    }
    .services-list-item-title{
      //width: 100%;
      line-height: 1;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .services-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
      text-align: center;
      width: 100%;
      min-height: 100vh;
      gap: 20px;
    }
    .services-list-item {
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (min-width: 1201px) {
  }
`;
