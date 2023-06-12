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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  .vision-section-container {
    padding: 20px;
    display: grid;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    z-index:5
  }
  .mision-title{
  }
  #vision-back-image {
    position: absolute;
    opacity: 0.4;
    z-index: 0;
    transition: .25s;
    width: 100%;



  }
`

