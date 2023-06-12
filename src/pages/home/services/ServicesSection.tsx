import React from 'react'
import { ServicesBox } from './ServicesStyle'
import { Services, ServicesList } from '../../../utils/Config'
import servicesImage from '../../../assets/images/service.jpg'

import { IconContext } from 'react-icons';
import { SiAndroid } from 'react-icons/si'

interface ServicesProps {
  services: Services[],
}

const ServicesSection = (props: ServicesProps) => {

  return (
    <ServicesBox id='service'>
      <img id='services-back-image' src={servicesImage}>
      </img>

      <div className='title-section-container'>
        <h6 className='section-title'>
          Nuestros Servicios
        </h6>
      </div>
      <div className='services-list-container'>
        <div className='services-list'>
          {
            props.services.map((item, index) =>
              <div key={index} className='services-list-item'>
                <div className='services-list-item-icon'>

                  {<item.icon />}
                </div>
                <h5 className='services-list-item-title'>
                  {item.title}
                </h5>

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