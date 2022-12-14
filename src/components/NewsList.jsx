/** Список новостей в header*/
import React from 'react'

export default function NewsList(props) {
    return (
        <ul className='News-List'>
            {props.children(props.items)}
        </ul>
    )
}