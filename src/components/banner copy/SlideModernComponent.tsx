import { useEffect, useState } from 'react'

import img3 from '../../assets/images/imagen3.jpg'
import { SlideModernBox } from './SlideModernStyle';

interface Props {
    items: any[];
}
const SlideModernComponent = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState(props.items[0])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            selectedNewItem(selectedIndex, props.items)
        }, 5500)
        return () => {
            clearInterval(interval)
        }
    })
    /*
        useEffect(() => {
            const imagen = document.getElementById('item-image');
    
            const range = 18;
    
            window.onpointermove = (event) => {
                const { clientX, clientY } = event;
                const x = Math.round(clientX * range / window.innerWidth) - range / 2;
                const y = Math.round(clientY * range / window.innerHeight) - range / 2;
                if(imagen){
                    imagen.
                    imagen.style.setProperty('--x', `${x}px`);
                    imagen.style.setProperty('--y', `${y}px`);
                    const valorColorX = getComputedStyle(imagen).getPropertyValue('--x');
                    const valorColorY = getComputedStyle(imagen).getPropertyValue('--y');
                    //console.log(valorColorX+"-"+valorColorY)
    
                }
                
    
                //console.log(x+"/"+y)
                //console.log(valorColorX+"/"+valorColorY)
    
            };
        }, [])*/



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
        selectedNewItem(selectedIndex, props.items)
    }
    const previus = () => {
        selectedNewItem(selectedIndex, props.items, false)
    }
    return (
        <SlideModernBox>
            <div>
                <img className='item-backimage' src={selectedItem.backimage} />

                <div className='slide-container'>
                    <div className={`item-frontimage-container ${loaded ? "loaded" : ""}`}>
                        <img
                            src={selectedItem.backimage}
                            className='item-frontimage'
                            onLoad={() => setLoaded(true)} />
                    </div>
                    <div className={`item-title-variant ${loaded ? "loaded" : ""}`}>
                        {selectedItem.title}
                    </div>
                    <div className={`item-logo-container ${loaded ? "loaded" : ""}`}>
                        <img
                            src={selectedItem.logo}
                            className='item-logo'
                            onLoad={() => setLoaded(true)} />
                    </div>

                    <div className={`item-info ${loaded ? "loaded" : ""}`}>
                        <div className={`item-item ${loaded ? "loaded" : ""}`}>{selectedItem.item}</div>
                        <div className={`item-title ${loaded ? "loaded" : ""}`}>{selectedItem.title}</div>
                        <div className={`item-description ${loaded ? "loaded" : ""}`}>{selectedItem.description}</div>
                        <div className='item-button-container'>
                            <button className={`item-button ${loaded ? "loaded" : ""}`}>Ver Más</button>
                        </div>
                    </div>

                </div>
                <div className="untitled__shutters"></div>

            </div>


        </SlideModernBox>
    )
}

export default SlideModernComponent