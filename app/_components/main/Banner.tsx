'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Link from "next/link";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Banner() {
  return (
    <section className="banner">
			<Swiper modules={[Autoplay, EffectFade]} loop={true} autoplay={{ delay: 3000 }} effect="fade" fadeEffect={{ crossFade: true }} speed={1000} className="text-[0px]">
				<SwiperSlide>
					<Link href="#none">
					{/* <Link href="#none"><img className="w-full" src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt="" /></Link> */}
						<Image className="w-full" width={1000} height={0} src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt={"1"} />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="#none">
						<Image className="w-full" width={1000} height={0} src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt={"2"} />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="#none">
						<Image className="w-full" width={1000} height={0} src="https://dev-www.lalatoon.com/assets/mobile/img/banner/2024_LT_contest_ing-mo_kr.png" alt={"3"} />
					</Link>
				</SwiperSlide>
			</Swiper>
    </section>
  );
}
