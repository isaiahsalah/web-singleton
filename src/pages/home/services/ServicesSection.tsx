import React from 'react'
import { ServicesBox } from './ServicesStyle'
import SlideDinamicComponent from '../../../components/slideDinamic/SlideDinamicComponent'
import { ServicesList } from '../../../utils/Config'

const ServicesSection = () => {
  return (
    <ServicesBox>
      <h1 className='title-section-back'>Servicios</h1>
      <div className='title-section-container'>
        <div className='line-horizontal-long' />
        <h5 className='section-title abril'>
          Nuestros Servicios
        </h5>
        <div className='line-horizontal-short' />
      </div>
      < SlideDinamicComponent items={ServicesList} />
    </ServicesBox>
  )
}

export default ServicesSection