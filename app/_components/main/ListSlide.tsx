"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/_components/styles/ListSlide.css";
import { API_URL } from "@/_components/url";
import { useAdultStore } from "@/hook/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

const getList = async () => {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();

  return json;
};

export default function ListSlide() {
	const [list, setList] = useState<any[]>([])
  const isAdultActive = useAdultStore((state) => state.isAdultActive);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getList();
      setList(data);
    };
		
    fetchData();
  }, []);
	
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
      <Swiper modules={[Grid]} slidesPerView={"auto"} grid={{ rows: 2, fill: 'row' }} spaceBetween={8} className="listSlide__wrap text-[0px]">
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
