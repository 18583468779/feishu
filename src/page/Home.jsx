import Header from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Images } from "../components/image/Image";
import { SelectItem } from "../components/selectItem/SelectItem";
import { Enterprise } from "../components/enterprise/Enterprise";
// import { Option } from "../components/option/Option";
import { HomeBottom } from "../components/homeBottom/HomeBottom";
import { SliderOption } from "../components/Slider/SliderOption";
import { HomeSectionOne } from "../components/homeBottom/HomeSectionOne";
import { Footer } from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "0px" }}>
        <Banner />
        <Images />
        <SelectItem />
        <Enterprise />
        {/* <Option /> */}
        <SliderOption />
        <HomeBottom />
        <HomeSectionOne />
        <Footer />
      </div>
    </>
  );
}

export default Home;
