import { Color } from "../../utils/Config";
import styled from "styled-components";

export const ChatComponentBox = styled.nav`
  #chat-container {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 10;
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
    padding: 20px;
    
  }



  .chat-icon{
    display: flex;
  }

  @media screen and (max-width: 600px) {
    .contact {
    display: none;
  }
  .chat-text{
    display: none;
  }
  .chat-icon{
    height: 30px;
    width: 30px;
    aspect-ratio: 1;
    //font-size: 30px;

  }
  .chat-button{
    padding: 10px
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
