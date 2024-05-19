import { Carousel, Flex, Button, Typography, Space, Image } from "antd";
const { Title } = Typography;
import arrow from "../../assets/image/arrow.png";
import bannerShow from "../../assets/image/banner-show.png";

import { CheckOutlined } from "@ant-design/icons";
export const Banner = () => {
  return (
    <Carousel autoplay dots={{ className: "dots" }} dotPosition="bottom">
      <div>
        <div className="banner1">
          <Flex align="center" className="container" gap={"50px"}>
            <Flex vertical>
              <Title level={1} style={{ fontSize: "50px" }}>
                先进团队 先用 <span style={{ color: "#605BEA" }}>飞书</span>
              </Title>
              <ul>
                <Space size={"middle"} direction="vertical">
                  <li style={{ fontSize: "18px" }}>
                    <Space>
                      <CheckOutlined style={{ color: "#605BEA" }} />
                      V一 站式无缝办公协作
                    </Space>
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    <Space>
                      <CheckOutlined style={{ color: "#605BEA" }} />
                      V团队上下对齐目标
                    </Space>
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    <Space>
                      <CheckOutlined style={{ color: "#605BEA" }} />
                      全面激活组织与个人
                    </Space>
                  </li>
                </Space>
              </ul>

              <Button type="primary" className="freeBtn">
                免费试用
                <Image
                  style={{ width: "44px", marginLeft: "32px" }}
                  src={arrow}
                />
              </Button>
            </Flex>
            <div style={{ position: "relative", top: "30px" }}>
              <img src={bannerShow} alt="" style={{ width: "711px" }} />
            </div>
          </Flex>
        </div>
      </div>
      <div>
        <div className="banner2"></div>
      </div>
    </Carousel>
  );
};
