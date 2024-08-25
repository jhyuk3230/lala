import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="pt-2 pb-2 sm:py-2 bg-gray-200">
				<article className="max-w-[768px] w-full m-auto px-4 sm:flex sm:justify-between sm:items-center">
					<ul className="text-[0px] sm:flex sm:justify-start sm:items-center">
						<li className="w-6/12 my-2 inline-block sm:my-0 sm:w-auto"><Link href="/" className="w-full inline-block text-xs text-center hover:text-red-500 md:w-auto">이용약관</Link><span className="w-[1px] h-[12px] mx-4 bg-gray-400 hidden sm:inline-block"></span></li>
						<li className="w-6/12 my-2 inline-block sm:my-0 sm:w-auto"><Link href="/" className="w-full inline-block text-xs text-center hover:text-red-500 md:w-auto">개인정보처리방침</Link><span className="w-[1px] h-[12px] mx-4 bg-gray-400 hidden sm:inline-block"></span></li>
						<li className="w-6/12 my-2 inline-block sm:my-0 sm:w-auto"><Link href="/" className="w-full inline-block text-xs text-center hover:text-red-500 md:w-auto">공지사항</Link><span className="w-[1px] h-[12px] mx-4 bg-gray-400 hidden sm:inline-block"></span></li>
						<li className="w-6/12 my-2 inline-block sm:my-0 sm:w-auto"><Link href="/" className="w-full inline-block text-xs text-center hover:text-red-500 md:w-auto">자주묻는 질문</Link></li>
					</ul>

					<div className="hidden sm:inline-block">
						<p className="inline-block">언어</p>
						<div className="w-[180px] h-[30px] ml-4 inline-block bg-white rounded-[30px]">
							<button className="w-full h-[30px] leading-[30px]">한국어</button>
							<div className="lang-list"></div>
						</div>
					</div>
				</article>
			</section>

			<section>
				<article className="max-w-[768px] w-full m-auto p-4 text-center">
					<p className="my-4 text-xs">Lalatoon content are all protected by Copyright Law. Any unauthorized use, sharing or duplication may be punished by copyright laws.</p>
					<p className="text-xs">LALATOON Inc. | E-mail: en.support@lalatoon.com <br />397, Seocho-daero, Seocho-gu, Seoul, Republic of Korea l 533-87-01780 l Son Seong Il l 070-4450-0810</p>
				</article>
			</section>
    </footer>
  );
}
