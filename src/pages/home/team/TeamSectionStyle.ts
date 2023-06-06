import { Color } from "../../../utils/Config";
import styled from 'styled-components'

export const TeamSectionBox = styled.div`
//position: relative;

  /*width: 100vw;
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;*/

width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position:relative;

  .slider-list {
    //background-color: ${Color.secondary};
    //overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 75%;
    overflow:hidden;

  }

  .slider {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .slide-image {
    z-index: -1;
    width: 100vw;
    //height: 100vh;
    object-fit: cover;
    //max-width: 100%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    transition: opacity 0.5s, filter 0.5s;
    opacity: 0;
    filter: blur(20px);

    &.loaded {
      opacity: 0.8;
      filter: none;
    }
  }
  .slider-inner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1060px;
    height: 100%;
    margin: 0 auto;
    z-index: 5;
  }
  .slide-title {
    //font-weight: 400;
    letter-spacing: -1px;
    color: white;
    line-height: 30px;
    margin: 20px 0 60px;

    transition: opacity 0.5s 0.1s, translate 0.5s 0.1s;
    opacity: 0;
    translate: -100vw 0;

    &.loaded {
      opacity: 1;
      translate: 0 0;
    }
  }

  @media screen and (min-width: 800px) {
    #slider-content h2 {
      font-size: 110px;
      line-height: 100px;
    }
  }
  .meta,
  .meta-description {
    display: inline-block;
    font-size: 11px;
    color: #88888a;
    text-transform: uppercase;
    position: relative;
  }

  .meta {
    transition: opacity 0.5s, translate 0.5s;
    opacity: 0;
    translate: -100vw 0;

    &.loaded {
      opacity: 1;
      translate: 0 0;
    }
  }

  .meta-description {
    transition: opacity 0.5s 0.2s, translate 0.5s 0.2s;
    opacity: 0;
    translate: -100vw 0;

    &.loaded {
      opacity: 1;
      translate: 0 0;
    }
  }
  .slide-description {
    width: 60%;

    transition: opacity 0.5s 0.3s, translate 0.5s 0.3s;
    opacity: 0;
    translate: -100vw 0;

    &.loaded {
      opacity: 1;
      translate: 0 0;
    }
  }
  .slide-button {
    transition: opacity 0.5s 0.4s, translate 0.5s 0.4s;
    opacity: 0;
    translate: -100vw 0;

    &.loaded {
      opacity: 1;
      translate: 0 0;
    }
  }

  @media screen and (min-width: 800px) {
    .meta,
    .meta-description {
      font-size: 13px;
    }
  }

  .meta:after,
  .meta-description:after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    right: -55px;
    width: 45px;
    height: 2px;
    background-color: #393d40;
  }

  @media screen and (min-width: 800px) {
    #slide-status {
      font-size: 34px;
    }
  }

  .pagination {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    z-index: 6;
  }

  .pagination button {
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    width: 12px;
    height: 12px;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 0;
    margin: 30px 0;
    cursor: pointer;
    position: relative;
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
    outline: none;
  }
  .pagination button:hover {
    opacity: 1;
  }
  .pagination button.active {
    opacity: 1;
  }
  .pagination button.active:before {
    width: 300%;
    height: 300%;
    opacity: 1;
  }
  .pagination button:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out,
      height 0.4s ease-in-out;
  } /* Page Loader */
  .loading:before {
    content: "";
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }
  .loading:after {
    content: "";
    position: fixed;
    z-index: 100000;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    pointer-events: none;
    border-radius: 50%;
    opacity: 0.4;
    background: white;
    animation: loaderAnim 0.7s linear infinite alternate forwards;
  }
  @keyframes loaderAnim {
    to {
      opacity: 1;
      transform: scale3d(0.5, 0.5, 1);
    }
  }
`