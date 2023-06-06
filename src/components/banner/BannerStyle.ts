import { Color } from "../../utils/Config";
import styled from "styled-components";

export const BannerBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //background-color: ${Color.secondary};
    align-items: center;
    max-width: 1200px;
    width: 90vw;
    height: 75vh;
  }
  .item-backimage-container {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .item-backimage {
    z-index: -1;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: brightness(0.5);
    transition: opacity 1s 0.2s, translate 1s 0.2s, filter 1s 0.2s,
      transform 0.2s;
    translate: 0 100vh;
    transform: scale(0.9);
    &.loaded {
      translate: 0 0;
      transform: scale(1);
      opacity: 1;
      filter: brightness(0.4);
    }
  }

  .item-images {
    position: relative;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }
  .item-secondimage-container {
    width: 70%;
    height: 70%;
    display: flex;
    background-color: ${Color.secondary};

    align-items: center;
    translate: -100vw 0;

    transition: opacity 1s 0.1s, translate 1s 0.1s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }

  .item-secondimage {
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
  }

  .item-logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    background-color: ${Color.secondary};

    align-items: center;
    width: 40%;
    height: 40%;
    translate: -100vw 0;
    cursor: pointer;
    transition: opacity 1s 0.3s, translate 1s 0.3s, transform 0.5s, filter 0.5s;
    //filter: saturate(0);
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
    &:hover {
      //filter: saturate(1);
      transform: scale(1.1);
    }
  }

  .item-logo {
    height: 100%;
    width: 100%;
    opacity: 1;
    object-fit: cover;
    background-color: ${Color.secondary};
  }

  .item-info {
    display: grid;
    box-sizing: border-box;
    width: 50%;
    padding: 5%;
    text-align: right;
    color: ${Color.alternative};
  }

  .item-item {
    color: ${Color.alternative};
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s, translate 0.8s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-title {
    //font-family: "Merriweather";
    font-family: "Abril Fatface", sans-serif;

    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s 0.2s, translate 0.8s 0.2s;

    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-title-variant {
    font-family: "Bebas Neue";
    position: absolute;
    left: 15%;
    top: 50%;
    transform: rotate(270deg);
    color: ${Color.alternative};
    font-weight: bold;
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.8s 0.2s, filter 0.8s 0.2s;

    &.loaded {
      filter: blur(0px);
      opacity: 0.5;
    }
  }
  .item-description {
    color: ${Color.alternative};
    width: 100%;
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 0.8s 0.4s, translate 0.8s 0.4s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .item-button {
    margin: 20px 0px;
    opacity: 0;
    translate: 100vw 0;
    transition: opacity 1s 0.6s, translate 1s 0.6s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    .item-info{
      position:static;
      width: 100%;
    }
    .slide-container{
    }
    .item-title-variant{
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
      position: absolute;
      display: flex;
    }
    .item-title-variant-container{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
    }
    .item-images {
      position: static;
      width: auto;
      height: auto;
      display: grid;
  }
  .item-secondimage-container{
    display: none;;

  }
  .item-logo-container{
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    top: 5%;
    left: 5%;

    
  }
  .item-logo{
    width: 100%;
    height: 100%;
    
  }
  
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .contact {
  }
  }

  @media screen and (min-width: 1201px) {
    .contact {
  }
  }
`;
