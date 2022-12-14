/** Навигация под поиском*/
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { searchCategory } from './App.const';

export default function NavMain(props) {
    return (
        <div>
            <Nav className='Nav-Main'>
                {searchCategory.map(item =>
                    <NavItem key={item.id}>
                        <NavLink disabled={item.active ? '' : 'disabled'} href="#">
                            {item.title}
                        </NavLink>
                    </NavItem>)}
            </Nav>
        </div>
    )
}