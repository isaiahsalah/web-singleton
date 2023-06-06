import React from 'react'
import { ContactBox } from './ContactStyle'
import { ContactMessage } from '../../../utils/Config'

const ContactSection = () => {
    return (
        <ContactBox>
            <h1 className='title-section-back'>Contact</h1>
            <div className='title-section-container'>
                <div className='line-horizontal-long' />
                <h5 className='section-title abril'>
                    Contactanos
                </h5>
                <div className='line-horizontal-long' />
            </div>
            <div className='contact-section-container'>
                <h5 className='contact-title'>{ContactMessage.title}</h5>
                <div className='contact-message'>
                    {ContactMessage.message}
                </div>
                <button className='contact-button'>
                    Dí Hola
                </button>
            </div>

        </ContactBox>
    )
}

export default ContactSection