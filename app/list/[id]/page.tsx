"use client"

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ListBanner from "../../components/ListBanner";
import { useEffect } from 'react';
// import ListInfo from "../../components/ListInfo";

// export const API_URL = "http://localhost:3000/db.json";
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// async function getListInfo(id: string) {
//   const response = await fetch(`${API_URL}/${id}`);
//   const json = response.json();
//   return json;
// };

export default async function List({params: {id},}: {params: {id: string};}) {

	// useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("../mocks/browser")
  //       .then(({ worker }) => {
  //         worker.start();
  //       })
  //       .catch((err) => {
  //         console.error("MSW worker failed to start", err);
  //       });
  //   }
  // }, []);
	// const listInfo = await getListInfo(id);
  return (
    <>
      <Header />
      <Nav />
      <main>
        {/* <h1>{JSON.stringify(listInfo)}</h1> */}
        <ListBanner />
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
          <article></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
