import { ServicesBox } from './ServicesStyle'
import { Services } from '../../../utils/Classes'
import servicesImage from '../../../assets/images/service.jpg'

interface ServicesProps {
  services: Services[],
}

const ServicesSection = (props: ServicesProps) => {



  const extenderDescripcion =(index:number)=>{
    
    const layers = document.querySelectorAll(".services-list-item-description");
    const buttons = document.querySelectorAll(".services-list-item-button");

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i] as HTMLElement;
      const button = buttons[i] as HTMLElement;

      if(layers[i].id===(`description-`+index))
      {
        if(layer.style.display==="flex"){
          layer.style.display="-webkit-box"
          button.textContent="Ver Más"

        }
        else {
          layer.style.display="flex"
          button.textContent="Ver Menos"
        }
      }
      else{
        layer.style.display="-webkit-box"
        button.textContent="Ver Más"
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