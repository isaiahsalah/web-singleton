import styled from 'styled-components'

export const VisionMisionSectionBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  text-align: center;
  align-content: space-between;
  justify-content: center;
  position: relative;
  gap: 20px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  .vision-section-container {
    padding: 20px;
    display: grid;
    justify-items: center;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    z-index:5;
    gap: 20px;
  }
  .mision-title{
    width: 70%;
    line-height: 1;
  }
  #vision-back-image {
    top: 10%;
    scale: 1;
    position: fixed;
    opacity: 0.4;
    z-index: 0;
    transition: .25s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mision-description{
  }
  @media screen and (max-width: 600px) {
    .mision-title{
    width: 100%;
  }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .mision-title{
    width: 90%;
  }
  }

  @media screen and (min-width: 1201px) {
  }
`

