import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from './main.module.css'
import CustomButton from "../../components/customButton/customButton";
import SliderTitle from "../../components/sliderTitle/sliderTitle";


const Main = () => {

    const items = [
        {className:'itemSlider', sliderTitle: 'Welcome to Primrose',customButtonTitle: 'Browse Our products'},
        {className:'itemSliderTwo', sliderTitle: 'Hand-made creative brand',customButtonTitle: 'Learn more'},
        {className:'itemSliderThree', sliderTitle: 'Bring elegance to your life',customButtonTitle: 'see all features'}
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className={s.mainContainer}>
            <Slider {...settings}>
                {items.map((item, index)=> <Item item={item} />)}
            </Slider>
        </div>
    );
};

export default Main;


const Item = ({item}) => {
    return <div className={`${s.commonItemStyles} ${s[item.className]}`}>
            <SliderTitle title={item.sliderTitle}/>
            <CustomButton title={item.customButtonTitle}/>
        </div>
   }

