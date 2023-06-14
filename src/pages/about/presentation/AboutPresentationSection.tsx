import { AboutPresentationSectionBox } from './AboutPresentationSectionStyle'
import aboutImage from "../../../assets/images/office.jpg"
import { PresentationAboutData } from '../../../utils/Config';

const AboutPresentationSection = () => {

    const teamClick = () => {
        const section = document.getElementById('team') as HTMLDivElement;
        window.scrollTo({
          top: section.offsetTop,
        });

    }
    const cotizarClick = () => {
        const nuevaVentana = window.open(PresentationAboutData.button.url, '_blank');
        if(nuevaVentana)nuevaVentana.focus();
    }
    return (
        <AboutPresentationSectionBox id='about'>
            <img id='about-back-image' data-type="parallax" data-depth="0.20" src={aboutImage} alt='' />

            <div className='about-contend'>
                <div className='about-text'>
                    <h1 className='about-title bold' style={{lineHeight:1}}>
                    {PresentationAboutData.title}
                    </h1>
                    <p className='about-description'>
                    {PresentationAboutData.subtitle}
                    </p>
                    <div className='about-button-container'>
                        <button onClick={cotizarClick}>{PresentationAboutData.button.title}</button>
                        <button onClick={teamClick}>Ver Equipo</button>
                    </div>
                </div>


            </div>
        </AboutPresentationSectionBox>
    )
}

export default AboutPresentationSection