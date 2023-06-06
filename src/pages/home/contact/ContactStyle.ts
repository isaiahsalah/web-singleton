import { Color } from "../../../utils/Config";
import styled from 'styled-components'

export const ContactBox = styled.div`
width: 100vw;
height: 100vh;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
.contact-section-container{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.contact-title {
    font-family: 'Abril Fatface';

}
.contact-message {
    font-size: .8em;
}
.contact-button{
    margin: 15px 0px;
}
.contact-back{
    position: absolute;
    font-size: 8em;
    font-family: 'Abril Fatface';
    opacity: .1;
    right: 5%;
    bottom: 5%;

}

  
@media screen and (max-width: 600px) {
      .contact-section-container {
        width: 80%;

  }
    }
  
    @media screen and (min-width: 601px) and (max-width: 1200px) {
      .blog-list-container {
  }
    }
  
    @media screen and (min-width: 1201px) {
      .blog-list{
    
  }
    }
`