import { useState } from 'react'
import { ProductBox } from './ProductsStyle';
import { Product } from '../../../utils/Classes';
import videoProduct from '../../../assets/webp/video-work.webp'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface ProductsProps {
  products: Product[],
}


const ProductsSection = (props: ProductsProps) => {
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
    if (index == selectedIndex) return;

    setLoaded(false)
    setTimeout(() => {
      /*const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
      */setSelectedItem(items[index])
      setSelectedIndex(index)
    }, 1000)
  }

  const ProductClick = (url: string) => {
    const nuevaVentana = window.open(url, '_blank');
    if (nuevaVentana) nuevaVentana.focus();
  }

  return (
    <ProductBox id='product'>
      <img className='product-back-video' data-type="parallax" data-depth="0.10" src={videoProduct}>
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
            <p className={` text-secon product-description ${loaded ? "loaded" : ""}`}>{selectedItem.description}</p>

            <div className={`product-button-container ${loaded ? "loaded" : ""}`}>
              <button onClick={() => ProductClick(selectedItem.link)} className='product-button'>Ver Info</button>
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
        <div className={`pagination ${loaded ? "loaded" : ""}`}>
          {
            props.products.map((item, index) =>
              <Grid2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '120px',
                  height: '120px',
                  cursor: 'pointer',
                  filter: index === selectedIndex ? "1" : "1",
                }}
                position={"relative"}
                overflow={"hidden"}
              >

                <img
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    padding: '10px',
                  }}
                  onClick={() => selectedNewItem(index, props.products)}
                  className={`product-button-pagination ${index === selectedIndex ? "active" : ""} ${loaded ? "loaded" : ""}`}
                  src={item.image}
                  alt={item.title}
                />
                {/*<button
                  key={index}
                  onClick={() => selectedNewItem(index, props.products)}
                  className={`product-button ${index === selectedIndex ? "active" : ""}`}
                  data-slide={index}
                  about={item.description}
                >
                </button>*/}
              </Grid2>

            )
          }
        </div>

      </div>






    </ProductBox>
  )
}

export default ProductsSection


/*
<Grid2
          order={{
            xs: 0,
            lg: 1
          }}
          xs={12}
          lg={4}
          padding={"40px"}
          position={'relative'}
          maxHeight={{
            xs: "200px",
            lg: "100%"
          }}
          display={{
            xs: "none",
            lg: "flex"
          }}
          overflow={"hidden"}

        >
          <div
            className={`background-color-image ${loadedBack ? "loadedBack" : ""}`}
            style={{
              position: "absolute",
              backgroundColor: "#3B5A72",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              zIndex: "-1",
              opacity: "1"

            }}
          />
          <img
            className={`product-image ${loaded ? "loaded" : ""}`}
            src={selectedItem.image}
            alt={selectedItem.title}
            onLoad={onLoadNewItem}
          />
        </Grid2>

        <Grid2
          //xs={0}
          //lg={2}

          order={{
            xs: 0,
            lg: 3
          }}

          width={"150px"}

          display={{
            lg: 'grid',
            xs: "none"
          }}
          justifyContent={'end'}
          alignItems={'end'}
          boxSizing={'border-box'}>
          <Grid2
            className={`pagination `}
            marginLeft={"40px"}
          >
            {
              props.products.map((item, index) =>
                <Grid2

                  style={{

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90px',
                    height: '90px',
                    cursor: 'pointer',
                    opacity: index === selectedIndex ? "1" : "1",


                  }}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <div
                    className={`background-color-pagination ${loadedBack ? "loadedBack" : ""}`}
                    style={{
                      position: "absolute",
                      backgroundColor: "#7fb8e4",
                      opacity: index === selectedIndex ? "1" : "0",

                      width: "100%",
                      height: "100%",
                      top: "0",
                      left: "0",
                      zIndex: "-1",

                    }}
                  />
                  <img
                    style={{
                      width: '90px',
                      height: '90px',
                      objectFit: 'contain',
                      padding: '10px',
                    }}
                    onClick={() => selectedNewItem(index, props.products)}
                    className={`product-button-pagination ${index === selectedIndex ? "active" : ""} ${loaded ? "loaded" : ""}`}
                    src={item.image}
                    alt={item.title}
                  />
                </Grid2>

              )
            }
          </Grid2>
        </Grid2>
        */