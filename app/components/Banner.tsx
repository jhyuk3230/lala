'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Banner() {
	const settings = {
		arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000
  };

  return (
    <section className="banner">
      <Slider {...settings}>
        <div>
					<Link href="#none"><img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" /></Link>
        </div>
        <div>
          <Link href="#none"><img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" /></Link>
        </div>
        <div>
          <Link href="#none"><img src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" /></Link>
        </div>
      </Slider>
    </section>
  );
}
