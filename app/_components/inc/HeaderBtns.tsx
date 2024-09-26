'use client';
import Link from 'next/link';
import { useNavStore, useAdultStore, useLogInStore, usePrevStore } from '@/hook/Store';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import { headerBtnWrap, adultBtn, adultBtnActive, adultBtnInner, adultBtnInnerActive } from '@/_components/inc/header.css';
import * as styles from '@/_components/inc/header.css';

export default function Header() {
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
	const onNav = () => {
    setIsNavActive(true);
  };

	const [isAdultActive, setIsAdultActive] = useAdultStore((state) => [state.isAdultActive, state.setIsAdultActive]);
	const [isLogIn, setIsLogIn] = useLogInStore((state) => [state.isLogIn, state.setIsLogIn]);

	useEffect(()=>{
		const cookies = parseCookies();
		const adultCookieValue = cookies.adult || '';
		const loginCookieValue = cookies.login || '';
		if (loginCookieValue && adultCookieValue) {
    }else{
			destroyCookie(null, 'adult', { path: '/' });
		}
	},[])

	useEffect(() => {
    const cookies = parseCookies();
    const adultCookieValue = cookies.adult || '';
    setIsAdultActive(adultCookieValue === 'y');
  }, [setIsAdultActive]);

	const onAdult = () => {
		if (isLogIn) {
			const adultState = !isAdultActive;
      setIsAdultActive(adultState);

      if (adultState) {
        setCookie(null, 'adult', 'y', { path: '/' });
      } else {
        destroyCookie(null, 'adult', { path: '/' });
      }
    }else{
			alert('로그인을 해주세요');
		}
	}

	const [prevURL, setPrevURL] = usePrevStore((state) => [state.prevURL, state.setPrevURL]);
	const pathname = usePathname();

	useEffect(()=>{
		setPrevURL(pathname);
	},[])

  return (
    <>
			<div className={styles.headerBtnWrap}>
				<button className={`${styles.adultBtn} ${isAdultActive ? styles.adultBtnActive : ''}`} onClick={onAdult}>
					<p className={`${styles.adultBtnInner} ${isAdultActive ? styles.adultBtnInnerActive : 'left-0'}`}>
						<span className='leading-[22px]'>19</span>
					</p>
				</button>

				<Link className='search-btn' href='/search'>
					<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' fill='none'>
					  <path d='M13.94 22.88C18.8774 22.88 22.88 18.8774 22.88 13.94C22.88 9.00257 18.8774 5 13.94 5C9.00257 5 5 9.00257 5 13.94C5 18.8774 9.00257 22.88 13.94 22.88Z' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
					  <path d='M20.2402 20.2422L23.9002 23.9022' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
					</svg>
				</Link>

        <button className='nav-btn w-5 h-4 relative' onClick={onNav}>
          <span className='w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-0'></span>
          <span className='w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-[8px]'></span>
          <span className='w-full h-[2px] bg-black inline-block duration-200 absolute left-0 top-[16px]'></span>
        </button>
      </div>
		</>
  );
}
