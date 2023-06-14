import { PresentationBox } from './PresentationStyle';
import faqImage from '../../../assets/images/teclado.jpg'
//import { useNavigate } from 'react-router-dom';
import { PresentationHomeData } from '../../../utils/Config';

const PresentationSection = () => {
    //const navigate = useNavigate()

    const productClick = () => {
        const section = document.getElementById('product') as HTMLDivElement;
        window.scrollTo({
          top: section.offsetTop,
        });

    }
    const cotizarClick = () => {
        const nuevaVentana = window.open(PresentationHomeData.button.url, '_blank');
        if(nuevaVentana)nuevaVentana.focus();
    }

    return (
        <PresentationBox id='home' >

            <img id='presentation-back-image' data-type="parallax" data-depth="0.20" src={faqImage} alt=''/>

            <div className='presentation-contend'>
                <div className='presentation-text'>
                    <h1 className='presentation-title bold'>
                    {PresentationHomeData.title}
                    </h1>
                    <p className='presentation-description'>
                        {PresentationHomeData.subtitle}
                    </p>
                    <div className='presentation-button-container'>
                        <button onClick={cotizarClick}>{PresentationHomeData.button.title}</button>
                        <button onClick={productClick}>Ver Productos</button>
                    </div>
                </div>


            </div>

        </PresentationBox>
    )
}

export default PresentationSection