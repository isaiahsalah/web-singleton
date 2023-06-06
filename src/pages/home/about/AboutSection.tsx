import React from 'react'
import { AboutBox } from './AboutStyle'
import {
    SiTypescript,
    SiJavascript,
    SiAngular,
    SiReact,
    SiAmazon,
    SiMicrosoft,
    SiPostgresql,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiNetapp,
    SiCsharp
} from "react-icons/si"
import { useNavigate } from 'react-router-dom'
import { TeamList } from '../../../utils/Config'


const Technologies = [
    {
        name: 'React',
        icon: <SiReact />
    },
    {
        name: 'Redux',
        icon: <SiAmazon />
    },
    {
        name: 'Redux',
        icon: <SiTypescript />
    },
    {
        name: 'Redux',
        icon: <SiAngular />
    },
    {
        name: 'Redux',
        icon: <SiMicrosoft />
    },
    {
        name: 'Redux',
        icon: <SiPostgresql />
    },
    {
        name: 'Redux',
        icon: <SiFirebase />
    },
    {
        name: 'Redux',
        icon: <SiMongodb />
    },
    {
        name: 'Redux',
        icon: <SiMysql />
    },
    {
        name: 'Redux',
        icon: <SiNetapp />
    },
    {
        name: 'Redux',
        icon: <SiJavascript />
    },
    {
        name: 'Redux',
        icon: <SiCsharp />
    }
]


const AboutSection = () => {
    const navigate = useNavigate()
    return (
        <AboutBox>
            

            <div className='about-section'>
            <h1 className='title-section-back'>Nosotros</h1>
            <div className='title-section-container'>
                <div className='line-horizontal-long' />
                <h5 className='section-title abril'>
                    Uno poco sobre nosotros
                </h5>
                <div className='line-horizontal-long' />
            </div>
                <div className='about-contend'>
                    <div className='text'>
                        <div className='text-experience'>


                            <h1 className='experience-year'>
                                17
                            </h1>
                            <h6 className='experience-about'>
                                años dando soluciones tecnologicas a pequeñas y grandes empresas
                            </h6>
                        </div>
                        <p className='text-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button onClick={() => navigate('/about')}>
                            Ver más

                        </button>
                    </div>
                    <div className='technologies-container'>
                        <p className='technologies-title'>
                            Tecnologias con las que trabajamos
                        </p>
                        <div className='line-horizontal-long' />
                        <div className='technologies'>
                            
                            {Technologies.map((item, index) => {
                                return (
                                    <div className='technologies-item' key={index}>
                                        <div className='technologies-icon'>
                                            {item.icon}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='line-horizontal-long' />

                    </div>
                    
                </div>
            </div>
        </AboutBox>
    )
}

export default AboutSection