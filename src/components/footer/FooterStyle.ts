import { Color } from "../../utils/Config";
import styled from "styled-components";

export const FooterBox = styled.nav`
  width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8em;
  gap: 10px;

  .footer-social-media-container,
  .footer-contact-container,
  .footer-slogan-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
  }

  .footer-logo-container {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .footer-slogan-text {
    width: 100%;
  }

  .footer-container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 40px;
    box-sizing: border-box;
  }
  .footer-derechos {
    white-space: nowrap;

    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    gap: 20px;
    background-color: ${Color.primary};
  }
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    //gap: 20px;
  }

  .footer-social-list {
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .footer-social-list li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-social-media-container {
    display: grid;
    gap: 20px;
    padding: 20px;
  }

  .footer-slogan-text {
    display: grid;
    gap: 20px;
  }

  @media screen and (max-width: 600px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
      .footer-slogan-text {
    width: 100%;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .footer-container {
      grid-template-columns: 1fr 1fr;
    }
    .footer-slogan-container {
      grid-template-columns: 2fr 3fr;
      grid-column: 1 / span 2;
    }
    .footer-social-list {
    }
  }

  @media screen and (min-width: 1201px) {
    .blog-list {
    }
  }
`;
