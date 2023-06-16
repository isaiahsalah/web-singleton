import  { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import { NavegatorBox } from './NavegatorStyle'
import { GiHamburgerMenu } from "react-icons/gi"
import LogoComponent from '../logo/LogoComponent'
import { CotizarButtonData } from '../../utils/Config';

const NavegatorComponent = () => {

    useEffect(() => {
        const div = document.querySelector('.nav-menu') as HTMLElement;

        function ajustarDiv() {
            const ventanaAncho = window.innerWidth;

            if (ventanaAncho < 1200) {
                div.style.display = "none";
            } else {
                div.style.display = 'flex'; // O el valor original deseado
            }
        }

        // Llama a la función cuando la ventana cambia de tamaño
        window.addEventListener('resize', ajustarDiv);

        // Llama a la función al cargar la página
        window.addEventListener('load', ajustarDiv);
    }, [])



    const openMenuMovil = () => {
        const menu = document.querySelector(".nav-menu") as HTMLElement;
        if (menu && menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "grid";
        }
    }; 
    const closeMenuMovil = () => {
        const menu = document.querySelector(".nav-menu") as HTMLElement;
        const ancho = window.innerWidth;
        if (ancho <= 1200 && menu.style.display === "grid") {
            menu.style.display = "none";
        }
    };

  
        const cotizarClick = () => {
          const nuevaVentana = window.open(CotizarButtonData.url, '_blank');
          if(nuevaVentana)nuevaVentana.focus();
      }

    return (
        <NavegatorBox>
            <header id='header-nav'>
                <nav id='nav-container' className='nav-container'>
                    <LogoComponent />
                    <div className="hamburger" onClick={openMenuMovil}>
                        <button className="icon-movil-container" >
                            <h4>
                                <GiHamburgerMenu className="icon-movil" />
                            </h4>
                        </button>
                    </div>
                    <div className='nav-menu-container'>
                        <ul className='nav-menu' onClick={closeMenuMovil}>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/', hash: '#home' }}>Inicio</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/', hash: '#product' }}>Productos</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/', hash: '#service' }}>Servicios</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/about', hash: '#about' }}>Nosotros</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/', hash: '#faq' }}>Faq</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/', hash: '#contact' }}>Contacto</HashLink></li>
                            <div>
                                <Link to="./" className='country-container bolivia'>
                                    <span className='B'>
                                        B
                                    </span >
                                    <span className='O'>
                                        O
                                    </span >
                                    <span className='L'>
                                        L
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <Link to="./pa" className='country-container paraguay'>
                                    <span className='P'>
                                        P
                                    </span >
                                    <span className='A'>
                                        A
                                    </span >
                                    <span className='R'>
                                        R
                                    </span>
                                </Link>
                            </div>

                        </ul>
                        <div className='nav-button-cotizar'>
                            <button onClick={cotizarClick} className='nav-item-cotizar'>
                                {CotizarButtonData.title}
                            </button>
                        </div>

                    </div>
                </nav>
            </header>

        </NavegatorBox>
    )
}

export default NavegatorComponent