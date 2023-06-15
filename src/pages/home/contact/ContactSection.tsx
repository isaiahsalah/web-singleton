import { ContactBox } from './ContactStyle'
import { ContactMessageData } from '../../../utils/Config'
import videoContact from '../../../assets/images/teclado-minimalista.jpg'


const ContactSection = () => {
    const contactClick = () => {
        const nuevaVentana = window.open(ContactMessageData.button.url, '_blank');
        if (nuevaVentana) nuevaVentana.focus();
    }
    return (
        <ContactBox id='contact'>
            <img className='contact-back-video' data-type="parallax" data-depth="0.10" src={videoContact}>
            </img>
            <div className='title-section-container'>
                <div className='h6 section-title'>
                    Contáctanos
                </div>
            </div>
            <div className='contact-section-container'>
                <h4 className='contact-title bold'>
                    {ContactMessageData.title}
                    </h4>
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