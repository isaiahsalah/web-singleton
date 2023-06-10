import React, { useEffect, useState } from 'react'
import { ProductBox } from './ProductsStyle';
import { ProductsList } from '../../../utils/Config';
import videoWork from '../../../assets/video/work-video.mp4'
import Slider from "react-slick";

const ProductsSection = () => {
  const [selectedItem, setSelectedItem] = useState(ProductsList[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loaded, setLoaded] = useState(false);
/*
  useEffect(() => {
    const interval = setInterval(() => {
      selectedNewItem(selectedIndex, ProductsList)
    }, 8000)
    return () => {
      clearInterval(interval)
    }
  })*/

  const selectedNewItem = (index: number, items: any, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
      setSelectedItem(items[nextIndex])
      setSelectedIndex(nextIndex)
    }, 1000)
  }

  const next = () => {
    selectedNewItem(selectedIndex, ProductsList)
  }
  const previus = () => {
    selectedNewItem(selectedIndex, ProductsList, false)
  }
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
            <p className={`product-class ${loaded ? "loaded" : ""}`} >{selectedItem.item}</p>
            <h1 className={`product-title ${loaded ? "loaded" : ""}`}>{selectedItem.title}</h1>
            <p className={`product-description ${loaded ? "loaded" : ""}`}>{selectedItem.description}</p>
            <div className={`product-module-list ${loaded ? "loaded" : ""}`}>
              {selectedItem.modules.map((module, index) =>
                <div
                  className='product-module'
                  key={index}>
                  <module.icon className='product-module-icon' />
                  <p className='product-module-title'>{module.title}</p>
                </div>
              )}
            </div>
            <div className={`product-button-container ${loaded ? "loaded" : ""}`}>
              <button className='product-button'>Ver Info</button>
            </div>

          </div>
          <div className={`product-image-container ${loaded ? "loaded" : ""}`}>
            <img
              className='product-image'
              src={selectedItem.image}
              alt={selectedItem.title}
              onLoad={() => setLoaded(true)} />
          </div>


        </div>
        <div id="pagination">
          {
            ProductsList.map((item, index) =>
              <button
                key={index}
                onClick={() => selectedNewItem(index, ProductsList)}
                className={`product-button ${index === selectedIndex ? "active" : ""}`}
                data-slide={index}
              >
              </button>
            )
          }
        </div>
      </div>

      <div></div>





    </ProductBox>
  )
}

export default ProductsSection