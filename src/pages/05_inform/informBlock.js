import React from 'react';
import s from "./informBlock.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const InformBlock = ({block}) => {
    return (<div className={s.informBlock}>
            <FontAwesomeIcon icon={block.icon} className={s.icon}/>
            <h4>{block.title}</h4>
            <p>{block.information}</p>
        </div>

    );
};

export default InformBlock;