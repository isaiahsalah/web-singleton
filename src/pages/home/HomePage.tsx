import React, { useEffect } from 'react'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'

import { HomeBox } from './HomeStyle'
import PresentationSection from './presentation/PresentationSection'
import { PresentationItems, ProductsList, SocialMedia } from '../../utils/Config'
import ProductsSection from './products/ProductsSection'
import ServicesSection from './services/ServicesSection'
import AboutSection from './about/AboutSection'
import BlogSection from './blog/BlogSection'
import ContactSection from './contact/ContactSection'
import FooterComponent from '../../components/footer/FooterComponent'
import TeamSection from './team/TeamSection'
import ChatComponent from '../../components/chat/ChatComponent'
import FaqSection from './faq/FaqSection'



const HomePage = () => {
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
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      {/*<BlogSection />*/}
      <FaqSection />
      <ContactSection />
      <FooterComponent />
    </HomeBox>
  )
}

export default HomePage