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

interface  HomeProps {
  products:Product[],
  services:Services[],
  dataBussiness:DataBussiness[],
  faq:Faq[]
}

const HomePage = (props:HomeProps) => {

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

    MyScrollReveal.reveal(".product-image-container", { origin: 'rigth', ...config2 });
    MyScrollReveal.reveal(".product-class", { origin: 'left', ...config0 });
    MyScrollReveal.reveal(".product-title", { origin: 'left', ...config1 });
    MyScrollReveal.reveal(".product-description", { origin: 'left', ...config2 });
    MyScrollReveal.reveal(".product-button-container", { origin: 'left', ...config3 });

    MyScrollReveal.reveal(".services-list-item", { origin: 'left', ...config2 });

    MyScrollReveal.reveal(".text-experience", { origin: 'left', ...config0 });
    MyScrollReveal.reveal(".text-description", { origin: 'left', ...config1 });
    MyScrollReveal.reveal(".about-button-link", { origin: 'left', ...config2 });
    MyScrollReveal.reveal(".technologies", { origin: 'rigth', ...config1 });
    MyScrollReveal.reveal(".line-horizontal-long", { origin: 'rigth', ...config2 });
    MyScrollReveal.reveal(".technologies-title", { origin: 'rigth', ...config3 });
    MyScrollReveal.reveal(".about-data-title", { origin: 'bottom', ...config0 });
    MyScrollReveal.reveal(".about-data-description", { origin: 'bottom', ...config1 });
    MyScrollReveal.reveal(".about-data-line", { origin: 'bottom', ...config2 });

    MyScrollReveal.reveal(".faq-list", { origin: 'left', ...config1 });

    MyScrollReveal.reveal(".contact-title", { origin: 'left', ...config1 });
    MyScrollReveal.reveal(".contact-message", { origin: 'left', ...config1 });
    MyScrollReveal.reveal(".contact-button-container", { origin: 'left', ...config1 });

    MyScrollReveal.reveal(".footer-slogan-text", { origin: 'bottom', ...config0 });
    MyScrollReveal.reveal(".footer-social-list", { origin: 'bottom', ...config1 });

    MyScrollReveal.reveal(".footer-derechos", { origin: 'bottom', ...config2 });

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