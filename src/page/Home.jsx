import Header from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Images } from "../components/image/Image";
import { SelectItem } from "../components/selectItem/SelectItem";
import { Enterprise } from "../components/enterprise/Enterprise";
// import { Option } from "../components/option/Option";
import { HomeBottom } from "../components/homeBottom/HomeBottom";
import { HomeSectionOne } from "../components/homeBottom/HomeSectionOne";

function Home() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "-60px" }}>
        <Banner />
        <Images />
        <SelectItem />
        <Enterprise />
        {/* <Option /> */}
        <HomeBottom />
        <HomeSectionOne />
      </div>
    </>
  );
}

export default Home;
