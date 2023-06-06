import React, { useEffect } from 'react'
import { SocialMediaBox } from './SocialMediatStyle'

interface Props {
    SocialMedia: any[];
}

const SocialMediaComponent = (props: Props) => {



    return (
        <SocialMediaBox>
            <div id='social-media-container'>
            <div  className='social-media'>
                <div className='line-long'></div>
                <ul>
                    {props.SocialMedia.map((social, i) =>
                        <li key={i} title={social.title}>
                            <a href={social.link} target='_blanck'>
                                <social.icon className='icon' />
                            </a>

                        </li>)}
                </ul>
                <div className='line-short'></div>
            </div>
            </div>
        </SocialMediaBox>
    )
}

export default SocialMediaComponent