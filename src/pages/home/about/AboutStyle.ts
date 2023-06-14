import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const AboutBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: space-between;
  justify-content: center;
  position: relative;
  gap: 60px;
  overflow: hidden;

  .title {
    font-family: "Abril Fatface";
  }

  .about-section {
    display: flex;
    width: 100%;
    max-width: 1200px;
  }
  .about-contend {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .title-section {
    width: 100%;
  }
  .line-container {
    display: flex;
    justify-content: center;
    height: 20em;
    width: 10%;
  }
  .line {
    height: 100%;
    width: 2px;
    background-color: ${Color.alternative};
    border-radius: 4px;
  }

  .text {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }
  .technologies-container {
    width: 50%;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .text-experience {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 20px;
  }
  .experience-year {
    width: 50%;
    font-family: "Abril Fatface";
    text-align: right;
    font-size: 10em;
    line-height: 1;
  }
  .experience-year-about {
    width: 50%;
    font-family: "Bebas Neue";
    font-size: 1.5em;
    text-align: left;
    //padding: 50px 0;
    line-height: 1em;
    margin-bottom: 20px;
  }
  .text-description {
    //font-size: 0.85em;
  }

  .technologies-title {
    width: 100%;
    //font-size: 0.85em;
  }
  .technologies-icon {
    display: flex;
    font-size: 3.5em;
  }
  .technologies-name {
    //font-size: 0.85em;
  }
  .technologies-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .technologies {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  .about-data-list-container {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);

    overflow: hidden;
    display: grid;
    justify-content: center;
    width: 100%;
    background-color: ${Color.primary};
  }
  .about-data-list {
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 100%;
    //max-width: 1200px;
    grid-auto-flow: column;

    grid-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
  }
  .about-data-line {
    border-radius: 5px;
    width: 3px;
    height: 100%;
    background-color: ${Color.alternative};
  }
  .about-data-item-container{
    display: flex;
    justify-content: space-around;
    gap: 20px;
    //padding: 10px;
    box-sizing: border-box;

  }
  .about-data-item {
    display: grid;
    gap: 10px;
  }
  .about-data-title {
    line-height: 1;
  }
  .about-data-description {
    display: flex;
    line-height: 1.1;
  }
  /*
  .team-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
  }
  .team-title {
    width: 100%;
    padding: 50px 0;
  }
  .team {
    display: grid;
    grid-template-columns: 1fr ;
    width: 100%;
  }
  .team-item {
    grid-column: 1fr;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 0;
  }

  .team-text{
    position: relative;
display: grid;
align-content: center;
text-align: right;
padding: 10px 10px 10px 20%;
  }
  .team-image {
    grid-column: 1fr;
    width: 100%;
    opacity: 0.5;
    aspect-ratio: 4/5;
  }

  .team-name {
    width: 100%;
    font-family: "Abril Fatface";
    //font-size: 3em;
  }

  .team-description{
    //font-size: .85em;
    color: ${Color.alternative};

  }
  .team-position {
    //font-size: .8em;
    color: ${Color.active};
  }
  .team-social{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 12px;
    padding: 8px;
  }
  .team-social-item{
    font-size: 1.25em;
  }
  .comilla{
    position: absolute;
    font-family: "Abril Fatface";
    opacity: .2;
    font-size: 30em;  
    top: -20%;

    }*/
  @media screen and (max-width: 600px) {
    .about-section {
      width: 100%;
    }
    .about-contend {
      flex-wrap: wrap;
    }
    .text {
      width: 90%;
    }
    .technologies-container {
      width: 90%;
    }
    .text-experience {
      width: 100%;
    }
    .about-data-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: row;

    }
    .about-data-line {
      display: none;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .about-section {
      width: 100%;
    }
    .about-data-line {
      display: none;
    }
    .about-data-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: row;

    }
  }

  @media screen and (min-width: 1201px) {
  }
`;
