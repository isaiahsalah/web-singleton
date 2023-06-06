import React from 'react'
import { FooterBox } from './FooterStyle'

const FooterComponent = () => {
  return (
    <FooterBox>
      <div className='line-horizontal-long' />
      © Singleton. Todos los derechos reservados.
      <div className='line-horizontal-long' />
    </FooterBox>
  )
}

export default FooterComponent