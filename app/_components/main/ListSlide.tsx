"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/_components/styles/ListSlide.css";
import { API_URL } from "@/_components/url";
import { useAdultStore } from "@/hook/Store";

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
    <div className="listSlide w-full pb-1 overflow-x-auto">
      <div className="listSlide__wrap whitespace-nowrap grid grid-rows-2 grid-flow-col gap-2">
        {filteredList.map((e: any) => (
          <div className="w-[100px] inline-block" key={e.id}>
            <Link href={`/list/${e.id}`}>
              <img src={e.poster_path} alt={e.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
