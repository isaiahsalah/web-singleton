import React, { useEffect } from 'react'
import { ProductBox } from './ProductsStyle';
import { ProductsList } from '../../../utils/Config';
import videoWork from '../../../assets/video/video-work.mp4'

const ProductsSection = () => {


  return (
    <ProductBox id='product'>
      <video loop autoPlay className='product-back-video' data-type="parallax" data-depth="0.10" src={videoWork}>
      </video>
      <div className='title-section-container'>
        <h6 className='section-title'>
          Nuestros Productos
        </h6>
      </div>


      <div className='product-list'>
        <div className='product-item' >



          <div className='product-info'>
            <div className='product-class'>{ProductsList[0].item}</div>
            <h1 className='product-title'>{ProductsList[0].title}</h1>
            <p className='product-description'>{ProductsList[0].description}</p>
            <div className='product-module-list'>
              {ProductsList[0].modules.map((module, index) => {
                return <div
                  className='product-module'
                  key={index}>
                  <module.icon className='product-module-icon' />
                  <p className='product-module-title'>{module.title}</p>
                </div>
              })}
            </div>
            <div className='product-button-container' >
              <button className='product-button'>Ver Info</button>
            </div>

          </div>
          <div className='product-image-container'>
            <img className='product-image' src={ProductsList[0].image} alt={ProductsList[0].title} />
          </div>


        </div>
      </div>

      <div></div>





    </ProductBox>
  )
}

export default ProductsSection