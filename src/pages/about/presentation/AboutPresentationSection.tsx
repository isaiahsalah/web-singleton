import { AboutPresentationSectionBox } from './AboutPresentationSectionStyle'
import aboutImage from "../../../assets/images/office.jpg"

const AboutPresentationSection = () => {
    return (
        <AboutPresentationSectionBox>
            <img id='about-back-image' data-type="parallax" data-depth="0.20" src={aboutImage} />

            <div className='about-contend'>
                <div className='about-text'>
                    <h2 className='about-title' style={{lineHeight:1}}>
                    Transformando negocios con nosotros
                    </h2>
                    <p className='about-description'>
                    potencia tu negocio con eficiencia y escalabilidad. Optimiza tus operaciones, toma decisiones informadas y descubre la diferencia que podemos hacer juntos. Impulsa tu éxito con nuestro equipo experto en tecnología y consultoría.                    </p>
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