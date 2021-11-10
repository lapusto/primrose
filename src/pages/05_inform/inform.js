import React from "react";
import s from "./inform.module.css";
import InformBlock from "./informBlock";
import { faGem, faHeart, faMoon } from "@fortawesome/free-regular-svg-icons";
const Inform = () => {
  const informBlocks = [
    {
      icon: faMoon,
      title: "Unique by Design",
      information:
        "Primrose terrarium is a small geometric structure made of glass and metal,  with a  living plants composition inside. A favorable microclimate for plants allows living mini-gardens to light up for many years with minimal maintenance.",
    },
    {
      icon: faHeart,
      title: "Multifunctionality",
      information:
        "Use terrariums not only for planting, but also as an atmospheric attribute in your interior. Primrose is also great as both an elegant jewelry box and a cozy candleholder for your home.",
    },
    {
      icon: faGem,
      title: "Business customer support",
      information:
        "We offer Primrose services for your business. Our designer will develop a landscaping concept for your office or restaurant according to an individual project within 3 days.",
    },
  ];
  return (
    <div className={s.informContainer} id={'Services'}>
       <h3 className={s.informTitle}>
          Bring your ideas to live with Primrose
        </h3>
      <div className={s.inner}>
       
        {informBlocks.map((block, index) => (
          <InformBlock key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

export default Inform;
