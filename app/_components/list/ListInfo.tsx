import Link from 'next/link';
import '@/_components/styles/ListInfo.css';

export default async function ListInfo({id, imgList}:{id: string, imgList:[]}) {
	return (
		<section className="mt-10">
			<article>
				<div className="pb-[18px] border-b border-black flex justify-between items-center">
					<h4 className="font-bold">
						매주 <span className="text-red-500">목요일</span> 연재 작품
					</h4>
					<div className="flex justify-end items-center gap-[10px]">
						<button className="flex justify-start items-center text-[13px] text-black gap-[3px]">
							<div className="w-[40px] h-[24px] rounded-[24px] inline-block bg-gray-200 relative">
								<span className="sound-only">무료 회차 소장 토글</span>
								<span className="w-4 h-4 rounded-[16px] inline-block bg-white absolute top-1 left-1"></span>
							</div>
							무료회차소장
						</button>
						<button className="h-[41px] px-[25px] border border-gray-300 rounded-[50px] text-[13px] text-black leading-[39px] hover:border-gray-500 hover:bg-gray-300 hover:text-white">
							전체 회자 구매
						</button>
					</div>
				</div>
			</article>
			<article>
				<ul>
					{imgList.map((e: any, i:number) => (
						<li className="border-b border-black" key={e.id}>
							<Link href={`/list/${id}/${e.id}`} className="w-full py-4 flex justify-start items-center gap-[20px]">
								<div className="w-[100px]">
									<img src={e.logo_path} alt="" className="w-full" />
								</div>
								<div className="detail__list-img flex justify-between items-center">
									<p>{i + 1}. {e.name}</p>
									<p className="w-[100px] text-right">{e.id}</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
}
