import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ListBanner from "../../components/ListBanner";

export default function List() {
  return (
    <>
      <Header />
      <Nav />
      <main>
				<ListBanner />

				<section className='mt-10'></section>
			</main>
      <Footer />
    </>
  );
}
