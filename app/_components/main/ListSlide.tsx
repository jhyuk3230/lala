// 'use client';
import Link from 'next/link';
import '@/_components/styles/ListSlide.css';
import { useAdultStore } from '@/hook/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import { Grid, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { useFetch, DataItem } from '@/hook/useFetch';

export default function ListSlide() {
	const { dataList, isLoading, error } = useFetch();

	const isAdultActive = useAdultStore((state) => state.isAdultActive);

	if (isLoading) return "loading..."

	if (error) return "error"

	const filteredList = dataList.filter((e: DataItem) => {
		if (isAdultActive) {
			return true;
		} else {
			const isLanguageFilter = e.original_language == 'en';
			return isLanguageFilter;
			// return isLangActive || !e.adult;
		}
	})

	return (
		<div className="listSlide w-full pb-1 overflow-hidden">
			<Swiper modules={[Grid, FreeMode]} slidesPerView={'auto'} grid={{ rows: 2, fill: 'row' }} spaceBetween={8} className="listSlide__wrap text-[0px]" freeMode={true}>
				{filteredList.map((e: DataItem) => (
					<SwiperSlide className="!w-[100px] inline-block align-top" key={e.id}>
						<Link href={`/list/${e.id}`}>
							<Image src={e.poster_path} width={100} height={0} alt={e.title} />
							<p className='text-[14px] line-clamp-2'>{e.original_title}</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
