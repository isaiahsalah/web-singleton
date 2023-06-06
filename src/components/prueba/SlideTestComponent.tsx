import { useEffect, useState } from 'react'

import img3 from '../../assets/images/imagen3.jpg'
import { SlideTestBox } from './SlideTestStyle';

interface Props {
    items: any[];
}
const SlideTestComponent = (props: Props) => {
    return (
        <SlideTestBox>
            {props.items.map((item, index) => {
                return (
                    <div className='item-container' key={index}>
                        <div className='item-text'>
                            <div className='item-item'>{item.title}</div>
                            <div className='item-title'>{item.title}</div>
                            <div className='item-description'>{item.description}</div>
                            <div className='item-button-container'>
                            <button className='item-button'>Ver Más</button>
                        </div>
                        </div>
                        
                        <img className='item-image' src={item.logo} alt="" />
                    </div>
                )
            })}
        </SlideTestBox>
    )
}

export default SlideTestComponent