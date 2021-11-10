import React from 'react';
import s from './header.module.css'
import img from './../../assets/logo.png'

const Header = () => {
    const menuItems = ['Home', 'Services', 'Shop', 'About us']
    return (
        <div className={s.menuContainer} id={'Home'}>
            <div className={s.logo} >
                <img src={img} alt={'logo'}/>
            </div>
            <nav>
                <div className={s.burger}>&#9776; MENU</div>
                <div className={s.menu}> {menuItems.map((item, index) => <a key={index} href={`#${item}`}>{item}</a>)}</div>
            </nav>
        </div>
    );
};

export default Header;