import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2 bg-white">
			<section className="max-w-[1000px] w-full m-auto px-4 flex justify-between items-center">
				<div className="logo">
					<Link href="/" className="inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none" className="inline-block">
      	  	  <path d="M0.191406 0H30.5106V30H10.5637C4.83901 30 0.191406 25.4013 0.191406 19.7368V0Z" fill="#FF5566"></path>
      	  	  <path d="M6.57446 6.31592V18.158C6.57446 21.2093 9.07579 23.6843 12.1596 23.6843H15.3511V6.31592H6.57446Z" fill="white" class="origin-center group-hover:animate-rotate-y"></path>
      	  	  <path d="M19.7394 15.0002C17.3138 15.0002 15.3511 16.9423 15.3511 19.3423C15.3511 21.7423 17.3138 23.6845 19.7394 23.6845H24.1277V19.3423C24.1277 16.9423 22.1649 15.0002 19.7394 15.0002Z" fill="white" class="origin-center group-hover:animate-rotate-y"></path>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="114" height="18" viewBox="0 0 114 18" fill="none" className="inline-block ml-1">
      	  	  <path d="M76.3083 3.47363C72.3469 3.47363 69.1274 6.65916 69.1274 10.5789C69.1274 14.4986 72.3469 17.6842 76.3083 17.6842C80.2697 17.6842 83.4891 14.4986 83.4891 10.5789C83.4891 6.65916 80.2697 3.47363 76.3083 3.47363ZM76.3083 14.5263C74.1102 14.5263 72.3189 12.7539 72.3189 10.5789C72.3189 8.4039 74.1102 6.63153 76.3083 6.63153C78.5064 6.63153 80.2977 8.4039 80.2977 10.5789C80.2977 12.7539 78.5064 14.5263 76.3083 14.5263Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M92.2658 3.47363C88.3044 3.47363 85.085 6.65916 85.085 10.5789C85.085 14.4986 88.3044 17.6842 92.2658 17.6842C96.2273 17.6842 99.4467 14.4986 99.4467 10.5789C99.4467 6.65916 96.2273 3.47363 92.2658 3.47363ZM92.2658 14.5263C90.0677 14.5263 88.2765 12.7539 88.2765 10.5789C88.2765 8.4039 90.0677 6.63153 92.2658 6.63153C94.464 6.63153 96.2552 8.4039 96.2552 10.5789C96.2552 12.7539 94.464 14.5263 92.2658 14.5263Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M3.70199 10.5788V0.315674H0.510498V10.5788C0.510498 14.4986 3.72991 17.6841 7.69135 17.6841H10.085V14.5262H7.69135C5.49321 14.5262 3.70199 12.7538 3.70199 10.5788Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M18.8615 3.47363C14.9001 3.47363 11.6807 6.65916 11.6807 10.5789C11.6807 14.4986 14.9001 17.6842 18.8615 17.6842C20.3376 17.6842 21.7099 17.2421 22.8509 16.4842V17.6842H26.0424V10.5789C26.0424 6.65916 22.823 3.47363 18.8615 3.47363ZM18.8615 14.5263C16.6634 14.5263 14.8722 12.7539 14.8722 10.5789C14.8722 8.4039 16.6634 6.63153 18.8615 6.63153C21.0597 6.63153 22.8509 8.4039 22.8509 10.5789C22.8509 12.7539 21.0597 14.5263 18.8615 14.5263Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M32.4254 10.5788V0.315674H29.2339V10.5788C29.2339 14.4986 32.4533 17.6841 36.4147 17.6841H38.8084V14.5262H36.4147C34.2166 14.5262 32.4254 12.7538 32.4254 10.5788Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M61.1488 0.315674H57.9573V3.47357H56.3616V6.63146H57.9573V10.5788C57.9573 14.4986 61.1767 17.6841 65.1382 17.6841H67.5318V14.5262H65.1382C62.94 14.5262 61.1488 12.7538 61.1488 10.5788V6.63146H67.5318V3.47357H61.1488V0.315674Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M47.5849 3.47363C43.6235 3.47363 40.4041 6.65916 40.4041 10.5789C40.4041 14.4986 43.6235 17.6842 47.5849 17.6842C49.061 17.6842 50.4333 17.2421 51.5743 16.4842V17.6842H54.7658V10.5789C54.7658 6.65916 51.5463 3.47363 47.5849 3.47363ZM47.5849 14.5263C45.3868 14.5263 43.5955 12.7539 43.5955 10.5789C43.5955 8.4039 45.3868 6.63153 47.5849 6.63153C49.783 6.63153 51.5743 8.4039 51.5743 10.5789C51.5743 12.7539 49.783 14.5263 47.5849 14.5263Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	  <path d="M107.425 3.47363C106.261 3.47363 105.175 3.78942 104.234 4.32626V3.47363H101.042V17.6842H104.234V9.78942C104.234 8.04863 105.666 6.63153 107.425 6.63153C109.185 6.63153 110.617 8.04863 110.617 9.78942V17.6842H113.808V9.78942C113.808 6.30784 110.944 3.47363 107.425 3.47363Z" fill="black" class="group-[.fixed]/header:fill-black"></path>
      	  	</svg>
					</Link>
				</div>
				<div className="flex justify-end items-center gap-4">
					<button className="search-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
						  <path d="M13.94 22.88C18.8774 22.88 22.88 18.8774 22.88 13.94C22.88 9.00257 18.8774 5 13.94 5C9.00257 5 5 9.00257 5 13.94C5 18.8774 9.00257 22.88 13.94 22.88Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						  <path d="M20.2402 20.2422L23.9002 23.9022" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>

          <button className="nav-btn w-5 h-4 relative">
            <span className="w-full h-[2px] bg-black inline-block absolute left-0 top-0"></span>
            <span className="w-full h-[2px] bg-black inline-block absolute left-0 top-[8px]"></span>
            <span className="w-full h-[2px] bg-black inline-block absolute left-0 top-[16px]"></span>
          </button>
        </div>
			</section>
		</header>
  );
}
