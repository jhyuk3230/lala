"use client";
import ListSlide from "@/_components/main/ListSlide";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function MainContents() {
	return(
		<>
			<QueryClientProvider client={queryClient}>
				<section className="p-4 pb-2 bg-gray-100">
					<h3 className="pb-4 text-base font-bold">오늘의 웹툰</h3>
					<article>
						<ListSlide />
					</article>
				</section>

				<section className="p-4 px-4">
					<h3 className="pb-4 text-base font-bold">인기 웹툰</h3>
					<article>
						<ListSlide />
					</article>
				</section>

				<section className="p-4 pb-2 bg-gray-100">
					<h3 className="pb-4 text-base font-bold">신작 웹툰</h3>
					<article>
						<ListSlide />
					</article>
				</section>

				<section className="p-4 bg-gray-100">
					<h3 className="pb-4 text-base font-bold">추천 웹툰</h3>
					<article>
						<ListSlide />
					</article>
				</section>
			</QueryClientProvider>
		</>
	)
}