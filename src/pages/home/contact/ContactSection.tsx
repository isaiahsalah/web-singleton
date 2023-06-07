import React from 'react'
import { ContactBox } from './ContactStyle'
import { ContactMessage } from '../../../utils/Config'
import FooterComponent from '../../../components/footer/FooterComponent'

const ContactSection = () => {
    return (
        <ContactBox>
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
                    <button className='contact-button'>
                        Dí Hola
                    </button>
                </div>
            </div>
            <div></div>

        </ContactBox>
    )
}

export default ContactSection