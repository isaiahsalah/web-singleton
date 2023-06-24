import { useEffect } from 'react'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'

import { HomeBox } from './HomeStyle'
import PresentationSection from './presentation/PresentationSection'
import ProductsSection from './products/ProductsSection'
import ServicesSection from './services/ServicesSection'
import AboutSection from './about/AboutSection'
import ContactSection from './contact/ContactSection'
import FooterComponent from '../../components/footer/FooterComponent'
import ChatComponent from '../../components/chat/ChatComponent'
import FaqSection from './faq/FaqSection'
import {Faq, Product, Services, DataBussiness  } from '../../utils/Classes'
import MyScrollReveal from '../../components/myScrollReveal/MyScrollReveal'
import { DelayAnimationIntro } from '../../utils/Animations'

interface  HomeProps {
  products:Product[],
  services:Services[],
  dataBussiness:DataBussiness[],
  faq:Faq[]
}

const HomePage = (props:HomeProps) => {

  useEffect(() => {

    MyScrollReveal.reveal(".title-section-container", { origin: 'top', ...DelayAnimationIntro(0) });

    MyScrollReveal.reveal(".presentation-title", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".presentation-description", { origin: 'left', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".presentation-button-container", { origin: 'left', ...DelayAnimationIntro(750) });
 /*
    MyScrollReveal.reveal(".product-image-container", { origin: 'rigth', ...DelayAnimationIntro(0) });
    MyScrollReveal.reveal(".product-class", { origin: 'left', ...DelayAnimationIntro(0) });
    MyScrollReveal.reveal(".product-title", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".product-description", { origin: 'left', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".product-button-container", { origin: 'left', ...DelayAnimationIntro(750) });*/

    MyScrollReveal.reveal(".services-list-item", { origin: 'left', ...DelayAnimationIntro(250) });

    MyScrollReveal.reveal(".text-experience", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".text-description", { origin: 'left', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".about-button-link", { origin: 'left', ...DelayAnimationIntro(750) });
    MyScrollReveal.reveal(".technologies", { origin: 'rigth', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".line-horizontal-long", { origin: 'rigth', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".technologies-title", { origin: 'rigth', ...DelayAnimationIntro(250) });

    MyScrollReveal.reveal(".about-data-title", { origin: 'bottom', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".about-data-description", { origin: 'bottom', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".about-data-line", { origin: 'bottom', ...DelayAnimationIntro(750) });

    MyScrollReveal.reveal(".faq-list", { origin: 'left', ...DelayAnimationIntro(250) });

    MyScrollReveal.reveal(".contact-title", { origin: 'left', ...DelayAnimationIntro(250) });
    MyScrollReveal.reveal(".contact-message", { origin: 'left', ...DelayAnimationIntro(500) });
    MyScrollReveal.reveal(".contact-button-container", { origin: 'left', ...DelayAnimationIntro(700) });

  }, [])
/*
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [dataBussiness, setDataBussiness] = useState<DataBussiness[]>([]);
  const [faq, setFaq] = useState<Faq[]>([]);
  const [team, setTeam] = useState<Team[]>([]);
  const [social, setSocial] = useState<Social[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])*/

/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://docs.google.com/spreadsheets/d/1cOh3fWUC__I8hr-rDpILpl44N7Tw_T3noSuU1jAa40w/gviz/tq?tqx=out:json'
        );

        const rawData = response.data.substr(47).slice(0, -2);
        const parsedData = JSON.parse(rawData);

        setProducts(JSON.parse(parsedData.table.rows[0].c[1].v))
        setServices(JSON.parse(parsedData.table.rows[1].c[1].v))
        setDataBussiness(JSON.parse(parsedData.table.rows[2].c[1].v))
        setFaq(JSON.parse(parsedData.table.rows[3].c[1].v))
        setTeam(JSON.parse(parsedData.table.rows[4].c[1].v))
        setSocial(JSON.parse(parsedData.table.rows[5].c[1].v))
        console.log("baolbaol")

      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    fetchData();
  }, []);
*/
  useEffect(() => {
    setTimeout(() => {
      const app = document.querySelector(".app") as HTMLElement;
      if (app) {
        app.style.visibility = 'visible';
      }
    }, 0);
  }, [])




    return (
      <HomeBox className="app">
        <ChatComponent />
        <NavegatorComponent />
        <PresentationSection />
        <ProductsSection products={props.products} />
        <ServicesSection services={props.services} />
        <AboutSection dataBussiness={props.dataBussiness} />
        <FaqSection faqList={props.faq}/>
        <ContactSection />
        <FooterComponent />
      </HomeBox>
    )
}

export default HomePage