import { useEffect, useState } from 'react'
import { LogoComponentBox } from './LogoComponentStyle'
import SVGLogoComponent from '../../assets/svgs/logo'
import { Color } from '../../utils/Config'

const LogoComponent = () => {
    const [ColorLogo, setColorLogo] = useState(Color.alternative)

    useEffect(() => {
        const logoContainer = document.querySelectorAll('.logo-img-container');
        for (let i = 0; i < logoContainer.length; i++) {
            const layer = logoContainer[i] as HTMLElement;
            layer.addEventListener('mouseover', function () {
                setColorLogo(Color.active)
            });
            layer.addEventListener('mouseout', function () {
                setColorLogo(Color.alternative)
            });
        }
    }, [])
    return (
        <LogoComponentBox id='logo-container'>
            
            <div className='logo-img-container'>
                {/*<img className='logo-img' src={singletonLogo} alt="" />*/}
                <div className='logo-img'> <SVGLogoComponent color={ColorLogo} /></div>
            </div>
            <div className='logo-text'>
                <h6 className='logo-title'>
                    Singleton
                </h6>
                <p className='logo-subtitle'>
                    Tech Solutions
                </p>
            </div>

        </LogoComponentBox>
    )
}

export default LogoComponent