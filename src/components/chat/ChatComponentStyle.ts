import { Color } from "../../utils/Config";
import styled from "styled-components";

export const ChatComponentBox = styled.nav`
  #chat-container {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 20;
    transition: right 0.25s ease-out 0.2s, opacity 0.25s ease-out 0.2s;

  }
  a {
    text-align: right;
  }

  .chat {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    
  }



  .chat-icon{
    display: flex;
  }
  .chat-text:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px) {
    .contact {
    display: none;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .contact {
    display: flex;
  }
  }

  @media screen and (min-width: 1201px) {
    .contact {
    display: flex;
  }
  }
`;
