import { useEffect, useState } from 'react'
import { BannerBox } from './BannerStyle';

interface Props {
    items: any[];
}
const BannerComponent = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState(props.items[0])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            selectedNewItem(selectedIndex, props.items)
        }, 4500)
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
        <BannerBox>


            <div className='slide-container'>
                <div className={`item-backimage-container`}>
                    <img
                        src={selectedItem.backimage}
                        className={`item-backimage ${loaded ? "loaded" : ""}`}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
                <div className='item-images'>
                    <div className={`item-secondimage-container ${loaded ? "loaded" : ""}`}>
                        <img
                            src={selectedItem.backimage}
                            className='item-secondimage'
                            onLoad={() => setLoaded(true)}
                        />
                    </div>
                    
                    <div className={`item-logo-container ${loaded ? "loaded" : ""}`}>
                        <img
                            src={selectedItem.logo}
                            className='item-logo'
                            onLoad={() => setLoaded(true)} />
                    </div>
                </div>
                <div className={`item-title-variant-container ${loaded ? "loaded" : ""}`}>
                <h1 className={`item-title-variant ${loaded ? "loaded" : ""}`}>
                        {selectedItem.title}
                    </h1>
                    </div>


                <div className={`item-info ${loaded ? "loaded" : ""}`}>
                    <p className={`item-item ${loaded ? "loaded" : ""}`}>
                        {selectedItem.item}
                        </p>
                    <h2 className={`item-title ${loaded ? "loaded" : ""}`}>
                        {selectedItem.title}
                        </h2>
                    <p className={`item-description ${loaded ? "loaded" : ""}`}>
                        {selectedItem.description}
                        </p>
                    <div className='item-button-container'>
                        <button className={`item-button ${loaded ? "loaded" : ""}`}>Ver Más</button>
                    </div>
                </div>
            </div>

        </BannerBox>
    )
}

export default BannerComponent