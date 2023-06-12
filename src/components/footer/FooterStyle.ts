import { Color } from "../../utils/Config";
import styled from "styled-components";

export const FooterBox = styled.nav`
  width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8em;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);

  .footer-social-media-container,
  .footer-contact-container,
  .footer-slogan-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    max-width: 1200px;
    background-color:blue;

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
    max-width: 1200px;
    margin:auto;
    width: 100%;
    padding: 40px 40px 20px 40px;
    box-sizing: border-box;
    gap:20px;

  }
  .footer-derechos {
    white-space: nowrap;

    width: 100vw;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    background-color: ${Color.primary};
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);

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
