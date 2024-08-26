"use client"
import Link from "next/link";
import { useNavStore, useAdultStore } from "@/hook/Store";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useEffect } from "react";

export default function Header() {
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
	const onNav = () => {
    setIsNavActive(true);
  };

	const [isAdultActive, setIsAdultActive] = useAdultStore((state) => [state.isAdultActive, state.setIsAdultActive]);

	useEffect(() => {
    const cookies = parseCookies();
    const adultCookieValue = cookies.adult || "";
    setIsAdultActive(adultCookieValue === "y");
  }, [setIsAdultActive]);

	const onAdult = () => {
		const adultState = !isAdultActive;
		setIsAdultActive(adultState);

		if (adultState) {
      setCookie(null, "adult", "y", { path: "/" });
    } else {
      destroyCookie(null, "adult", { path: "/" });
    }
	}

  return (
    <>
			<div className="flex justify-end items-center gap-4">
				<button className={`adult__btn w-[52px] h-[26px] rounded-[26px] relative ${isAdultActive ? 'active' : ''} ${isAdultActive ? 'bg-red-500' : 'bg-gray-200'}`} onClick={onAdult}>
					<p className={`w-[26px] h-[26px] border-2 border-red-500 rounded-[26px] bg-white text-[12px] font-bold absolute top-[50%] translate-y-[-50%] duration-300 ${isAdultActive ? 'left-[26px]' : 'left-0'}`}>
						<span className="leading-[22px]">19</span>
					</p>
				</button>

				<Link className="search-btn" href="/search">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
					  <path d="M13.94 22.88C18.8774 22.88 22.88 18.8774 22.88 13.94C22.88 9.00257 18.8774 5 13.94 5C9.00257 5 5 9.00257 5 13.94C5 18.8774 9.00257 22.88 13.94 22.88Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					  <path d="M20.2402 20.2422L23.9002 23.9022" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Link>

        <button className="nav-btn w-5 h-4 relative" onClick={onNav}>
          <span className="w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-0"></span>
          <span className="w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-[8px]"></span>
          <span className="w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-[16px]"></span>
        </button>
      </div>
		</>
  );
}
