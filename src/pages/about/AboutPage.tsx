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

interface  AboutProps {
  team:Team[]
}
const AboutPage = (props:AboutProps) => {
    
  useEffect(() => {

    const config0 = {
      distance: '200%',
      duration: 800,
      delay: 0,
      opacity: 0,
      easing: 'ease',
    }
    const config1 = {
      distance: '200%',
      duration: 800,
      delay: 250,
      opacity: 0,
      easing: 'ease',
    }
    const config2 = {
      distance: '200%',
      duration: 800,
      delay: 500,
      opacity: 0,
      easing: 'ease',
    }
    const config3 = {
      distance: '200%',
      duration: 800,
      delay: 750,
      opacity: 0,
      easing: 'ease',
    }

    MyScrollReveal.reveal(".title-section-container", { origin: 'top', ...config3 });

    MyScrollReveal.reveal("#chat-container", { origin: 'bottom', ...config2 });

    MyScrollReveal.reveal("#logo-container", { origin: 'top', ...config0 });
    MyScrollReveal.reveal(".nav-menu", { origin: 'top', ...config1 });
    MyScrollReveal.reveal(".nav-button-cotizar", { origin: 'top', ...config2 });
    MyScrollReveal.reveal(".hamburger", { origin: 'top', ...config1 });


    MyScrollReveal.reveal(".presentation-title", { origin: 'left', ...config0 });
    MyScrollReveal.reveal(".presentation-description", { origin: 'left', ...config1 });
    MyScrollReveal.reveal(".presentation-button-container", { origin: 'left', ...config2 });

    MyScrollReveal.reveal(".about-title", { origin: 'rigth', ...config0 });
    MyScrollReveal.reveal(".about-description", { origin: 'rigth', ...config1 });
    MyScrollReveal.reveal(".about-button-container", { origin: 'rigth', ...config2 });

    MyScrollReveal.reveal(".mision-title", { origin: 'rigth', ...config0 });
    MyScrollReveal.reveal(".mision-description", { origin: 'rigth', ...config1 });

    MyScrollReveal.reveal(".team-title", { origin: 'left', ...config0 });
    MyScrollReveal.reveal(".team-member", { origin: 'left', ...config1 });

    MyScrollReveal.reveal(".footer-slogan-text", { origin: 'bottom', ...config0 });
    MyScrollReveal.reveal(".footer-social-list", { origin: 'bottom', ...config1 });

    MyScrollReveal.reveal(".footer-derechos", { origin: 'bottom', ...config2 });

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