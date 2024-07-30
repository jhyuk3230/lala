import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-[1000px] m-auto">
        <Banner />
        <h3>오늘의 웹툰</h3>
      </main>
      <Footer />
    </>
  );
}
