import React from 'react';
import s from './topBar.module.css'
import n from './../../assets/new.png'

const TopBar = () => {
    return (
        <div className={s.topBarContainer}>
            <div className={s.mainContainer}>
                <div className={s.topBarContainerText}>
                    <em>
                        <img src={n} alt={'new'}/>
                        &nbsp; Get 10% off on your first purchase! &nbsp;
                        <a href={'#'}>Learn more</a>
                    </em>
                </div>
                <div className={s.link}>
                    <a href={'#'}>My Account</a>
                    <a href={'#'}>Shopping Cart(0)</a>
                </div>
            </div>

        </div>
    );
};

export default TopBar;