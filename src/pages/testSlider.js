import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css'

const SimpleSwiper = () => {
const params = {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
      }
}
 return (
   <Swiper {...params}>
         <div style={{height:'50px', width:'100%', background:'green'}}>Slide 1</div>
         <div style={{height:'50px', width:'100%', background:'green'}}>Slide 2</div>
         <div style={{height:'50px', width:'100%', background:'green'}}>Slide 3</div>
         <div style={{height:'50px', width:'100%', background:'green'}}>Slide 4</div>
         <div style={{height:'50px', width:'100%', background:'green'}}>Slide 5</div>
   </Swiper>
 )
}

export default SimpleSwiper;