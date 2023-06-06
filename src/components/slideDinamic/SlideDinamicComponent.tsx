import React, { useState } from 'react'
import { SlideDinamicBox } from './SlideDinamicStyle'

interface Props {
    items: any[];
}
const SlideDinamicComponent = (props: Props) => {
    const [columnCount, setColumnCount] = useState(5); 

    return (
        <SlideDinamicBox
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

        </SlideDinamicBox>
    )
}

export default SlideDinamicComponent