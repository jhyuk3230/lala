import Link from "next/link";
import "@/_components/styles/ListSlide.css";
import { API_URL } from "@/_components/url";

const getList = async () => {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();

	console.log(json);

  return json;
};

export default async function ListSlide() {
	const list = await getList();

  return (
    <section className="listSlide w-full pb-1 overflow-x-auto">
      <article className="listSlide__wrap whitespace-nowrap grid grid-rows-2 grid-flow-col gap-2">
        {list.map((e: any) => (
          <div className="w-[100px] inline-block" key={e.id}>
            <Link href={`/list/${e.id}`}>
              <img src={e.poster_path} alt={e.title} />
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}
