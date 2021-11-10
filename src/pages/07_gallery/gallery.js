import React from "react";
import s from "./gallery.module.css";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img7 from "../../assets/gallery/7.jpg";
import img8 from "../../assets/gallery/8.jpg";
import img9 from "../../assets/gallery/9.jpg";

const Gallery = () => {
  const defaultIages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
  ];

  return (
    <div className={s.galery_main}>
      {defaultIages.map((item) => {
        return (
          <div className={s.imageWrapper}>
            <img src={item.img} />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
