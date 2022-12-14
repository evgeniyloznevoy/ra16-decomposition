/** Новости в списке новостей*/
import React from 'react'

export default function NewsItem({ news }) {
    return (
        <li className='News-Item' key={news.id}>
            <img className='News-Item_Icon' src={news.icon} alt="News-Item_Icon" />
            <a className='News-Item_Link' href={news.link}>
                <span className='News-Item_Title'>{news.title}</span>
            </a>
        </li>
    )
}