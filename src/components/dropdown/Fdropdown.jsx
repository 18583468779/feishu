import React from "react";
import {
  DownOutlined,
  ConsoleSqlOutlined,
  ShoppingOutlined,
  RedEnvelopeOutlined,
  HomeOutlined,
  ContainerOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Row, Col, Image, Button, Flex } from "antd";
import flower from "../../assets/image/flower.png";
// 下拉组件封装
export const Fdropdown = (props) => {
  const { title = "标题" } = props;

  const Tab1 = () => (
    <div className="container">
      <Row justify="space-around" align="middle">
        <Col span={6}>
          <div style={{ padding: "30px 0" }}>
            <div
              style={{
                background: "#E2EBFF",
                padding: "18px",
                borderRadius: "10px",
              }}
            >
              <Flex vertical gap={"10px"} align="center">
                <Image style={{ width: "174px" }} src={flower} />
                <h1 className="center">客户故事</h1>
                <p className="center">看各行各业的先进企业</p>
                <p className="center">如何使用飞书促进业务增长</p>
                <Button type="primary" size="large" style={{ width: "180px" }}>
                  立即了解
                </Button>
              </Flex>
            </div>
          </div>
        </Col>

        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <h3>
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
              互联网
            </h3>
            <h3>
              <ShoppingOutlined
                style={{ color: "green", marginRight: "8px" }}
              />
              零售
            </h3>
            <h3>
              <RedEnvelopeOutlined
                style={{ color: "#14C0FF", marginRight: "8px" }}
              />
              金融
            </h3>
            <h3>
              <HomeOutlined style={{ color: "#3370FF", marginRight: "8px" }} />
              房地产
            </h3>
            <h3>
              <ContainerOutlined
                style={{ color: "green", marginRight: "8px" }}
              />
              教育
            </h3>
          </Flex>
        </Col>

        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              制造业
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              企业服务
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              智能出行
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              游戏
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              教育
            </h3>
          </Flex>
        </Col>
        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              央国企
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              消费
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              消费电子
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              医疗健康
            </h3>
            <h3>
              <GlobalOutlined
                style={{ color: "#3370FF", marginRight: "8px" }}
              />
              教育
            </h3>
          </Flex>
        </Col>
      </Row>
    </div>
  );

  return (
    <Dropdown
      dropdownRender={() => {
        return (
          <div
            style={{
              background: "#fff",
              boxShadow: "4px 4px 10px #eee",
            }}
          >
            <Tab1 />
          </div>
        );
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
