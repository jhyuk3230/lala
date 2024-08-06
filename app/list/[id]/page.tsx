import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ListBanner from "../../components/ListBanner";
import ListInfo from "../../components/ListInfo";

export default function List(props: any) {
	console.log(props);
  return (
    <>
      <Header />
      <Nav />
      <main>
        <ListBanner />
        <ListInfo />
      </main>
      <Footer />
    </>
  );
}
