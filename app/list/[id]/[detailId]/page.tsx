import { API_URL } from "@/_components/url";
import ViewHeader from "@/_components/view/ViewHeader";
import Image from "next/image";

interface ViewProps {
  params: {
    id: string;
    detailId: string;
  };
}

const getListInfo = async (id: string) => {
	const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
	
  return json;
};

export default async function view({ params }:ViewProps) {
	const { id, detailId } = params;
	const viewInfo = await getListInfo(id);

	let img: string = "";

  if (viewInfo) {
    const matchingItem = viewInfo.production_companies.find(
      (detail: any) => detail.id.toString() === detailId
    );

    img = matchingItem.logo_path;
  }

  return (
    <>
			<ViewHeader />
      <section className="min-h-[100vh] mt-[62px] pb-[60px] bg-black relative">
        <article>
          <Image src={img} width={720} height={0} layout="intrinsic" alt="Picture of the author" className="m-auto bg-white" />
          <Image src={img} width={720} height={0} layout="intrinsic" alt="Picture of the author" className="m-auto bg-white" />
          <Image src={img} width={720} height={0} layout="intrinsic" alt="Picture of the author" className="m-auto bg-white" />
          <Image src={img} width={720} height={0} layout="intrinsic" alt="Picture of the author" className="m-auto bg-white" />
          <Image src={img} width={720} height={0} layout="intrinsic" alt="Picture of the author" className="m-auto bg-white" />
        </article>
      </section>
    </>
  );
}
