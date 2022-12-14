/** Категории новостей в header*/
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { newsCategory } from './App.const';

export default function NavHeader(props) {
    return (
        <div>
            <Nav className='nav-left Nav-Header'>
                {newsCategory.map(item =>
                    <NavItem key={item.id}>
                        <NavLink disabled={item.active ? '' : 'disabled'} href="#">
                            {item.title}
                        </NavLink>
                    </NavItem>)}
            </Nav>
        </div>
    )
}