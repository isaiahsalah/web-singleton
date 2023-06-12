import { ContactBox } from './ContactStyle'
import { ContactMessage } from '../../../utils/Config'
import videoContact from '../../../assets/video/mano-escribiendo-fonto-blanco.mp4'


const ContactSection = () => {
    const contactClick = () => {
        const nuevaVentana = window.open('https://www.twitter.com', '_blank');
        if(nuevaVentana)nuevaVentana.focus();
    }
    return (
        <ContactBox id='contact'>
            <video loop autoPlay className='contact-back-video' data-type="parallax" data-depth="0.10" src={videoContact}>
      </video>
            <div className='title-section-container'>
                <h6 className='section-title'>
                    Contactanos
                </h6>
            </div>
            <div className='contact-section-container'>
                <h5 className='contact-title'>{ContactMessage.title}</h5>
                <div className='contact-message'>
                    {ContactMessage.message}
                </div>
                <div className='contact-button-container'>
                    <button onClick={contactClick} className='contact-button'>
                        Dí Hola
                    </button>
                </div>
            </div>
            <div></div>

        </ContactBox>
    )
}

export default ContactSection