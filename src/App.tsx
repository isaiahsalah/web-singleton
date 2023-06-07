import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import './App.css'
import HomePage from './pages/home/HomePage'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  /*
  useEffect(() => {
    window.addEventListener('scroll', function(event) {
      const topDistance = window.pageYOffset;
      const layer = document.querySelector("presentation-backimage")   as HTMLElement;
    
 
        //const depth = layer.getAttribute('data-depth');
        const movement = -(topDistance * 5);
        const translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        /*layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      
      return;
    });
  })
  


  useEffect(() => {
    const textElements = document.querySelectorAll('.title-section-back');
  
    const handleIntersection = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("se ve")
          const textElement = entry.target as HTMLDivElement;
          const scrollPosition = window.scrollY;
          const textOffset = scrollPosition * 0.5; // Ajusta la velocidad de desplazamiento
  
          textElement.style.transform = 'translateX(' + textOffset + 'px)';
        }
      });
    };
  
    const options = {
      threshold: 0 // Ajusta el valor según tus necesidades
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    textElements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);


/*
  useEffect(() => {
    const textElements = document.querySelectorAll('.title-section-back') ;

    window.addEventListener('scroll', function() {

      const scrollPosition = window.scrollY;

  for (let i = 0; i < textElements.length; i++) {
    const textElement = textElements[i] as HTMLDivElement;

    const textOffset = scrollPosition * 0.5; // Ajusta la velocidad de desplazamiento

    textElement.style.transform = 'translateX(' + textOffset + 'px)';
  }



      //const textOffset = scrollPosition * 0.5; // Ajusta la velocidad de desplazamiento
    
      //textElement.style.transform = 'translateX(' + textOffset + 'px)';
    });
  }, [])








  var topDistance = window.pageYOffset;
  var layers = document.querySelectorAll("[data-type='parallax']");

  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var depth = layer.getAttribute('data-depth');
    var movement = -(topDistance * depth);
    var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
  return;






*/
  useEffect(() => {

    const navBar = document.querySelector("#header-nav") as HTMLElement;
    let prevScrollPos = window.pageYOffset;
    if (navBar) {

      window.onscroll = () => {
        const layers = document.querySelectorAll("[data-type='parallax']");
        const servicesBackImage = document.querySelector("#services-back-image") as HTMLImageElement;
        const topDistance = window.pageYOffset;

       // const presentationBackImage = document.querySelector(".presentation-back-image")   as HTMLElement;
        //const productBackImage = document.querySelector(".product-back-video")   as HTMLElement;
          const movement = -(topDistance * 0.1);
          const translate3d = 'translate3d(' + movement + 'px, 0,0)';
          servicesBackImage.style.transform = translate3d;



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

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
