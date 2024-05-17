import React from "react";
import { DownOutlined, ConsoleSqlOutlined } from "@ant-design/icons";
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
        <Col span={2}>
          <Flex vertical gap={"30px"} align="start">
            <h3>
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "5px" }}
              />
              制造业
            </h3>
            <h3>企业服务</h3>
            <h3>智能出行</h3>
            <h3>游戏</h3>
            <h3>教育</h3>
          </Flex>
        </Col>
        <Col span={2}>
          <Flex vertical gap={"30px"} align="start">
            <h3>央国企</h3>
            <h3>消费</h3>
            <h3>消费电子</h3>
            <h3>医疗健康</h3>
            <h3>教育</h3>
          </Flex>
        </Col>
        <Col span={2}>
          <Flex vertical gap={"30px"} align="start">
            <h3>互联网</h3>
            <h3>零售</h3>
            <h3>金融</h3>
            <h3>房地产</h3>
            <h3>文娱传媒</h3>
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
              background: "#ccc",
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
