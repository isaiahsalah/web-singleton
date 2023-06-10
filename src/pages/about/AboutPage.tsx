import React, { useEffect } from 'react'
import ChatComponent from '../../components/chat/ChatComponent'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'
import FooterComponent from '../../components/footer/FooterComponent'
import { AboutPageBox } from './AboutPageStyle'
import VisionMisionSection from './visionMision/VisionMisionSection'
import AboutPresentationSection from './presentation/AboutPresentationSection'
import TeamSection from './team/TeamSection'

const AboutPage = () => {
    useEffect(() => {
        setTimeout(() => {
            const app = document.querySelector(".app") as HTMLElement;
            if (app) {

                app.style.visibility = 'visible';
            }

        }, 0);

    }, [])


    return (
        <AboutPageBox className="app">
            <ChatComponent />
            <NavegatorComponent />
            <AboutPresentationSection />

            <VisionMisionSection />
            <TeamSection/>
            <FooterComponent />
        </AboutPageBox>
    )
}

export default AboutPage