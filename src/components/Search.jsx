/** Поиск */
import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function Search(props) {
    return (
        <Form className='Search-Form'>
            <img className='Search-Logo' src="https://uploads-ssl.webflow.com/5fb82f5cd7893afec8644966/6083185eb321caef7d792d38_toppng.com-free-icons-png-instagram-search-icon-white-394x393.png" alt="App_logo" />
            <Input className='Search-Input' />
            <Button className='Search-Button'>Найти</Button>
        </Form>
    )
}