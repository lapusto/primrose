import React from 'react';
import s from './sliderTitle.module.css'
const SliderTitle = ({title}) => {
    return (
        <div className={s.sliderTitle}>
            {title}
        </div>
    );
};

export default SliderTitle;