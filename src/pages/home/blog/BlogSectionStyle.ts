import { Color } from "../../../utils/Config";
import styled from "styled-components";

export const BlogSectionBox = styled.div`
position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  width: 100vw;

  .icon-navigate {
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    transition: 0.25s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .blog-list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 70%;
    max-width: 1000px;
  }



  .blog-item {
    //overflow: hidden;
    
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align:center;

    grid-column: 1fr;
    position: relative;

    gap: 20px;
  }
  .blog-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-family: "Abril Fatface";
  }

  .blog-button-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blog-item-text {
    padding:10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    order: 3;
    bottom: 50px;
  }

  .blog-item-text-bottom {
    order: 3;
  }

  .blog-item-text-top {
    order: 1;
  }

  .blog-image-container {
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    order: 2;
    z-index: -1;
    width: 100%;
    aspect-ratio: 3/1;
    background-color: ${Color.secondary};
  }

  .blog-image {
    position: absolute;
    top: 0;
    object-fit: cover;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    //border-radius: 5px;
  }
  .blog-content {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* ajusta el número de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .section-title-text {
    text-align: left;
  }

  .line-horizontal {
    height: 2px;
    width: 100vw;
    max-width: 1000px;
    border-radius: 5px;
    background-color: ${Color.alternative};
  }
  

  .section-title-description {
    width: 60%;
    text-align: left;
  }

  
  @media screen and (max-width: 600px) {
      .blog-list-container {
        width: 100%;

  }
  .blog-list{
    padding:20px;
    width: 100%;
    display:grid;
    gap:20px
  }
  .blog-item{
    padding:20px;
overflow:hidden;
  }
  .blog-image-container{
    position:absolute
  }
    }
  
    @media screen and (min-width: 601px) and (max-width: 1200px) {
      .blog-list-container {
        width: 100%;

  }
  .blog-list{
    display: grid;
    grid-template-columns: 1fr  1fr;
    
  }
    }
  
    @media screen and (min-width: 1201px) {
      .blog-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }
    }
`;
