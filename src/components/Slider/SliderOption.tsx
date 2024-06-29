import * as React from "react";
import Slider from "react-slick";
import { Flex, Image, Button } from "antd";
import people1 from "../../assets/image/people1.png";
import icon1 from "../../assets/image/icon1.png";
import people2 from "../../assets/image/people2.png";
import icon2 from "../../assets/image/icon2.png";
import people3 from "../../assets/image/people3.png";
import icon3 from "../../assets/image/icon3.png";
import slider from "../../assets/image/slider.png";

export const SliderOption: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div
      style={{ padding: "100px 0", textAlign: "center" }}
      className="sliderbg"
    >
      <div className="container">
        <h1 style={{ fontSize: "40px", marginBottom: "100px" }}>
          各行各业的先进企业都在用飞书
        </h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-div">
              <Flex>
                <Image src={people1} width={"56px"}></Image>
                <div style={{ paddingLeft: "10px" }}>
                  <h1 style={{ textAlign: "left" }}>向飞</h1>
                  <p>三一集团副总裁 人力资源总监</p>
                </div>
              </Flex>
              <hr />
              <div>
                <Flex justify="space-between" align="center">
                  <div style={{ paddingTop: "20px" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: 800 }}>
                      50000 +
                    </h1>
                    <p style={{ textAlign: "left" }}>全员使用</p>
                  </div>
                  <Image src={icon1} width={"120px"}></Image>
                </Flex>
                <p style={{ paddingTop: "20px" }}>
                  三一非常重视员工体验，飞书倡导“愉悦是一种生产力”。现在飞书也是我们整个公司唯一全员
                  5 万人使用的应用。
                </p>
              </div>
            </div>
            <div className="slider-div">
              <Flex>
                <Image src={people2} width={"56px"}></Image>
                <div style={{ paddingLeft: "10px" }}>
                  <h1 style={{ textAlign: "left" }}>周斌</h1>
                  <p>太平洋健康险副总经理</p>
                </div>
              </Flex>
              <hr />
              <div>
                <Flex justify="space-between" align="center">
                  <div style={{ paddingTop: "20px" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: 800 }}>85 %</h1>
                    <p style={{ textAlign: "left" }}>员工对公司目标更有信心</p>
                  </div>
                  <Image src={icon2} width={"120px"}></Image>
                </Flex>
                <p style={{ paddingTop: "20px" }}>
                  我在HR从业将近20年,用过很多绩效管理工具，也用过很多办公系统，但是能够把两者结合好的就只有飞书
                </p>
              </div>
            </div>
            <div className="slider-div">
              <Flex>
                <Image src={people3} width={"56px"}></Image>
                <div style={{ paddingLeft: "10px" }}>
                  <h1 style={{ textAlign: "left" }}>周浩运</h1>
                  <p>海底捞首席技术官</p>
                </div>
              </Flex>
              <hr />
              <div>
                <Flex justify="space-between" align="center">
                  <div style={{ paddingTop: "20px" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: 800 }}>200 +</h1>
                    <p style={{ textAlign: "left" }}>企业应用在飞书运行</p>
                  </div>
                  <Image src={icon3} width={"120px"}></Image>
                </Flex>
                <p style={{ paddingTop: "20px" }}>
                  使用飞书仅半年多的时间,我们能明显感受到用先进工具对所有员工的赋能。飞书服务好海底捞，
                  海底捞服务好顾客
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Image src={slider} preview={false}></Image>
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Button
            style={{
              borderRadius: "20px",
              borderColor: "#1677FF",
              color: "#1677FF",
              width: "200px",
              background: "transparent",
            }}
            size="large"
          >
            了解更多客户案例
          </Button>
        </div>
      </div>
    </div>
  );
};
