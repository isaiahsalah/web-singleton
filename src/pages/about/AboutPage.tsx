import  { useEffect } from 'react'
import ChatComponent from '../../components/chat/ChatComponent'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'
import FooterComponent from '../../components/footer/FooterComponent'
import { AboutPageBox } from './AboutPageStyle'
import VisionMisionSection from './visionMision/VisionMisionSection'
import AboutPresentationSection from './presentation/AboutPresentationSection'
import TeamSection from './team/TeamSection'
import MyScrollReveal from '../../components/myScrollReveal/MyScrollReveal'
import { Team } from '../../utils/Classes'
import { DelayAnimationIntro } from '../../utils/Animations'

interface  AboutProps {
  team:Team[]
}
const AboutPage = (props:AboutProps) => {
    
  useEffect(() => {



    MyScrollReveal.reveal(".title-section-container", { origin: 'top', ...DelayAnimationIntro(0) });

    MyScrollReveal.reveal(".presentation-title", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".presentation-description", { origin: 'left', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".presentation-button-container", { origin: 'left', ...DelayAnimationIntro(750) });

    MyScrollReveal.reveal(".about-title", { origin: 'rigth', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".about-description", { origin: 'rigth', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".about-button-container", { origin: 'rigth', ...DelayAnimationIntro(750) });

    MyScrollReveal.reveal(".mision-title", { origin: 'rigth', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".mision-description", { origin: 'rigth', ...DelayAnimationIntro(500) });

    MyScrollReveal.reveal(".team-title", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".team-member", { origin: 'left', ...DelayAnimationIntro(500) });

  }, [])
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
            <TeamSection team={props.team}/>
            <FooterComponent />
        </AboutPageBox>
    )
}

export default AboutPage