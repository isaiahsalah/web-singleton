import { Color, FontSize } from "../../utils/Config";
import styled from "styled-components";

export const SocialMediaBox = styled.nav`


#social-media-container{
  position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 20;
    width: 5%;
    transition: left 0.25s ease-out 0.2s, opacity 0.25s ease-out 0.2s; 

}

  .social-media {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    gap: 12px;

  }
  .icon {
    height: 1.2em;
    width: 100%;
    color: ${Color.alternative};
    transition: color 0.15s ease-in-out, transform 0.15s ease-in-out;
  
  }

  .icon:hover {
    transform: scale(1.25);
  }




  
  ul {
    //width: 100%;
    list-style:none;
    margin: 10px 0;
    padding: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 18px;
    
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a{
    display: flex;
  }

  @media screen and (max-width: 600px) {
    .social-media {
    display: none;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .social-media {
    display: none;
  }
  }

  @media screen and (min-width: 1201px) {
    .social-media {
    display: flex;
  }}
`;
