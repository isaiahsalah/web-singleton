import styled from "styled-components";

export const ContactBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: space-between;
  text-align: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  .contact-back-video {
    top: 0;
    bottom: 0;
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: -2;
    opacity: 0.2;
    transition: 0.25s;
  }

  .contact-section-container {
    width: 100%;
    display: grid;
    gap: 20px;

    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
    justify-items: center;
  }
  .contact-title {
    width: 70%;

  }
  .contact-message {
    width: 85%;

    //font-size: 0.8em;
  }
  .contact-button-container {
    display: flex;
    justify-content: center;
  }
  .contact-button {
    margin: 15px 0px;
  }
  .contact-back {
    position: absolute;
    font-size: 8em;
    font-family: "Abril Fatface";
    opacity: 0.1;
    right: 5%;
    bottom: 5%;
  }

  @media screen and (max-width: 600px) {
    .contact-title {
    width: 80%;

    font-family: "Abril Fatface";
  }
  .contact-message {
    width: 100%;

    //font-size: 0.8em;
  }
    .contact-back-video {
      top: 100%;
      scale: 1.5;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .blog-list-container {
    }
    .contact-back-video {
      top: 50%;
      scale: 1.25;
    }
  }

  @media screen and (min-width: 1201px) {
    .blog-list {
    }
  }
`;
