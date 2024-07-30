'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
	const settings = {
		arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		fade: true
  };

  return (
    <section className="banner">
      <Slider {...settings}>
        <div>
          <img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" />
        </div>
        <div>
          <img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" />
        </div>
        <div>
          <img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" />
        </div>
      </Slider>
    </section>
  );
}
