import Link from "next/link";
import { TOOMICS } from "@/_components/url";
import { useState } from "react";

export default function Popup({ click, closePopup, login } : {click:boolean, closePopup: () => void, login: () => void}) {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login();
    closePopup();
  };

  return (
    <>
      <div className={`popup-wrap w-[95%] max-w-[400px] p-8 border border-gray-50 rounded-[20px] bg-white text-left fixed left-[50%] top-[50%] translate-xy-center shadow-md ${click ? '' : 'hidden'}`}>
				<button className="popup-close w-[30px] h-[30px] border border-gray-50 rounded-[30px] bg-white absolute -top-[15px] -right-[15px] shadow-md" onClick={closePopup}>
					<span className="w-[14px] h-[2px] inline-block bg-black absolute top-[50%] left-[50%]"></span>
					<span className="w-[14px] h-[2px] inline-block bg-black absolute top-[50%] left-[50%]"></span>
				</button>
				<div>
					<form action="">
        	  <div className="popup__input">
        	    <label htmlFor="id" className="w-[80px] inline-block align-bottom leading-[30px]">아이디</label>
        	    <input type="text" id="id" className="h-[30px] border-b border-b-black text-[14px] font-medium text-black align-bottom" onChange={(e) => setEmail(e.target.value)} />

        	    <label htmlFor="pw" className="w-[80px] mt-4 inline-block align-bottom leading-[30px]">비밀번호</label>
        	    <input type="password" id="pw" className="h-[30px] border-b border-b-black text-[14px] font-medium text-black align-bottom" onChange={(e) => setPw(e.target.value)} />
        	  </div>

        	  <div className="popup__other mt-4 flex justify-between items-center">
        	    <input type="checkbox" id="autoLogin" className="sound-only" />
        	    <label htmlFor="autoLogin" className="pr-4 text-[12px] relative">로그인 유지</label>
        	    <Link href="#none" className="text-[14px]">비밀번호를 잊어버리셨나요?</Link>
        	  </div>

        	  <div className="popup__btn mt-8">
        	    <button className="w-full h-10 rounded-[40px] bg-[#FF5566] text-center text-[16px] font-bold text-white" onClick={onLogin}>로그인</button>
        	  </div>
        	</form>

					<hr className="my-8 border-[#FF5566]" />

        	<div className="popup__sns flex justify-between items-center flex-wrap gap-1">
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">네이버</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">카카오</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">구글</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">페이스북</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">X</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">라인</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">야후</button>
        	  <button className="w-[80px] h-[80px] rounded-[40px] bg-slate-500 text-white">애플</button>
        	</div>
				</div>
      </div>
    </>
  );
}
