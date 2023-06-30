import { ServicesBox } from './ServicesStyle'
import { Services } from '../../../utils/Classes'
import servicesImage from '../../../assets/images/service.jpg'

interface ServicesProps {
  services: Services[],
}

const ServicesSection = (props: ServicesProps) => {


  const expandirTexto = (elemento: HTMLElement, numLineas:number) => {
    let lineasActuales = 4; // Número inicial de líneas
    const intervalo = setInterval(() => {
      lineasActuales++;
  
      // Actualiza el valor de -webkit-line-clamp
      elemento.style.webkitLineClamp = lineasActuales.toString();
  
      if (lineasActuales >= numLineas) {
        clearInterval(intervalo);
      }
    }, 5); // Intervalo de tiempo entre cada cambio de línea (ajusta según tus necesidades)
  };



  const extenderDescripcion =(index:number)=>{
    
    const layers = document.querySelectorAll(".services-list-item-description");
    const buttons = document.querySelectorAll(".services-list-item-button");

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i] as HTMLElement;
      const button = buttons[i] as HTMLElement;

      if(layers[i].id===(`description-`+index))
      {
        if(layer.style.webkitLineClamp=="60"){
          //contraerTexto(layer,4)
          layer.style.webkitLineClamp="4"
          //layer.style.display="-webkit-box"
          button.textContent="Ver Más"

        }
        else {
           expandirTexto(layer,60)
           
          //layer.style.webkitLineClamp="50"
          //layer.style.display="flex"
          button.textContent="Ver Menos"
          console.log("layer")
        }
      }
    }
  }

  return (
    <ServicesBox id='service'>
      <img id='services-back-image' src={servicesImage} alt=''>
      </img>

      <div className='title-section-container'>
        <div className='h6 section-title'>
          Nuestros Servicios
        </div>
      </div>
      <div className='services-list-container'>
        <div className='services-list'>
          {
            props.services.map((item, index) =>
              <div key={index} className='services-list-item'>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>

                  <div className='services-list-item-icon'  dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h4 className='services-list-item-title bold'>
                    {item.title}
                  </h4>
                </div>

                <p id={`description-${index}`} className='services-list-item-description'>
                  {item.description}
                </p>
                <a onClick={()=>extenderDescripcion(index)} id={`button-${index}`} className='services-list-item-button'>Ver Más</a>
              </div>
            )
          }

        </div>
      </div>

    </ServicesBox>
  )
}

export default ServicesSection