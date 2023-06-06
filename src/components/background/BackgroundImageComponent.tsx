import React from 'react'
import { BackgroundBox } from './BackgroundImageStyle'
import svg from '../../assets/svgs/fondo.svg'


const BackgroundImageComponent = () => {
    return (
        <BackgroundBox>
            <img className='background-image' src={svg} />

        </BackgroundBox>
    )
}

export default BackgroundImageComponent