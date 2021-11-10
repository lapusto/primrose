import React from "react";
import s from "./about.module.css";
import img_about from "../../assets/about/about.jpg";

const About = () => {
  return (
    <div className={s.aboutContainer} id={'About us'}>
      <div className={s.aboutContentContainer}>
      <div className={s.mainText}>
        <h3 className={s.aboutTitle}>WE ARE PRIMROSE TEAM</h3>
        <p>Inspired by nature, we have been producing ready-made compositions for decoration since 2016. During this time, we have implemented many successful projects, some of which have become winners and prize-winners of various design competitions. Design in a modern style and minimalism are the main areas of our work. Our design projects are easily recognized by their professional approach to organizing space and laconicism.</p>
        <h4 className={s.aboutTitle}>Why choose us:</h4>
        <ul className={s.aboutList}>
            <li>We develop the concept according to your expectations and preferences.</li>
            <li>In our work, we use only the premium quality materials.</li>
            <li>Work both with  end customers and small / medium-sized businesses.</li>
            <li>Fast production and return guarantee.</li>
            <li>10% discount on the first order.</li>
        </ul>
      </div>
      <div className={s.imageWrapper}>
        <img src={img_about}></img>
      </div>
      </div>
     
    </div>
  );
};

export default About;
