import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const ContactBox = styled.nav`
  #contact-container {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 3;
    width: 5%;
    z-index: 20;
    transition: right 0.25s ease-out 0.2s, opacity 0.25s ease-out 0.2s;

  }
  a {
    writing-mode: vertical-rl;
    text-align: right;
    white-space: nowrap;
  }

  .contact {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 12px;
  }

  .contact-text {
    margin: 0;
    font-size: 0.85em;
    transition: 0.25s;
  }

  .contact-text:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px) {
    .contact {
    display: none;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .contact {
    display: none;
  }
  }

  @media screen and (min-width: 1201px) {
    .contact {
    display: flex;
  }
  }
`;
