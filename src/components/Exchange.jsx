/** Курс валют*/
import React from 'react'

export default function Exchange(props) {
    return (
        <div className='Exchange-List'>
            {props.items.map(item =>
                <div className='Exchange-Item' key={item.id}>
                    <div className='Exchange-Item-Name'>{item.name}</div>
                    <div className='Exchange-Item-Value'>{item.value}</div>
                    <div className='Exchange-Item-Dif'>{item.dif}</div>
                </div>
            )}
        </div>
    )
}