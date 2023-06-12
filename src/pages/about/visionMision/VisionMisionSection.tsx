import { VisionMisionSectionBox } from './VisionMisionSectionStyle'
import faqImage from '../../../assets/images/team.jpg'

const VisionMisionSection = () => {
    return (
        <VisionMisionSectionBox>
            <img id='vision-back-image' src={faqImage} />

            <div className="title-section-container">
                <h6 className="section-title">Nuestra Misión</h6>
            </div>

            <div className='vision-section-container'>
                <h5 className="mision-title">
                    Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Har la fuente.
                </h5>
                <p className="mision-description">
                    Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.
                </p>
            </div>
            <div> </div>
        </VisionMisionSectionBox>
    )
}

export default VisionMisionSection