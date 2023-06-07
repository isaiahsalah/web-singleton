import React from 'react'
import { ServicesBox } from './ServicesStyle'
import { ServicesList } from '../../../utils/Config'
import servicesImage from '../../../assets/images/services-image.jpg'

const ServicesSection = () => {
  return (
    <ServicesBox>
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
              ServicesList.map((item, index) => {
                return (
                  <div key={index} className='services-list-item'>
                    <div className='services-list-item-icon'>
                      <item.icon />
                    </div>
                    <h5 className='services-list-item-title'>
                      {item.title}
                    </h5>

                    <p className='services-list-item-description'>{item.description}</p>
                  </div>
                )
              })
            }

          </div>
        </div>

    </ServicesBox>
  )
}

export default ServicesSection