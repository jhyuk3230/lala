"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/_components/styles/ListSlide.css";
import { useAdultStore } from "@/hook/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

export default function ListSlide({ slideList }: { slideList: any[] }) {
  const [list, setList] = useState<any[]>(slideList);
  const isAdultActive = useAdultStore((state) => state.isAdultActive);

  const filteredList = list.filter((e: any) => {
    if (isAdultActive) {
      return true;
    } else {
      const isLanguageFilter = e.original_language == "en";
      return isLanguageFilter;
      // return isLangActive || !e.adult;
    }
  });

  return (
    <div className="listSlide w-full pb-1 overflow-hidden">
      <Swiper
        modules={[Grid]}
        slidesPerView={"auto"}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={8}
        className="listSlide__wrap text-[0px]"
      >
        {filteredList.map((e: any) => (
          <SwiperSlide className="w-[100px] inline-block" key={e.id}>
            <Link href={`/list/${e.id}`}>
              <img src={e.poster_path} alt={e.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
