import Header from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
function Home() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "-60px" }}>
        <Banner />
      </div>
    </>
  );
}

export default Home;
