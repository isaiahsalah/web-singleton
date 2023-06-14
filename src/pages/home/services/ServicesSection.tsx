import { ServicesBox } from './ServicesStyle'
import { Services } from '../../../utils/Classes'
import servicesImage from '../../../assets/images/service.jpg'

interface ServicesProps {
  services: Services[],
}

const ServicesSection = (props: ServicesProps) => {

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

                <p className='services-list-item-description'>
                  {item.description}
                </p>
              </div>
            )
          }

        </div>
      </div>

    </ServicesBox>
  )
}

export default ServicesSection