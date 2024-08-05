"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListSlide() {
	const [list, setList] = useState([]);
	const [list2, setList2] = useState([]);
	const getList = async () => {
		const responsive = await fetch("/db.json");
		const json = await responsive.json();
		setList(json.list);
		setList2(json.list2);
	}

	useEffect(() => {
		getList();
	}, []);

  return (
    <section className="listSlide w-full overflow-x-auto">
      <article className="listSlide__wrap mb-2 whitespace-nowrap">
        {list.map((e: any) => (
          <div className="max-w-[100px] mr-2 inline-block" key={e.id}>
            <Link href={`/list/${e.id}`}>
              <img src={e.img} alt="" />
            </Link>
          </div>
        ))}
      </article>
      <article className="listSlide__wrap whitespace-nowrap">
        {list2.map((e: any) => (
          <div className="max-w-[100px] mr-2 inline-block" key={e.id}>
            <Link href={`/list/${e.id}`}>
              <img src={e.img} alt="" />
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}
