import { FooterBox } from './FooterStyle'
import { SocialMediaData } from '../../utils/Config'
import LogoComponent from '../logo/LogoComponent'
import MyScrollReveal from '../myScrollReveal/MyScrollReveal'
import { useEffect } from 'react'
import { DelayAnimationIntro } from '../../utils/Animations'

const FooterComponent = () => {
  
  useEffect(() => {
    //MyScrollReveal.reveal(".footer-slogan-text", { origin: 'bottom', ...DelayAnimationIntro(0) });
    MyScrollReveal.reveal(".footer-social-list", { origin: 'top', ...DelayAnimationIntro(250) });

    //MyScrollReveal.reveal(".footer-derechos", { origin: 'bottom', ...DelayAnimationIntro(500) });

  }, [])
  return (
    <FooterBox>
      <div className='footer-container'>

        <div className='footer-logo-container'>
          <LogoComponent />
        </div>
        {/*<p className='footer-slogan-text'>
        </p>*/}
        <ul className='footer-social-list'>
          <div  style={{width:"100%"}}>
          <a style={{cursor:"pointer"}} href='mailto:info@singleton.com.bo' target='_blanck'  className='footer-email'>
          info@singleton.com.bo
            </a>

          </div>

          {SocialMediaData.map((social, index) =>

            <li key={index}>
              <a className='social-link' href={social.link} target='_blank' rel='noopener noreferrer'>
                <h5><social.icon /></h5>
              </a>
            </li>
          )
          }
        </ul>




      </div>
      <div className='footer-derechos'>
        © Singleton. Todos los derechos reservados.
      </div>

    </FooterBox>
  )
}

export default FooterComponent