import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Color } from './utils/Config'
import MyScrollReveal from './components/myScrollReveal/MyScrollReveal'
import { GlobalStyle } from './GlobalStyle.ts'



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: Color.active },
    background: { default: Color.secondary }
  },
});



function App() {


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

    MyScrollReveal.reveal(".title-section-container", {origin: 'top',...config3});

    MyScrollReveal.reveal("#chat-container", {origin: 'bottom',...config2});

    MyScrollReveal.reveal("#logo-container", {origin: 'top',...config0});
    MyScrollReveal.reveal(".nav-menu", {origin: 'top',...config1});
    MyScrollReveal.reveal(".nav-button-cotizar", {origin: 'top',...config2});
    MyScrollReveal.reveal(".hamburger", {origin: 'top',...config1});


    MyScrollReveal.reveal(".presentation-title", {origin: 'left',...config0});
    MyScrollReveal.reveal(".presentation-description", {origin: 'left',...config1});
    MyScrollReveal.reveal(".presentation-button-container", {origin: 'left',...config2});

    MyScrollReveal.reveal(".product-image-container", {origin: 'rigth',...config2});
    MyScrollReveal.reveal(".product-class", {origin: 'left',...config0});
    MyScrollReveal.reveal(".product-title", {origin: 'left',...config1});
    MyScrollReveal.reveal(".product-description", {origin: 'left',...config2});
    MyScrollReveal.reveal(".product-button-container", {origin: 'left',...config3});

    MyScrollReveal.reveal(".services-list-container", {origin: 'left',...config2});

    MyScrollReveal.reveal(".text-experience", {origin: 'left',...config0});
    MyScrollReveal.reveal(".text-description", {origin: 'left',...config1});
    MyScrollReveal.reveal(".about-button-link", {origin: 'left',...config2});
    MyScrollReveal.reveal(".technologies", {origin: 'rigth',...config1});
    MyScrollReveal.reveal(".line-horizontal-long", {origin: 'rigth',...config2});
    MyScrollReveal.reveal(".technologies-title", {origin: 'rigth',...config3});
    MyScrollReveal.reveal(".about-data-title", {origin: 'bottom',...config0});
    MyScrollReveal.reveal(".about-data-description", {origin: 'bottom',...config1});
    MyScrollReveal.reveal(".about-data-line", {origin: 'bottom',...config2});

    MyScrollReveal.reveal(".faq-list", {origin: 'left',...config1});

    MyScrollReveal.reveal(".contact-title", {origin: 'left',...config1});
    MyScrollReveal.reveal(".contact-message", {origin: 'left',...config1});
    MyScrollReveal.reveal(".contact-button-container", {origin: 'left',...config1});

    MyScrollReveal.reveal(".footer-slogan-text", {origin: 'bottom',...config0});
    MyScrollReveal.reveal(".footer-social-list", {origin: 'bottom',...config1});

    MyScrollReveal.reveal(".footer-derechos", {origin: 'bottom',...config2});


    /*MyScrollReveal.reveal("#chat-container", configBottom);
    MyScrollReveal.reveal("#home", configTop);
    MyScrollReveal.reveal("#product", configRight);
    MyScrollReveal.reveal("#service", configLeft);
    MyScrollReveal.reveal("#about", configLeft);
    MyScrollReveal.reveal("#faq", configLeft);
    MyScrollReveal.reveal("#contact", configLeft);
    MyScrollReveal.reveal("#footer", configBottom);*/

  }, [])
  useEffect(() => {

    const navBar = document.querySelector("#header-nav") as HTMLElement;
    let prevScrollPos = window.pageYOffset;
    if (navBar) {

      window.onscroll = () => {
        const layers = document.querySelectorAll("[data-type='parallax']");

        const servicesBackImage = document.querySelector("#services-back-image") as HTMLImageElement;
        const FaqBackImage = document.querySelector("#presentation-back-image") as HTMLImageElement;

        const topDistance = window.pageYOffset;

        const movement = -(topDistance * 0.1);
        const translate3d = 'translate3d(' + movement + 'px, 0,0)';
        servicesBackImage.style.transform = translate3d;
        FaqBackImage.style.transform = translate3d;

        for (let i = 0; i < layers.length; i++) {
          const layer = layers[i] as HTMLElement;
          const depthString = layer.getAttribute('data-depth');
          if (depthString) {
            const depth = parseFloat(depthString);
            const movement = -(topDistance * depth);
            const translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            /*layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;*/
            layer.style.transform = translate3d;
          }

        }





        if (navBar.style.left === "") {
          navBar.style.top = "0px";
        }

        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          navBar.style.top = "0px";
          navBar.style.opacity = "1";
        } else {
          navBar.style.top = "-15%";
          navBar.style.opacity = "0";
        }
        prevScrollPos = currentScrollPos;


      }
    }

    /*// Cleanup function to remove the event listener
    return () => {
        window.onscroll = null;
    };*/
  }, []);


  return (

    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  )
}

export default App
