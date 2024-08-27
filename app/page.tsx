import Header from "./_components/inc/Header";
import Nav from "./_components/inc/Nav";
import Footer from "./_components/inc/Footer";
import Main from "./_components/main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
}
