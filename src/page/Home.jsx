import Header from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Images } from "../components/image/Image";
import { SelectItem } from "../components/selectItem/SelectItem";

function Home() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "-60px" }}>
        <Banner />
        <Images />
        <SelectItem />
      </div>
    </>
  );
}

export default Home;
