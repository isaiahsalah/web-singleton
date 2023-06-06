import { Color } from "../../utils/Config";
import styled from "styled-components";

export const SlideDinamicBox = styled.div`
  width: 100vw;
  display: grid;
  align-items: center;

  .products-list {
    display: grid;
  }
  .product-item {
    position: relative;
    grid-column: 1fr;
    z-index: 3;
    opacity: 1;
    transition: all 0.2s;
    &:hover {
    //position: absolute;
    //width: 100%;
      opacity: 1;
      .product-image {
        filter: saturate(0.5);
      }
      .product-title{
        mix-blend-mode: saturation;
      }
    }
  }
  .product-info {
    opacity: 0;
    position: absolute;
    bottom: 50px;
    padding: 0px 50px;
    text-align: right;
  }
  .product-item {
    width: 100%;
  }
  .product-title {
    //filter: grayscale(100);
    //filter: saturate(0);
    //mix-blend-mode: lighten;
    width: 100%;
  }

  .product-title:hover {
  }

  .product-description {
  }
  .product-button-container {
    display: flex;
    justify-content: right;
  }

  .product-image {
    height: 85vh;
    width: 100%;
    object-fit: cover;
    filter: saturate(0) brightness(0.5);
    opacity: 1;
    border-radius: 0;
  }
`;
