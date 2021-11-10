import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./review.module.css";
import SliderTitle from "../../components/sliderTitle/sliderTitle";

const Review = () => {
  const reviews = [
    {
      reviewText:
        "We use Primrose products to create wonderful weddings and all our customers love it!",
      customer: "Melissa, wedding decorator",
    },
    {
      reviewText:
        "Thanks to your terrariums, the most cozy corner ever has appeared in my house.",
      customer: "Victoria",
    },
    {
      reviewText:
        "It was great working with your team! Our family cafe has gotten a second life thanks to the work of your designer.",
      customer: 'Rick, "Сaffè per famiglie"',
    },
     ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
     };

  return (
    <div className={s.mainContainer}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewItem item={review} />
        ))}
      </Slider>
    </div>
  );
};

export default Review;

const ReviewItem = ({ item }) => {
  return (
    <div className={`${s.commonItemStyles}`}>
      <SliderTitle title={item.sliderTitle} />
      <em>"{item.reviewText}"</em>
      <p className={s.ReviewAuthor}>{item.customer}</p>
    </div>
  );
};
