import { AboutBox } from "./AboutStyle";

import { useNavigate } from "react-router-dom";
import { AboutSectionData, TechnologiesData } from "../../../utils/Config";
import { DataBussiness } from "../../../utils/Classes";

interface AboutProps {
    dataBussiness: DataBussiness[],
}

const AboutSection = (props: AboutProps) => {
    const navigate = useNavigate();
    return (
        <AboutBox id="about">
            <div className="title-section-container">
                <h6 className="section-title">Uno poco sobre nosotros</h6>
            </div>
            <div className="about-section">

                <div className="about-contend">
                    <div className="text">
                        <div className="text-experience">
                            <h1 className="experience-year">{AboutSectionData.years}</h1>
                            <h6 className="experience-year-about">
                                {AboutSectionData.title}                            </h6>
                        </div>
                        <p className="text-description">
                            {AboutSectionData.subtitle}
                        </p>
                        <button className="about-button-link" onClick={() => navigate("/about")}>Ver Equipo</button>
                    </div>
                    <div className="technologies-container">
                        <div className="line-horizontal-long" />
                        <div className="technologies">
                            {TechnologiesData.map((item, index) =>
                                <div className="technologies-item" key={index}>
                                    <div className="technologies-icon">{item.icon}</div>
                                </div>
                            )}
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
                    {props.dataBussiness.map((item, index) => (
                        <div className="about-data-item-container" key={index}>
                            <div className="about-data-item" key={index}>
                                <h2 className="about-data-title">{item.title}</h2>
                                <p className="about-data-description">{item.description}</p>
                            </div>
                            {(index + 1) === props.dataBussiness.length ? null : <div className="about-data-line" />
                            }
                        </div>

                    ))}
                </div>
            </div>
        </AboutBox>
    );
};

export default AboutSection;
