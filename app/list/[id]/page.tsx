import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ListBanner from "../../components/ListBanner";
import ListInfo from "../../components/ListInfo";

export default function List() {
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
