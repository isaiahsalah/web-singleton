import { useEffect, useState } from 'react'
import { BrowserRouter,  Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Color } from './utils/Config'
import { GlobalStyle } from './GlobalStyle.ts'
import {  Faq, Product, Services, Team, DataBussiness } from './utils/Classes'

import axios from 'axios'
import NotFoundPage from './pages/notfound/NotFoundPage.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: Color.active },
    background: { default: Color.secondary }

  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          borderRadius: '50px',
          //color: Color.active,
          color: Color.alternative
        }
      }
    }
  }
});



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [dataBussiness, setDataBussiness] = useState<DataBussiness[]>([]);
  const [faq, setFaq] = useState<Faq[]>([]);
  const [team, setTeam] = useState<Team[]>([]);
  //const [social, setSocial] = useState<Social[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://docs.google.com/spreadsheets/d/1_A7p42AuyXe0xN1whzysk-LJ_nIKEeqhN3jDyzga1sY/gviz/tq?tqx=out:json'
        );

        const rawData = response.data.substr(47).slice(0, -2);
        const parsedData = JSON.parse(rawData);

        setProducts(JSON.parse(parsedData.table.rows[0].c[1].v))
        setServices(JSON.parse(parsedData.table.rows[1].c[1].v))
        setDataBussiness(JSON.parse(parsedData.table.rows[2].c[1].v))
        setFaq(JSON.parse(parsedData.table.rows[3].c[1].v))
        setTeam(JSON.parse(parsedData.table.rows[4].c[1].v))
        //setSocial(JSON.parse(parsedData.table.rows[5].c[1].v))
        setIsLoading(false)
        //console.log("baolbaol")

      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const navBar = document.querySelector("#header-nav") as HTMLElement;
    let prevScrollPos = window.pageYOffset;
    if (navBar && !isLoading) {
      window.onscroll = () => {
        const layers = document.querySelectorAll("[data-type='parallax']");
        const servicesBackImage = document.querySelector("#services-back-image") as HTMLImageElement;
        const FaqBackImage = document.querySelector("#presentation-back-image") as HTMLImageElement;
        const topDistance = window.pageYOffset;
        const movement = -(topDistance * 0.1);
        const translate3d = 'translate3d(' + movement + 'px, 0,0)';
        if(servicesBackImage){
          servicesBackImage.style.transform = translate3d;
          FaqBackImage.style.transform = translate3d;
        }
        

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
            //console.log("ola")
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

    // Cleanup function to remove the event listener
    return () => {
        window.onscroll = null;
    };
  }, [isLoading]);

if(isLoading){
  return (

    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <CssBaseline />
    </ThemeProvider>


  )
}else{
  return (

    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage
            products={products}
            services={services}
            dataBussiness={dataBussiness}
            faq={faq}
          />} />

          <Route path="/about" element={<AboutPage  team={team}/>} />
          <Route path="/pa" element={<NotFoundPage/>} />
          <Route
            element={<Navigate to="/" replace />}
          >
            <Route path="*" />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>


  )
}

}

export default App
