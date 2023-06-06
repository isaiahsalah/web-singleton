import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const SlideBox = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;

  .products-list {
    display: grid;
    background-color: ${Color.background};
    height: 50%;
    overflow: hidden;
  }
  .product-item {
    height: 100%;
    position: relative;
    grid-column: 1fr;
    z-index: 3;
    opacity: .3;
    transition: all 0.2s;
    &:hover {
    //position: absolute;
    //width: 100%;
      opacity: 1;
      .product-info {
        opacity: 1;
      }
      .product-image {
        filter: saturate(0.5);
      }
      .product-title{
        //mix-blend-mode: saturation;
      }
    }
  }
  .product-info {
    opacity: 0;

    padding: 40px;
    text-align: right;
  }
  .product-item {
   
    width: 100%;
  }
  .product-title {
    font-size: ${FontSize.bigSubTitle1};
    //filter: grayscale(100);
    //filter: saturate(0);
    //mix-blend-mode: lighten;
    width: 100%;
  }

  .product-title:hover {
  }

  .product-description {

    font-size: ${FontSize.description1};
  }
  .product-button-container {

    display: flex;
    justify-content: right;
  }

  .product-image {
    position: absolute;
    z-index: -1;
    height: 85vh;
    width: 100%;
    object-fit: cover;
    filter: saturate(.5);
    opacity: .5;
  }
`;
