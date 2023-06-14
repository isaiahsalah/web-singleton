import styled from "styled-components";
import { Color } from "../../../utils/Config";

export const TeamSectionBox = styled.div`
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: space-between;
  justify-content: center;
  position: relative;
  gap: 20px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  #team-back-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    bottom: 0;
    position: absolute;
    opacity: 0.2;
    mix-blend-mode: multiply;
    z-index: -1;
    transition: 0.25s;
  }
  .team-list {
    display: flex;
  }
  .team-item {
    position: relative;
  }
  .team-item-image {
  }
  .team-member{
    background-color:transparent //${Color.secondary}80
  }
`;
