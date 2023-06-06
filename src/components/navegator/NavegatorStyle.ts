import { Color } from "../../utils/Config";
import styled from "styled-components";

export const NavegatorBox = styled.nav`
  //font-family: "Abril Fatface";

  #header-nav {
    z-index: 10;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 15%;
    left: 0;
    right: 0;
    top: 0px;
    background: linear-gradient(
      ${Color.secondary},
      ${Color.secondary}bf,
      ${Color.secondary}80,
      transparent
    );
    transition: top 0.25s ease-out, opacity 0.25s ease-out;
    padding: 0 20px;
  }

  .nav-container {
    box-sizing: border-box;
    padding: 0 5%;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-item {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .nav-link {
    text-decoration: none;
    display: inline-flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .logo-container {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .logo-img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .logo-title {
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.alternative};
    cursor: pointer;
    opacity: 0.4;
    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
      opacity: 1;
      color: ${Color.alternative};
    }
  }
  .logo-img {
    display: none;
  }
  .country-container {
    font-weight: bold;
    transition: 0.5s;
    &:hover {
      .bolivia {
        display: none;
      }

      .paraguay {
        display: block;
      }
    }
  }

  .country {
    cursor: pointer;
  }
  .paraguay {
    display: none;
  }

  .B {
    color: red;
  }
  .O {
    color: yellow;
  }
  .L {
    color: green;
  }

  .P {
    color: red;
  }
  .A {
    color: white;
  }
  .R {
    color: blue;
  }

  .hamburger {
    opacity: 0.4;
    display: flex;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      opacity: 1;
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
    }
  }
  .icon-movil {
    display: flex;
    width: 1.3em;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    .hamburger {
      display: block;
    }
    .nav-menu {
      list-style: none;
      display: none;
      position: fixed;
      align-content: center;
      justify-content: center;
      background-color: ${Color.secondary};
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      text-align: center;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .hamburger {
      display: block;
    }
    .nav-menu {
        list-style: none;

      display: none;
      position: fixed;
      align-content: center;
      justify-content: center;
      background-color: ${Color.secondary};
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      text-align: center;
    }
  }

  @media screen and (min-width: 1201px) {
    .nav-menu {
    list-style: none;
    font-size: 0.9em;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 15px;

    //font-family: "Roboto Mono";
    //font-family: "Bebas Neue";
    //font-family: 'Courier New', Courier, monospace;
  }
    .hamburger {
      display: none;
    }
  }
`;
