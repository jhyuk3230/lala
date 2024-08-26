"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import { API_URL } from "@/_components/url";

const getkeywordData = async () => {
	const response = await fetch(`${API_URL}`);
  const json = await response.json();

  return json;
};


export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [keywordData, setKeywordData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getkeywordData();
      setKeywordData(data);
    };

    fetchData();
  }, []);

  const keywordChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const bestData = [
    {
      tit: "플래닛 워커",
      writer: ["블랙M"],
      keyword: ["드라마", "판타지"],
    },
    {
      tit: "별 셋짜리 식사를 합시다",
      writer: ["Poo"],
      keyword: ["BL", "로맨스"],
    },
    {
      tit: "최애에게 들켜버렸다",
      writer: ["Lv", "스토리위즈"],
      keyword: ["로맨스", "드라마"],
    },
    {
      tit: "별빛 아래 우리",
      writer: ["건일", "스토리위즈"],
      keyword: ["로맨스", "드라마"],
    },
  ];

  const filteredData = keywordData.filter((e) =>
    e.original_title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <main className="bg-gray-100">
        <section className="py-[6px] px-[15px] flex justify-between items-center">
          <form action=""  className="search__form relative">
            <input type="text" id="keyword" className="search__keyword w-full h-[35px] pl-4 pr-9 rounded-[35px] text-[13px]" onChange={keywordChange} placeholder="웹툰/작가를 입력하세요"/ >  
						<label htmlFor="keyword" className="sound-only">검색어 입력</label>
          </form>
					<Link href="/" className="w-[36px] relative">
						<svg className="search__close absolute top-[50%] left-[50%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						  <path d="M6.3999 6.39844L16.7999 16.7984" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
						  <path d="M17.1998 6.79688L6.7998 17.1969" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
						</svg>
					</Link>
        </section>

        <section className="py-[15px] bg-white rounded-t-[10px]">
					{keyword ? 
						<h3 className="text-[13px] px-[15px] pb-[10px] border-b border-[rgba(0, 0, 0, .2)] leading-[17px]">'<span className="max-w-[80%] inline-block text-red-500 whitespace-nowrap text-ellipsis overflow-hidden align-top">{keyword}</span>'에 대한 결과 0</h3> : 
						<h3 className="text-[13px] px-[15px] pb-[10px] border-b border-[rgba(0, 0, 0, .2)]">최근 검색한 웹툰</h3>
					}
					<ul className={`${keyword ? "":"hidden"}`}>
						{
							filteredData.map((e:any, index:number)=>(
							//react-string-replace 설치
								<li className="border-b border-gray-50" key={index}>
									<Link href={`/list/${e.id}`} className="py-[10px] px-[15px] flex justify-start items-center hover:bg-[#ffeef0] focus:bg-[#ffeef0]">
										<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
											<img src={e.poster_path} alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
										</div>
										<div className="pl-[15px]">
											<h4 className="mb-1 text-[13px]">{reactStringReplace(e.original_title, keyword, (match)=>(<span className="text-[#FF3B42]">{match}</span>))}</h4>
											<p className="mb-[5px] text-[10px] text-gray-300">
												{e.genre_ids.join(" / ")}
											</p>
											<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
												{e.genre_ids.map((keyword: string, idx: number) => (
													<li key={idx} className="py-[2px] px-[5px] border border-black rounded-[16px]">#{keyword}</li>
												))}
											</ul>
										</div>
									</Link>
								</li>
							))
						}
					</ul>
					<ul className={`${keyword ? "hidden":""}`}>
						{
							bestData.map((e:any, index:number)=>(
							//react-string-replace 설치
								<li className="border-b border-gray-50" key={index}>
									<Link href="#none" className="py-[10px] px-[15px] flex justify-start items-center hover:bg-[#ffeef0] focus:bg-[#ffeef0]">
										<div className="w-[80px] h-[80px] rounded-[80px] overflow-hidden bg-black relative">
											<img src="" alt=""  className="search__thumb absolute left-[50%] top-[50%]"/>
										</div>
										<div className="pl-[15px]">
											<h4 className="mb-1 text-[13px]">{e.tit}</h4>
											<p className="mb-[5px] text-[10px] text-gray-300">
												{e.writer.join(" / ")}
											</p>
											<ul className="flex justify-start items-center text-[10px] leading-[12px] gap-[2px]">
												{e.keyword.map((keyword: string, idx: number) => (
													<li key={idx} className="py-[2px] px-[5px] border border-black rounded-[16px]">#{keyword}</li>
												))}
											</ul>
										</div>
									</Link>
								</li>
							))
						}
					</ul>
				</section>
      </main>
    </>
  );
}
