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
import { AboutData, ProductsList, ServicesList } from '../../utils/Config'

const HomePage = () => {
  /*const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [dataBussiness, setDataBussiness] = useState<DataBussiness[]>([]);



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

      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []);*/

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
      <ProductsSection products={ProductsList}/>
      <ServicesSection services={ServicesList}/>
      <AboutSection dataBussiness={AboutData}/>
      <FaqSection />
      <ContactSection />
      <FooterComponent />
    </HomeBox>
  )

}

export default HomePage