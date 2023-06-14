import { FooterBox } from './FooterStyle'
import { SocialMediaData } from '../../utils/Config'
import LogoComponent from '../logo/LogoComponent'

const FooterComponent = () => {
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