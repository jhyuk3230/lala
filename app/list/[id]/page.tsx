import Header from '@/_components/inc/Header'
import Nav from '@/_components/inc/Nav'
import Footer from '@/_components/inc/Footer'
import ListBanner from '@/_components/list/ListBanner';
import ListInfo from '@/_components/list/ListInfo';
import { API_URL } from '@/_components/url';

const getListInfo = async (id:string) => {
	const response = await fetch(`${API_URL}/${id}`);
	const json = await response.json();

	return json;
};

export default async function List({params: {id},}: {params: {id: string};}) {
	const listInfo = await getListInfo(id);
	const imgList = listInfo.production_companies;
	return (
		<>
			<Header />
			<Nav />
			<main>
				<ListBanner tit={listInfo.title} text={listInfo.overview} tag={listInfo.genres} link={listInfo.homepage} thumb={listInfo.backdrop_path} />
				<ListInfo imgList={imgList} id={id} />
			</main>
			<Footer />
		</>
	);
}
