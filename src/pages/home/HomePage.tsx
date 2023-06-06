import React from 'react'
import NavegatorComponent from '../../components/navegator/NavegatorComponent'

import { HomeBox } from './HomeStyle'
import PresentationSection from './presentation/PresentationSection'
import { PresentationItems, ProductsList, SocialMedia } from '../../utils/Config'
import ProductsSection from './products/ProductsSection'
import BackgroundImageComponent from '../../components/background/BackgroundImageComponent'
import ServicesSection from './services/ServicesSection'
import AboutSection from './about/AboutSection'
import BlogSection from './blog/BlogSection'
import ContactSection from './contact/ContactSection'
import ContactComponent from '../../components/contact/ContactComponent'
import FooterComponent from '../../components/footer/FooterComponent'
import SocialMediaComponent from '../../components/socialMedia/SocialMediaComponent'
import TeamSection from './team/TeamSection'



const HomePage = () => {
  return (
    <HomeBox>
      <BackgroundImageComponent/>
      <ContactComponent SocialMedia={SocialMedia}/>
      <SocialMediaComponent SocialMedia={SocialMedia}/>
      <NavegatorComponent />
      <PresentationSection />
      <ProductsSection />
      <ServicesSection/>
      <AboutSection/>
      <TeamSection/>

      <BlogSection/>
      <ContactSection/>
<FooterComponent/>
    </HomeBox>
  )
}

export default HomePage