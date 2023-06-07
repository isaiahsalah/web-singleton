import React from "react";
import { AboutBox } from "./AboutStyle";

import { useNavigate } from "react-router-dom";
import { AboutData, TeamList, Technologies } from "../../../utils/Config";



const AboutSection = () => {
    const navigate = useNavigate();
    return (
        <AboutBox>
            <div className="title-section-container">
                    <h6 className="section-title">Uno poco sobre nosotros</h6>
                </div>
            <div className="about-section">
                
                <div className="about-contend">
                    <div className="text">
                        <div className="text-experience">
                            <h1 className="experience-year">17</h1>
                            <h6 className="experience-year-about">
                                años dando soluciones tecnologicas a pequeñas y grandes empresas
                            </h6>
                        </div>
                        <p className="text-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button onClick={() => navigate("/about")}>Ver más</button>
                    </div>
                    <div className="technologies-container">
                        <div className="line-horizontal-long" />
                        <div className="technologies">
                            {Technologies.map((item, index) => {
                                return (
                                    <div className="technologies-item" key={index}>
                                        <div className="technologies-icon">{item.icon}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="line-horizontal-long" />
                        <p className="technologies-title">
                            Tecnologias con las que trabajamos
                        </p>
                    </div>
                </div>

            </div>
            <div className="about-data-list-container">
                <div className="about-data-list">
                    {AboutData.map((item, index) => (
                        <>
                            <div className="about-data-item" key={index}>
                                <h2 className="about-data-title">{item.title}</h2>
                                <p className="about-data-description">{item.description}</p>
                            </div>
                            {
                                //console.log((index+1)+"-"+AboutData.length)
                                (index + 1) === AboutData.length ? null : <div className="about-data-line" />
                            }
                        </>

                    ))}
                </div>
            </div>
        </AboutBox>
    );
};

export default AboutSection;
