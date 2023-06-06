import React, { useState, useEffect } from 'react'
import { TeamSectionBox } from './TeamSectionStyle'
import { TeamList } from '../../../utils/Config'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const TeamSection = () => {
    const [selectedItem, setSelectedItem] = useState(TeamList[0])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextNewItem(selectedIndex, TeamList)
        }, 3500)
        return () => {
            clearInterval(interval)
        }
    }, [])



    const nextNewItem = (index: number, items: any, next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
            setSelectedItem(items[nextIndex])
            //console.log(items[nextIndex])
            setSelectedIndex(nextIndex)
        }, 1000)
    }

    const selectedNewItem = (nextIndex: number) => {
        setLoaded(false)
        setTimeout(() => {
            setSelectedItem(TeamList[nextIndex])
            setSelectedIndex(nextIndex)
        }, 1000)
    }




    return (
        <TeamSectionBox>
            <h1 className='title-section-back'>Equipo</h1>
            <div className='title-section-container'>
                <div className='line-horizontal-long' />
                <h5 className='section-title abril'>
                    Nuestro Equipo
                </h5>
                <div className='line-horizontal-short' />
            </div>
            <div className="slider-list">
                <div className="slider">
                    <div className="slider-inner">
                        <div id="slider-content">
                            <div className={`meta ${loaded ? "loaded" : ""}`}>
                                {selectedItem.Name}
                            </div>
                            <h2 className={`abril slide-title ${loaded ? "loaded" : ""}`} onLoad={() => setLoaded(true)} >
                                {selectedItem.Name}
                            </h2>

                            <div className={`meta-description ${loaded ? "loaded" : ""}`} onLoad={() => setLoaded(true)}>
                                Descripción
                            </div>
                            <p className={`slide-description ${loaded ? "loaded" : ""}`} onLoad={() => setLoaded(true)}>
                                {selectedItem.Description}
                            </p>
                            <button className={`slide-button ${loaded ? "loaded" : ""}`} onLoad={() => setLoaded(true)}>
                                Ver mas
                            </button>
                        </div>
                    </div>
                    <img className={`slide-image ${loaded ? "loaded" : ""}`} src={selectedItem.Image} onLoad={() => setLoaded(true)} />

                    <div className="pagination">
                        {
                            TeamList.map((item, i) =>
                                <button onClick={() => { selectedNewItem(i) }} key={i} className={selectedItem.Id == item.Id ? `active` : ''} />
                            )
                        }
                    </div>

                </div>
            </div>

        </TeamSectionBox>
    );
}

export default TeamSection