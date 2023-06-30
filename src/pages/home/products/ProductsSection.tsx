import  { useState } from 'react'
import { ProductBox } from './ProductsStyle';
import { Product } from '../../../utils/Classes';
import videoProduct from '../../../assets/webp/video-work.webp'

interface ProductsProps {
  products: Product[],
} 


const ProductsSection = (props:ProductsProps) => {
  const [selectedItem, setSelectedItem] = useState(props.products[0])
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

  const selectedNewItem = (index: number, items: Product[]) => {
    setLoaded(false)
    setTimeout(() => {
      /*const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
      */setSelectedItem(items[index])
      setSelectedIndex(index)
    }, 1000)
  }

  const ProductClick = (url:string) => {
    const nuevaVentana = window.open(url, '_blank');
    if(nuevaVentana)nuevaVentana.focus();
}
  
  return (
    <ProductBox id='product'>
      <img  className='product-back-video' data-type="parallax" data-depth="0.10" src={videoProduct}>
      </img>
      <div className='title-section-container'>
        <div className='h6 section-title'>
          Nuestros Productos
        </div>
      </div>


      <div className='product-list'>
        <div className='product-item' >
          <div className='product-info'>
            <p className={`product-class ${loaded ? "loaded" : ""}`} >{selectedItem.item}</p>
            <h1 className={`product-title bold ${loaded ? "loaded" : ""}`}>{selectedItem.title}</h1>
            <p className={`product-description ${loaded ? "loaded" : ""}`}>{selectedItem.description}</p>
            
            <div className={`product-button-container ${loaded ? "loaded" : ""}`}>
              <button onClick={()=>ProductClick(selectedItem.link)} className='product-button'>Ver Info</button>
            </div>

          </div>
          <div className={`product-image-container ${loaded ? "loaded" : ""}`}>
            <img
              className='product-image'
              src={selectedItem.image}
              alt={selectedItem.title}
              onLoad={() => setLoaded(true)} 
              />
          </div>


        </div>
        <div id="pagination">
          {
            props.products.map((item, index) =>
              <button
                key={index}
                onClick={() => selectedNewItem(index, props.products)}
                className={`product-button ${index === selectedIndex ? "active" : ""}`}
                data-slide={index}
                about={item.description}
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