import { useEffect, useState } from 'react'

import img3 from '../../../assets/images/imagen3.jpg'
import { PresentationBox } from './PresentationStyle';
import BannerComponent from '../../../components/banner/BannerComponent';
import { PresentationItems } from '../../../utils/Config';
import SlideModernComponent from '../../../components/banner copy/SlideModernComponent';
import { SlideTestBox } from '../../../components/prueba/SlideTestStyle';
import SlideTestComponent from '../../../components/prueba/SlideTestComponent';


const PresentationSection = () => {
    
    return (
        <PresentationBox>
            {/*<SlideModernComponent items={PresentationItems}/>
            <SlideTestComponent items={PresentationItems}/>
            */}
            <BannerComponent items={PresentationItems}/>
            
    
        </PresentationBox>
    )
}

export default PresentationSection