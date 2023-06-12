import { PresentationBox } from './PresentationStyle';
import faqImage from '../../../assets/images/teclado.jpg'
import { useNavigate } from 'react-router-dom';

const PresentationSection = () => {
    const navigate = useNavigate()

    const productClick = () => {
        const section = document.getElementById('product') as HTMLDivElement;
        window.scrollTo({
          top: section.offsetTop,
        });

    }
    const cotizarClick = () => {
        const nuevaVentana = window.open('https://www.twitter.com', '_blank');
        if(nuevaVentana)nuevaVentana.focus();
    }

    return (
        <PresentationBox id='home' >

            <img id='presentation-back-image' data-type="parallax" data-depth="0.20" src={faqImage} />

            <div className='presentation-contend'>
                <div className='presentation-text'>
                    <h2 className='presentation-title'>
                        Tecnología que te Libera...
                    </h2>
                    <p className='presentation-description'>
                        Nuestro Método de Trabajo revolucionario se unen para brindarte una experiencia única y eficiente, permitiéndote alcanzar tus metas de manera más rápida y efectiva.
                    </p>
                    <div className='presentation-button-container'>
                        <button onClick={cotizarClick}>Cotizar</button>
                        <button onClick={productClick}>Ver Productos</button>
                    </div>
                </div>


            </div>

        </PresentationBox>
    )
}

export default PresentationSection