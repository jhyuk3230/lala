"use client";
import Link from "next/link";
import { useState } from "react";

export default function Search() {
	const [keyword, setKeyword] = useState();
	const keywordChange = (e: any) => {
		setKeyword(e.target.value);
	};

  return (
    <>
      <main className="bg-gray-100">
        <section className="py-[6px] px-[15px] flex justify-between items-center">
          <form action=""  className="search__form relative">
            <input type="text" id="keyword" className="search__keyword w-full h-[35px] pl-4 pr-9 rounded-[35px] text-[13px]" onChange={keywordChange} placeholder="웹툰/작가를 입력하세요"/ >
						<label htmlFor="keyword" className="sound-only">검색어 입력</label>
						<button className="w-[35px] h-[35px] absolute top-0 right-0">
							<svg className="search__btn absolute top-[50%] left-[50%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							  <path d="M11.152 18.304C15.1019 18.304 18.304 15.1019 18.304 11.152C18.304 7.20206 15.1019 4 11.152 4C7.20206 4 4 7.20206 4 11.152C4 15.1019 7.20206 18.304 11.152 18.304Z" stroke="#FF3B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							  <path d="M16.1919 16.1953L19.1199 19.1233" stroke="#FF3B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
          </form>
					<Link href="/" className="w-[36px] relative">
						<svg className="search__close absolute top-[50%] left-[50%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						  <path d="M6.3999 6.39844L16.7999 16.7984" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
						  <path d="M17.1998 6.79688L6.7998 17.1969" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
						</svg>
					</Link>
        </section>

        <section className="p-[15px] bg-white rounded-t-[10px]">
					{keyword ? 
					<h3 className="text-[13px] pb-[10px] border-b border-[rgba(0, 0, 0, .2)] leading-[17px]">'<span className="max-w-[80%] inline-block text-red-500 whitespace-nowrap text-ellipsis overflow-hidden align-top">{keyword}</span>'에 대한 결과 0</h3> : 
					<h3 className="text-[13px] pb-[10px] border-b border-[rgba(0, 0, 0, .2)]">최근 검색한 웹툰</h3>
					}
					<ul>
						<li className="border-b border-gray-50">
							<Link href="#none" className="py-[10px] flex justify-start items-center">
								<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
									<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
								</div>
								<div className="pl-[15px]">
									<h4 className="mb-1 text-[13px]">타이틀타이틀타이틀타이틀타이틀타이틀</h4>
									<p className="mb-[5px] text-[10px] text-gray-300">작가/작가</p>
									<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
										<li className="py-[2px] px-[5px] border border-black rounded-[16px]">#키워드</li>
										<li className="py-[2px] px-[5px] border border-red-500 rounded-[16px] text-red-500">#키워드</li>
									</ul>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-50">
							<Link href="#none" className="py-[10px] flex justify-start items-center">
								<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
									<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
								</div>
								<div className="pl-[15px]">
									<h4 className="mb-1 text-[13px]">타이틀타이틀타이틀타이틀타이틀타이틀</h4>
									<p className="mb-[5px] text-[10px] text-gray-300">작가/작가</p>
									<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
										<li className="py-[2px] px-[5px] border border-black rounded-[16px]">#키워드</li>
										<li className="py-[2px] px-[5px] border border-red-500 rounded-[16px] text-red-500">#키워드</li>
									</ul>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-50">
							<Link href="#none" className="py-[10px] flex justify-start items-center">
								<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
									<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
								</div>
								<div className="pl-[15px]">
									<h4 className="mb-1 text-[13px]">타이틀타이틀타이틀타이틀타이틀타이틀</h4>
									<p className="mb-[5px] text-[10px] text-gray-300">작가/작가</p>
									<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
										<li className="py-[2px] px-[5px] border border-black rounded-[16px]">#키워드</li>
										<li className="py-[2px] px-[5px] border border-red-500 rounded-[16px] text-red-500">#키워드</li>
									</ul>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-50">
							<Link href="#none" className="py-[10px] flex justify-start items-center">
								<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
									<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
								</div>
								<div className="pl-[15px]">
									<h4 className="mb-1 text-[13px]">타이틀타이틀타이틀타이틀타이틀타이틀</h4>
									<p className="mb-[5px] text-[10px] text-gray-300">작가/작가</p>
									<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
										<li className="py-[2px] px-[5px] border border-black rounded-[16px]">#키워드</li>
										<li className="py-[2px] px-[5px] border border-red-500 rounded-[16px] text-red-500">#키워드</li>
									</ul>
								</div>
							</Link>
						</li>
						<li>
							<Link href="#none" className="py-[10px] flex justify-start items-center">
								<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
									<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
								</div>
								<div className="pl-[15px]">
									<h4 className="mb-1 text-[13px]">타이틀타이틀타이틀타이틀타이틀타이틀</h4>
									<p className="mb-[5px] text-[10px] text-gray-300">작가/작가</p>
									<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
										<li className="py-[2px] px-[5px] border border-black rounded-[16px]">#키워드</li>
										<li className="py-[2px] px-[5px] border border-red-500 rounded-[16px] text-red-500">#키워드</li>
									</ul>
								</div>
							</Link>
						</li>
					</ul>
				</section>
      </main>
    </>
  );
}
