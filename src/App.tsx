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
*/
  useEffect(() => {

    const navBar = document.querySelector("#header-nav") as HTMLElement;
    let prevScrollPos = window.pageYOffset;
    if (navBar ) {

      window.onscroll = () => {

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
