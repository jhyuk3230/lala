"use client"
import Link from "next/link";
import { useNavStore, useLogInStore, useAdultStore } from "@/hook/Store";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useEffect, useState } from "react";
import Popup from "./Popup";

export default function Nav() {
	const [isNavActive, setIsNavActive] = useNavStore((state) => [state.isNavActive, state.setIsNavActive]);
	const [isLogIn, setIsLogIn] = useLogInStore((state) => [state.isLogIn, state.setIsLogIn]);
	const [isAdultActive, setIsAdultActive] = useAdultStore((state) => [state.isAdultActive, state.setIsAdultActive]);
	const [popup, setPopup] = useState(false);

	const offNav = () => {
    setIsNavActive(false);
  };

	const onPopup = () => {
		setPopup(true);
	}

	const closePopup = () => {
    setPopup(false);
  };

	useEffect(() => {
    const cookies = parseCookies();
    const loginCookieValue = cookies.login || "";
    setIsLogIn(loginCookieValue === "y");
  }, [setIsLogIn]);

	const login = () => {
		const loginState = !isLogIn;
    setIsLogIn(loginState);

    if (loginState) {
      setCookie(null, "login", "y", { path: "/" });
      // setCookie(null, "login", "y", { maxAge: 10, path: "/" });
    } else {
      destroyCookie(null, "login", { path: "/" });
    }
	}

	const logout = () => {
		const loginState = !isLogIn;
		const adultState = !isAdultActive;
    setIsLogIn(loginState);
		setIsAdultActive(adultState);

		if (loginState) {
      setCookie(null, "login", "y", { path: "/" });
    } else {
      destroyCookie(null, "login", { path: "/" });
    }
	}

  return (
		<>
			<aside className={`nav w-[300px] h-screen rounded-tl-[15px] rounded-bl-[15px] bg-white text-center fixed top-0 right-0 z-[2] duration-300 overflow-hidden ${isNavActive ? 'active' : ''}`}>
				<div className="px-4 py-[75px] bg-red-300">
					{!isLogIn ?
					<>
						{/* 로그인 전 */}
						<div className="text-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none" className="inline-block">
							  <g clipPath="url(#clip0_1_949)">
							    <path d="M0.5 0V30C0.5 37.73 6.77 44 14.5 44H22.5V0H0.5Z" fill="white"/>
							    <path d="M33.5 22C27.42 22 22.5 26.92 22.5 33C22.5 39.08 27.42 44 33.5 44H44.5V33C44.5 26.92 39.58 22 33.5 22Z" fill="white"/>
							  </g>
							  <defs>
							    <clipPath id="clip0_1_949">
							      <rect width="44" height="44" fill="white" transform="translate(0.5)"/>
							    </clipPath>
							  </defs>
							</svg>
							<p className="mt-[6px] text-[10px] font-normal text-white leading-[15px]">Read a variety of awesome comic!</p>
						</div>

						<div className="mt-[14px] text-center">
							<button className="h-[30px] mx-[5px] px-4 border border-white rounded-[30px] text-[14px] font-normal text-white leading-[28px] hover:border-[#FF5566] hover:bg-[#FF5566]" onClick={onPopup}>Sign in</button>
							<button className="h-[30px] mx-[5px] px-4 border border-white rounded-[30px] text-[14px] font-normal text-white leading-[28px] hover:border-[#FF5566] hover:bg-[#FF5566]">Sign up</button>
						</div>
					</> :
					<>
						<div className="w-[60px] h-[60px] rounded-[60px] inline-block bg-black overflow-hidden relative">
							<img className="profile-img absolute left-[50%] top-[50%]" src="https://thumb-g1.lalatoon.com/upload/thumbnail/20240604114948/2024_06_17_17185859027858.jpg" alt="" />
						</div>
						<p className="text-[9px] text-white opacity-60 tracking-[0.23px]">추천작품 <u className="ml-1 text-xs tracking-[0.28px]">12시의 신데렐라</u></p>
						<div>
							<img src="" alt="" />
							<p className="text-[13px] text-white tracking-[0.3px]">user 님</p>
						</div>
					</>}
				</div>

				{popup && <Popup click={popup} closePopup={closePopup} login={login} />}

				<nav className="mt-[-10px] p-4 rounded-t-[10px] bg-white">
					<ul>
						{isLogIn ? 
						<>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] text-red-500 leading-[19px]" href="#none">코인충전</Link></li>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">내서재</Link></li>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">결제 내역</Link></li>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">고객센터</Link></li>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">계정 관리</Link></li>
							<li className="py-[13px] px-[10px]"><Link className="text-[13px] leading-[19px]" href="#none" onClick={logout}>로그아웃</Link></li>
						</>:
						<>
							<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">고객센터</Link></li>
						</>}
					</ul>
				</nav>
			</aside>

			<div className={`nav-bg w-full h-screen bg-black opacity-40 fixed top-0 left-0 z-[1] ${isNavActive ? 'block' : 'hidden'}`} onClick={offNav}></div>
		</>
  );
}