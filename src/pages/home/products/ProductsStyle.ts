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
    z-index: -2;
    opacity: 0.2;
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

    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
  }
  .product-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .product-image-container {
    display: flex;
    width: 40%;
    transition: 0.25s opacity ease-in-out;
    border-radius: 10px;
    position: relative;
    border-radius: 3px;
  }
  .product-image {
    display: flex;
    object-fit: cover;
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
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
  }
  .product-title {
    width: 100%;
  }
  .product-description {
    width: 100%;
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
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .section-title {
    }
  }

  @media screen and (min-width: 1201px) {
  }
`;
