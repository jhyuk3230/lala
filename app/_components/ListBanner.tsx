import Link from "next/link";
import "@/_components/styles/ListBanner.css";

export default async function ListBanner({tit, text, tag, link, thumb} : {tit:string, text:string, tag: { name:string }[], link:string, thumb:string}) {
  return (
    <>
      <section className="relative">
				<article className="min-h-[320px] bg-gray-500">
					<img src={thumb} alt="" className="listBanner__thumb" />
				</article>
				<article className="w-full px-4 absolute left-0 top-[50%] translate-y-[-50%]">
        	<ul className="mb-[10px] flex justify-start items-center gap-[5px]">
        	  <li className="px-[10px] border border-white rounded-[23px] text-[13px] text-white leading-[23px]">수</li>
        	  <li className="px-[10px] rounded-[23px] bg-purple-500 text-[13px] text-white leading-[23px]">#로맨스</li>
        	  <li className="px-[10px] rounded-[23px] bg-red-300 text-[13px] text-white leading-[23px]">#드라마</li>
        	</ul>
        	<h2 className="mb-[10px] text-[36px] font-bold text-white leading-[1.4]">{tit}</h2>
        	<ul className="listBanner__tag mb-[5px] flex justify-start items-center gap-[5px]">
						{tag.map((e: any) => (
							<li className="text-[13px] text-white leading-[21px]">{e.name} <span className="w-[1px] h-[14px] mx-1 mb-[2px] inline-block bg-gray-400 align-middle"></span></li>
						))}
        	</ul>
        	<p className="listbanner__text max-h-[80px] mb-[10px] text-[13px] text-white leading-[20px] break-words overflow-hidden text-ellipsis">{text}</p>
        	<div className="flex justify-start items-center gap-[10px]">
						<Link href={link} target="_blank" className="w-[240px] h-[50px] rounded-[50px] bg-[#FF5566] text-[15px] font-bold text-white text-center leading-[50px]">첫 번째 에피소드 읽기</Link>
        		<button className="w-[50px] h-[50px] rounded-[50px] bg-gray-200 relative">
        		  <img src="" alt="" />
        		  <p className="listbanner__favorite-plus w-[18px] h-[18px] rounded-[18px] bg-black absolute top-0 right-[-9px]"></p>
        		  <span className="sound-only">찜</span>
        		</button>
					</div>
				</article>
      </section>
    </>
  );
}