/** Рекламный блок в header */

import React from 'react'

export default function Advertising(props) {
    return (
        <div className='Advertising'>
            <img
                className='Advertising-Image'
                src={props.item.icon}
                alt="advertising_image"
            />
            <a className='Advertising-Link' href={props.item.link}>
                <span className='Advertising-Title'>{props.item.title}</span>
            </a>
            <div className='Advertising-Text'>{props.item.text}</div>
        </div>
    )
}