"use client"
import { useNavStore } from "@/hook/Store";
import NavInner from "./NavInner";

export default function Nav() {
	const isNavActive = useNavStore((state) => state.isNavActive);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);

	const offNav = () => {
    setIsNavActive(false);
  };

  return (
		<>
			<aside className={`nav w-[300px] h-screen rounded-tl-[15px] rounded-bl-[15px] bg-white text-center fixed top-0 right-0 z-[2] duration-300 overflow-hidden ${isNavActive ? 'active' : ''}`}>
				<NavInner />
			</aside>

			<div className={`nav-bg w-full h-screen bg-black opacity-40 fixed top-0 left-0 z-[1] ${isNavActive ? 'block' : 'hidden'}`} onClick={offNav}></div>
		</>
  );
}