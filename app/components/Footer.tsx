import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="py-4 bg-gray-200">
				<article className="w-[1000px] m-auto flex justify-between items-center">
					<ul className="flex justify-start items-center">
						<li><Link href="/">이용약관</Link><span className="w-[1px] h-[12px] mx-4 inline-block bg-gray-400"></span></li>
						<li><Link href="/">개인정보처리방침</Link><span className="w-[1px] h-[12px] mx-4 inline-block bg-gray-400"></span></li>
						<li><Link href="/">공지사항</Link><span className="w-[1px] h-[12px] mx-4 inline-block bg-gray-400"></span></li>
						<li><Link href="/">자주묻는 질문</Link></li>
					</ul>

					<div>
						<p className="inline-block">언어</p>
						<div className="w-[180px] h-[30px] ml-4 inline-block bg-white rounded-[30px]">
							<button className="w-full h-[30px] leading-[30px]">한국어</button>
							<div className="lang-list"></div>
						</div>
					</div>
				</article>
			</section>

			<section>
				<article className="w-[1000px] m-auto py-4 text-center">
					<p className="my-4 text-xs">Lalatoon content are all protected by Copyright Law. Any unauthorized use, sharing or duplication may be punished by copyright laws.</p>
					<p className="text-xs">LALATOON Inc. | E-mail: en.support@lalatoon.com <br />397, Seocho-daero, Seocho-gu, Seoul, Republic of Korea l 533-87-01780 l Son Seong Il l 070-4450-0810</p>
				</article>
			</section>
    </footer>
  );
}
