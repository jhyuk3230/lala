import Link from "next/link";

export default function ListSlide() {
	const list: any = [
		{ id: 1, img: "/dummy.jpg" },
		{ id: 2, img: "/dummy.jpg" },
		{ id: 3, img: "/dummy.jpg" },
		{ id: 4, img: "/dummy.jpg" },
		{ id: 5, img: "/dummy.jpg" },
		{ id: 6, img: "/dummy.jpg" },
		{ id: 7, img: "/dummy.jpg" },
		{ id: 8, img: "/dummy.jpg" },
		{ id: 9, img: "/dummy.jpg" }
	];

	const list2: any = [
    { id: 10, img: "/dummy.jpg" },
    { id: 11, img: "/dummy.jpg" },
    { id: 12, img: "/dummy.jpg" },
    { id: 13, img: "/dummy.jpg" },
    { id: 14, img: "/dummy.jpg" },
    { id: 15, img: "/dummy.jpg" },
    { id: 16, img: "/dummy.jpg" },
    { id: 17, img: "/dummy.jpg" },
    { id: 18, img: "/dummy.jpg" },
  ];

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
