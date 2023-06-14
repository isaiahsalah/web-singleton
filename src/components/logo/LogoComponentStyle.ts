import styled from "styled-components";
import { Color } from "../../utils/Config";

export const LogoComponentBox = styled.div`

    display: flex;
    height: 100%;
    align-items: center;
    gap: 10px;
  
  .logo-img-container {
    background-color: ${Color.primary};
    border-radius: 25%;
    padding: 8px;
    cursor: pointer;
    transition: 0.25s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);


    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.alternative}4d);
      background-color: ${Color.alternative};


    }
  }

  .logo-img {
    display: flex;
    width: 25px;
    height: 25px;
  }

  .logo-text {
    
    line-height: 1;
    text-align: left;
  }
  .logo-title,
  .logo-subtitle {
    
    white-space: nowrap;
    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
      opacity: 1;
    }
  }
  .logo-title {
    text-transform: uppercase;
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.alternative};
    cursor: pointer;
    font-size: 24px;

  }
  .logo-subtitle {
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.alternative};
    cursor: pointer;
    opacity: 0.75;
    font-size: 11.7px;
    //background-color:red
  }

`