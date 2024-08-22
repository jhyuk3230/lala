import { API_URL } from "@/_components/url";

interface ViewProps {
  params: {
		id: string;
	};
  searchParams: {
    list?: string;
  };
}

const getListInfo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();

  return json;
};

export default async function view({ params, searchParams }: ViewProps) {
  const id = params.id;
  const list = searchParams.list;
  const viewInfo = list ? await getListInfo(list) : null;
	let img:string = "";

	if (viewInfo) {
    const matchingItem = viewInfo.production_companies.find(
      (detail: any) => detail.id.toString() === id
    );

		img = matchingItem.logo_path;
  }

  return (
    <>
      <section className="min-h-[100vh] bg-black relative">
        <article>
          <img src={img} alt="" className="m-auto bg-white" />
          <img src={img} alt="" className="m-auto bg-white" />
          <img src={img} alt="" className="m-auto bg-white" />
          <img src={img} alt="" className="m-auto bg-white" />
          <img src={img} alt="" className="m-auto bg-white" />
        </article>
      </section>
    </>
  );
}
