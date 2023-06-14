import styled from "styled-components";

export const FacSectionBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: space-between;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  .faq-back-image {
    scale: 1.5;
    bottom: -60%;
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    opacity: 0.5;
    overflow: hidden;
    transition: 0.25s;
  }

  .faq-list-container {
    padding: 5vw;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    display: flex;
  }
  .faq-list {
    max-width: 90vw;
    //overflow-x: auto;
    justify-content: left;
    z-index: 5;
  }

  .faqs-tabs{
    overflow-x: "auto";
    max-width: 90vw;
  }

  

  @media screen and (max-width: 600px) {
    .faq-list {
      width: 100%;
    }
    .faq-back-image {
      bottom: -20%;
      scale: 1.5;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .faq-list {
      width: 100%;
    }
    .faq-back-image {
      bottom: -40%;
      scale: 1.25;
    }
  }

  @media screen and (min-width: 1201px) {
  }
`;
