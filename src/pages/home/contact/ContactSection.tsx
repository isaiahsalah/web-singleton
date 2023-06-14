import { ContactBox } from './ContactStyle'
import { ContactMessageData } from '../../../utils/Config'
import videoContact from '../../../assets/video/mano-escribiendo-fonto-blanco.mp4'


const ContactSection = () => {
    const contactClick = () => {
        const nuevaVentana = window.open(ContactMessageData.button.url, '_blank');
        if (nuevaVentana) nuevaVentana.focus();
    }
    return (
        <ContactBox id='contact'>
            <video loop autoPlay className='contact-back-video' data-type="parallax" data-depth="0.10" src={videoContact}>
            </video>
            <div className='title-section-container'>
                <h6 className='section-title'>
                    Contáctanos
                </h6>
            </div>
            <div className='contact-section-container'>
                <h5 className='contact-title bold'>
                    {ContactMessageData.title}
                    </h5>
                <p className='contact-message'>
                    {ContactMessageData.message}
                </p>
                <div className='contact-button-container'>
                    <button onClick={contactClick} className='contact-button'>
                        {ContactMessageData.button.title}
                    </button>
                </div>
            </div>
            <div></div>

        </ContactBox>
    )
}

export default ContactSection