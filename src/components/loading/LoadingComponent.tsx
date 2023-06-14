import {LoadingComponentBox} from './LoadingComponentStyle.ts'
import SVGLogoComponent from '../../assets/svgs/logo'
import { Color } from '../../utils/Config'

const LoadingComponent = () => {



    return (
        <LoadingComponentBox >
            hola
            <div className='logo-loading'>
                <div className='logo-loading-img'> <SVGLogoComponent color={Color.alternative} /></div>
            asdasd
            </div>
        </LoadingComponentBox>
    )
}

export default LoadingComponent