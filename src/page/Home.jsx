import Header from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Image } from "../components/image/Image";

function Home() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "-60px" }}>
        <Banner />
        <Image />
      </div>
    </>
  );
}

export default Home;
