import React from 'react';
import s from './footer.module.css';

import {faFacebookF, faTwitter, faInstagram, faPinterest, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={s.footerSeparator}/>
            <div className={s.socialsContainer}>
                <a href={"#"}>
                    <FontAwesomeIcon icon={faFacebookF} className={s.icon}/>
                </a>
                <a href={"#"}>
                    <FontAwesomeIcon icon={faTwitter} className={s.icon}/>
                </a>
                <a href={"#"}>
                    <FontAwesomeIcon icon={faInstagram} className={s.icon}/>
                </a>
                <a href={"#"}>
                    <FontAwesomeIcon icon={faPinterest} className={s.icon}/>
                </a>
                <a href={"#"}>
                    <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                </a>
            </div>
            <div className={s.copyright}>Copyright © 2021 — designed by SingleStroke — photos by Waen Glass</div>


        </div>
    );
};

export default Footer;