import React from 'react';
import s from './customButton.module.css'
const CustomButton = ({title, onclick, className}) => {
    return (
        <button className={ `${s.customButton} ${s[className]}`} onClick={onclick}>
            {title}
        </button>
    );
};

export default CustomButton;