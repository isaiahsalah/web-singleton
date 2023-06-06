import React, {useEffect}from 'react'
import { ProductBox } from './ProductsStyle';
import { ProductsList } from '../../../utils/Config';

const ProductsSection = () => {

  
  return (
    <ProductBox id='product'>
      <h1 className='title-section-back'>Productos</h1>

      <div className='title-section-container'>
        <div className='line-horizontal-short' />
        <h5 className='section-title abril'>
          Nuestros Productos
        </h5>
        <div className='line-horizontal-long' />
      </div>


      <div className='product-list'>
        {ProductsList.map((item, index) => (
          <div className='product-item' key={index}>
            <div className='product-image-container'>
              <img className='product-image' src={item.image} alt={item.title} />
            </div>
            <div className='product-info'>
              <div className='product-class'>{item.item}</div>
              <h2 className='product-title'>{item.title}</h2>
              <p className='product-description'>{item.description}</p>
              <div className='product-module-list'>
                {item.modules.map((module, index) => {
                  return <div
                    className='product-module'
                    key={index}>
                      <module.icon className='product-module-icon'/>
                      <p className='product-module-title'>{module.title}</p>
                      </div>
                })}
              </div>
              <div className='product-button-container' >
                <button className='product-button'>Ver más</button>
              </div>

            </div>

          </div>
        ))}
      </div>






    </ProductBox>
  )
}

export default ProductsSection