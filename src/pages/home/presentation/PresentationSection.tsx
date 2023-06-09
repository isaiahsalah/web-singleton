import { useEffect, useState } from 'react'

import { PresentationBox } from './PresentationStyle';
import { PresentationItems } from '../../../utils/Config';
import { Button } from '@mui/material';

import faqImage from '../../../assets/images/teclado.jpg'

const PresentationSection = () => {

    

    return (
        <PresentationBox id='home'>
            <img id='presentation-back-image' src={faqImage} />

            <div className='presentation-contend'>
                <div className='presentation-text'>
                    <h2 className='presentation-title'>
                        Potencia tu negocio con nosotros
                    </h2>
                    <p>
                        Transforma tu enfoque de negocio y potencia tus relaciones con los clientes con nuestro software CRM de vanguardia, impulsando el crecimiento y la excelencia en cada interacción
                    </p>
                    <div className='presentation-button-container'>
                        <button>Cotizar</button>
                        <button>Ver Productos</button>
                    </div>
                </div>


            </div>

        </PresentationBox>
    )
}

export default PresentationSection