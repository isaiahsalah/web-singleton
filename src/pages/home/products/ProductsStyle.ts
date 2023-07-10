import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const ProductBox = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  align-content: space-between;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: ${Color.secondary};
  z-index: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  .product-back-video {
    top: 0;
    bottom: 0;
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: -4;
    opacity: 0.2;
    transition: 0.25s;
  }
  .product-button-pagination {
    filter: grayscale(100);
    transition: filter 0.5s;
    &.active {
      filter: none;
    }
  }

  .title-section-back {
    //transition:  0.25s;
  }
  /*
   @keyframes moveText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }}*/

  .product-list {
    width: 100%;
    display: grid;
    gap: 20px;
    justify-content: center;
    height: 100vh;

    max-width: 1200px;
    //padding: 20px;
    box-sizing: border-box;
  }
  .product-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .product-image-container {
    display: flex;
    width: 40%;
    transition: 0.25s opacity ease-in-out;
    position: relative;
    opacity: 0;
    translate: 100% 0;
    transition: opacity 0.5s, translate 0.5s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .product-image {
    display: flex;
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  .product-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-content: center;
    text-align: left;
    width: 60%;
    padding-inline: 20px;
    box-sizing: border-box;
    gap: 20px;
  }
  .product-class {
    opacity: 0;
    translate: -100% 0;
    transition: opacity 0.5s, translate 0.5s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .product-title {
    width: 100%;
    opacity: 0;
    translate: -100% 0;
    transition: opacity 0.5s 0.1s, translate 0.5s 0.1s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .product-description {
    text-align: justify;
    width: 100%;
    opacity: 0;
    translate: -100% 0;
    transition: opacity 0.5s 0.2s, translate 0.5s 0.2s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .product-button-container {
    display: flex;
    width: 100%;
    opacity: 0;
    translate: -100% 0;
    transition: opacity 0.5s 0.2s, translate 0.5s 0.2s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  .product-module-list {
    display: none;
    //display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 60px));
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 12px;
  }
  .product-module {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 3/2;
    border-radius: 3px;
    //border: 1px solid ${Color.alternative};
    font-size: 30px;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      .product-module-title {
        opacity: 1;
        &:hover {
          transform: scale(1.1);
        }
      }
      .product-module-icon {
        opacity: 0;
      }
    }
  }
  .product-module-title {
    transition: 0.25s;
    position: absolute;
    opacity: 0;
  }
  .product-module:hover {
  }

  .pagination {
    display: flex;
    gap: 30px;
    right: 50%;
    justify-content: center;
    bottom: 20px;
    z-index: 6;

    opacity: 0;
    translate: 0 100%;
    transition: opacity 0.5s, translate 0.5s;
    &.loaded {
      translate: 0 0;
      opacity: 1;
    }
  }
  #pagination button {
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 0;
    margin: 30px 0;
    cursor: pointer;
    position: relative;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    outline: none;
  }
  #pagination button:hover {
    opacity: 0.5;
  }
  #pagination button.active {
    opacity: 1;
  }
  #pagination button.active:before {
    width: 300%;
    height: 300%;
    opacity: 1;
  }
  #pagination button:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out,
      height 0.4s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    .section-title {
    }

    .product-list {
    }

    .product-item {
      position: relative;
    }

    .product-image-container {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .product-image {
      width: 100%;
      height: 100%;

      opacity: 0.2;
    }
    .product-info {
      padding: 20px;
      width: 100%;
      max-width: 100vw;
      text-align: center;
      justify-content: center;
    }
    .product-module-list {
      //display: flex;
      display: none;
      overflow-x: auto;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      gap: 12px;
    }
    .product-module {
      width: 10px;
    }
    .product-button-container {
      justify-content: center;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .section-title {
    }
  }

  @media screen and (min-width: 1201px) {
  }
`;
