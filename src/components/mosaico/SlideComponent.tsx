import React, { useState } from 'react'
import { SlideBox } from './SlideStyle'

interface Props {
    items: any[]; 
}
const SlideComponent = (props: Props) => {
    const [columnCount, setColumnCount] = useState(3); 

    return (
        <SlideBox
           >
            
            <div
             style={{ display: 'grid', gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
            className='products-list'>
                {props.items.map((item, index) => (
                    <div className='product-item' key={index}>
                        <img className='product-image' src={item.image} alt={item.name} />
                        <div className='product-info'>
                            <h3 className='product-item'>{item.item}</h3>
                            <h3 className='product-title'>{item.title}</h3>
                            <p className='product-description'>{item.description}</p>
                            <div className='product-button-container'>
                                <button className='product-button'>Ver más</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </SlideBox>
    )
}

export default SlideComponent