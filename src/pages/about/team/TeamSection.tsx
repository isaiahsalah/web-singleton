import React, { useState, useEffect } from 'react'
import { TeamSectionBox } from './TeamSectionStyle'
import { TeamList } from '../../../utils/Config'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Box } from "@mui/material"

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
    })



    const nextNewItem = (index: number, items: any, next = true) => {
        //console.log(loaded)

        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
            setSelectedItem(items[nextIndex])
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
            
            <div className="title-section-container">
                <h6 className="section-title">Nuestra Equipo</h6>
            </div>

            <div className="team-list">
                {TeamList.map((item, index) =>
                
                    <div key={index} className="team-item">
                        <img className={`team-item-image`} src={item.Image}  />
                        <div className="slider-inner">
                            <div id="slider-content">
                                <div className={`meta`} >
                                    {item.Name}
                                </div>
                                <h2 className={`abril slide-title`}  >
                                    {item.Name}
                                </h2>

                                <div className={`meta-description`} >
                                    Descripción
                                </div>
                                <p className={`team-item-description`}>
                                    {item.Description}
                                </p>
                            </div>
                        </div>
                        


                    </div>
                )
                }

            </div>

        </TeamSectionBox>
    );
}

export default TeamSection