import { VisionMisionSectionBox } from './VisionMisionSectionStyle'
import faqImage from '../../../assets/images/server.jpg'
import { MisionAboutData } from '../../../utils/Config'

const VisionMisionSection = () => {
    return (
        <VisionMisionSectionBox>
            <img id='vision-back-image' data-type="parallax" data-depth="0.10" src={faqImage} alt=''/>

            <div className="title-section-container">
                <div className="h6 section-title">Nuestra Misión</div>
            </div>

            <div className='vision-section-container'>
                <h4 className="mision-title bold">
                    {MisionAboutData.title}
                </h4>
                <p className="mision-description">
                    {MisionAboutData.subtitle}
                </p>
            </div>
            <div> </div>
        </VisionMisionSectionBox>
    )
}

export default VisionMisionSection