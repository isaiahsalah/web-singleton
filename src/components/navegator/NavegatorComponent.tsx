import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import { NavegatorBox } from './NavegatorStyle'
import singletonLogo from '../../assets/svgs/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi"
import SVGLogoComponent from '../../assets/svgs/logo'
import { Color } from '../../utils/Config'
import LogoComponent from '../logo/LogoComponent'

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

    return (
        <NavegatorBox>
            <header id='header-nav'>
                <nav id='nav-container' className='nav-container'>
                    <LogoComponent/>
                    <div className="hamburger" onClick={openMenuMovil}>
                        <div className="icon-movil-container" >
                            <h5>
                                <GiHamburgerMenu className="icon-movil" />
                            </h5>
                        </div>
                    </div>
                    <div className='nav-menu-container'>
                        <ul className='nav-menu' onClick={closeMenuMovil}>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/home', hash: '#home' }}>Home</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/home', hash: '#product' }}>Productos</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/home', hash: '#service' }}>Servicioss</HashLink></li>
                            <li className='nav-item'><Link className='nav-link' to='/about'>Nosotros</Link></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/home', hash: '#faq' }}>Faq</HashLink></li>
                            <li className='nav-item'><HashLink className='nav-link' to={{ pathname: '/home', hash: '#contact' }}>Contacto</HashLink></li>
                            <li>
                                <Link to="/" className='country-container'>
                                    <div className='country bolivia'>
                                        <span className='B'>
                                            B
                                        </span >
                                        <span className='O'>
                                            O
                                        </span >
                                        <span className='L'>
                                            L
                                        </span>
                                    </div>
                                    <div className='country paraguay'>
                                        <span className='P'>
                                            P
                                        </span >
                                        <span className='A'>
                                            A
                                        </span >
                                        <span className='R'>
                                            R
                                        </span>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                        <button className='nav-item-cotizar'>
                            Cotizar
                        </button>
                    </div>
                </nav>
            </header>

        </NavegatorBox>
    )
}

export default NavegatorComponent