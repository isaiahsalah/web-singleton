import { FooterBox } from './FooterStyle'
import { SocialMedia } from '../../utils/Config'
import LogoComponent from '../logo/LogoComponent'

const FooterComponent = () => {
  return (
    <FooterBox>
      <div className='footer-container'>
        
          <div className='footer-logo-container'>
            <LogoComponent />
          </div>
          <p className='footer-slogan-text'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500
          </p>
          <ul className='footer-social-list'>
            {SocialMedia.map((social, index) =>

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