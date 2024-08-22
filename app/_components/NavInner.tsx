import Link from "next/link";

export default function NavInner() {
  return (
		<>
			<div className="px-4 py-[75px] bg-red-300">
				<div className="w-[60px] h-[60px] rounded-[60px] inline-block bg-black overflow-hidden relative">
					<img className="profile-img absolute left-[50%] top-[50%]" src="https://thumb-g1.lalatoon.com/upload/thumbnail/20240604114948/2024_06_17_17185859027858.jpg" alt="" />
				</div>
				<p className="text-[9px] text-white opacity-60 tracking-[0.23px]">추천작품 <u className="ml-1 text-xs tracking-[0.28px]">12시의 신데렐라</u></p>
				<div>
					<img src="" alt="" />
					<p className="text-[13px] text-white tracking-[0.3px]">user 님</p>
				</div>
			</div>

			<nav className="mt-[-10px] p-4 rounded-t-[10px] bg-white">
				<ul>
					<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] text-red-500 leading-[19px]" href="#none">코인충전</Link></li>
					<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">내서재</Link></li>
					<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">결제 내역</Link></li>
					<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">고객센터</Link></li>
					<li className="py-[13px] px-[10px] border-b border-gray-100"><Link className="text-[13px] leading-[19px]" href="#none">계정 관리</Link></li>
					<li className="py-[13px] px-[10px]"><Link className="text-[13px] leading-[19px]" href="#none">로그아웃</Link></li>
				</ul>
			</nav>
		</>
  );
}
