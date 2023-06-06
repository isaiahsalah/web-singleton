import { useEffect, useState } from 'react'

import img3 from '../../../assets/images/fondo.jpg'
import { PresentationBox } from './PresentationStyle';
import { PresentationItems } from '../../../utils/Config';


const PresentationSection = () => {

    return (
        <PresentationBox>
            <div className=''></div>
            <img className='presentation-backimage' src={img3}>
            </img>
            <div className='presentation-contend'>
                <div className='presentation-text'>
                <h2 className='presentation-title'>Haz realidad tus sueños 3D</h2>
                <h6>Soluciones profesionales 3D en un sitio</h6>
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