import { Color } from "../../../utils/Config";
import styled from 'styled-components'

export const ContactBox = styled.div`
min-width: 100vw;
min-height: 95vh;
display: grid;
justify-items: center;
align-content: space-between;
text-align: center;
position: relative;

.contact-section-container{
    
    width: 40%;
    display: grid;
    gap: 20px;

    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;

}
.contact-title {
    font-family: 'Abril Fatface';

}
.contact-message {
    font-size: .8em;
}
.contact-button-container{
    display: flex;
    justify-content: center;
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