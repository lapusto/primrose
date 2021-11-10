import React, { useState } from "react";
import s from "./bestsellers.module.css";
import img1 from "./../../assets/product03-1-480x360.jpg";
import img2 from "./../../assets/product05-1-480x360.jpg";
import img3 from "./../../assets/product06-1-480x360.jpg";
import img4 from "./../../assets/products/product4.jpg";
import img5 from "./../../assets/products/product5.jpg";
import img6 from "./../../assets/products/product6.jpg";
import img7 from "./../../assets/products/product7.jpg";
import img8 from "./../../assets/products/product8.jpg";
import img9 from "./../../assets/products/product9.jpg";
import CustomButton from "../../components/customButton/customButton";
import Slide from "react-reveal/Slide";

const Bestsellers = () => {
  const [visible, setVisible] = useState(false);

  const showAllProducts = () => {
    setVisible(true);
  };

  const products = [
    {
      img: img1,
      productName: "Small Cuboctahedron Terrarium",
      price: "$55-$65",
    },
    {
      img: img2,
      productName: " Small Icosahedron Terrarium ",
      price: "$70-$75",
    },
    {
      img: img3,
      productName: "Medium Glass House",
      price: "$65-$75",
    },
    {
      img: img4,
      productName: "Small Sperohedron Terrarium",
      price: "$65-$75",
    },
    {
      img: img5,
      productName: "Small Cubicus Terrarium Set",
      price: "$70-$80",
    },
    {
      img: img6,
      productName: "Spere Vitreum Terrarium",
      price: "$80-$90",
    },
    {
      img: img7,
      productName: "Small Sperohedron Terrarium Сuprum",
      price: "$70-$80",
    },
    {
      img: img8,
      productName: "Medium Terrarium Aurum",
      price: "$100-$110",
    },
    {
      img: img9,
      productName: "Small Sperohedron Terrarium Сuprum",
      price: "$100-$110",
    },
  ];

  return (
    <div className={s.bestsellersContainer} id={'Shop'}>
      <div className={s.bestsellerInner}>
        <h2 className={s.bestsellerTitle}>OUR BEST SELLERS</h2>
        <div className={s.list}>
          {products.map((product, index) => {
            if (visible === false && index < 3) {
              return <ProductItem item={product} />;
            } else if  (visible === true) {
              return <ProductItem item={product} />;
            } 
          })}
        </div>
        {visible === false ? (
          <div className={s.allProductsButton}>
            <CustomButton
              title={"Browse all Products"}
              className={"gold"}
              onclick={showAllProducts}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Bestsellers;

const ProductItem = ({ item }) => {
  return (
    <Slide bottom>
      <div className={s.point}>
        <img src={item.img} alt={item.productName} />
        <h2>{item.productName}</h2>
        <span>rating</span>
        <p>{item.price}</p>
      </div>
    </Slide>
  );
};
