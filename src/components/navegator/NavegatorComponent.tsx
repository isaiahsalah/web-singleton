import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import { NavegatorBox } from './NavegatorStyle'
import { GiHamburgerMenu } from "react-icons/gi"
import LogoComponent from '../logo/LogoComponent'
import Bolivia from '../../assets/images/bolivia.png'
import Paraguay from '../../assets/images/paraguay.png'
import { CotizarButtonData } from '../../utils/Config';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const NavegatorComponent = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navBolivia = ()=>{
        navigate("/")
        handleClose()
    }
    const navParaguay = ()=>{
        navigate("/pa")
        handleClose()
    }
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
        if (nuevaVentana) nuevaVentana.focus();
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
                                <button 
                                    id="button-country"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick} className='country-container bolivia'>
                                    <img className='img-country' src={Bolivia}></img>
                                </button>
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
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={navBolivia}>Bolivia</MenuItem>
                <MenuItem onClick={navParaguay}>Paraguay</MenuItem>
            </Menu>

        </NavegatorBox>
    )
}

export default NavegatorComponent