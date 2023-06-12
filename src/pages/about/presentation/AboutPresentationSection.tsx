import { AboutPresentationSectionBox } from './AboutPresentationSectionStyle'
import aboutImage from "../../../assets/images/server.jpg"

const AboutPresentationSection = () => {
    return (
        <AboutPresentationSectionBox>
            <img id='about-back-image' data-type="parallax" data-depth="0.20" src={aboutImage} />

            <div className='about-contend'>
                <div className='about-text'>
                    <h2 className='about-title'>
                        Potencia tu negocio con nosotros
                    </h2>
                    <p className='about-description'>
                        Transforma tu enfoque de negocio y potencia tus relaciones con los clientes con nuestro software CRM de vanguardia, impulsando el crecimiento y la excelencia en cada interacción
                    </p>
                    <div className='about-button-container'>
                        <button>Cotizar</button>
                        <button>Ver Productos</button>
                    </div>
                </div>


            </div>
        </AboutPresentationSectionBox>
    )
}

export default AboutPresentationSection