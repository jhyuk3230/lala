import Banner from './Banner';
import ListSlide from './ListSlide';
import { API_URL } from '@/_components/url';
import Test from './Test';

const getList = async () => {
	const response = await fetch(`${API_URL}`);
	const json = await response.json();

	return json;
};

export default async function Main() {
	const slideList = await getList();
	return (
		<>
			<Banner />
			<Test />
			<section className="p-4 pb-2 bg-gray-100">
				<h3 className="pb-4 text-base font-bold">오늘의 웹툰</h3>
				<article>
					<ListSlide slideList={slideList} />
				</article>
			</section>

			<section className="p-4 px-4">
				<h3 className="pb-4 text-base font-bold">인기 웹툰</h3>
				<article>
					<ListSlide slideList={slideList} />
				</article>
			</section>

			<section className="p-4 pb-2 bg-gray-100">
				<h3 className="pb-4 text-base font-bold">신작 웹툰</h3>
				<article>
					<ListSlide slideList={slideList} />
				</article>
			</section>

			<section className="p-4 bg-gray-100">
				<h3 className="pb-4 text-base font-bold">추천 웹툰</h3>
				<article>
					<ListSlide slideList={slideList} />
				</article>
			</section>
		</>
	);
}
