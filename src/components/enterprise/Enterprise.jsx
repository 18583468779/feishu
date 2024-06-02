import { useState } from "react";
import { Typography, Flex, Button } from "antd";
import {
  AimOutlined,
  LineChartOutlined,
  ApartmentOutlined,
  AuditOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
import v1 from "../../assets/image/v1.mp4";
import v2 from "../../assets/image/v2.mp4";
import v3 from "../../assets/image/v3.mp4";
import v4 from "../../assets/image/v4.mp4";

export const Enterprise = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container" style={{ marginTop: "180px" }}>
      <Title
        style={{ textAlign: "center", marginBottom: "100px", fontWeight: 500 }}
      >
        助您轻松应对企业管理难题
      </Title>
      <div className="tab-switcher ">
        <div className="button-container">
          <div
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <Flex align="center" justify="between">
              <ApartmentOutlined
                style={{
                  fontSize: "28px",
                  color: activeTab === 1 ? "#427bff" : "#000",
                }}
              />
              <Title level={3}>协同办公</Title>
            </Flex>

            <p className={activeTab === 1 ? "active" : ""}>
              站式协同，全面提升企业生产力
            </p>
          </div>
          <div
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <Flex align="center" justify="between">
              <AimOutlined
                style={{
                  fontSize: "28px",
                  color: activeTab === 2 ? "#427bff" : "#000",
                }}
              />{" "}
              <Title level={3}>战略落地</Title>
            </Flex>

            <p className={activeTab === 2 ? "active" : ""}>
              帮助企业定好目标，招对人、用好人、激励人
            </p>
          </div>
          <div
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            <Flex align="center" justify="between">
              <LineChartOutlined
                style={{
                  fontSize: "28px",
                  color: activeTab === 3 ? "#427bff" : "#000",
                }}
              />
              <Title level={3}>业务管理</Title>
            </Flex>
            <p className={activeTab === 3 ? "active" : ""}>
              深度打通和集成业务应用，让业务流与协作流合二为一
            </p>
          </div>
          <div
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            <Flex align="center" justify="between">
              <AuditOutlined
                style={{
                  fontSize: "28px",
                  color: activeTab === 4 ? "#427bff" : "#000",
                }}
              />{" "}
              <Title level={3}>知识管理</Title>
            </Flex>

            <p className={activeTab === 4 ? "active" : ""}>
              从人找知识到知识找人，让企业经验持续发挥价值
            </p>
          </div>
          <Button
            type="primary"
            style={{
              width: "200px",
              borderRadius: "26px",
              height: "46px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            免费试用
          </Button>
        </div>
        <div className="content-container">
          {activeTab === 1 && (
            <div>
              <video
                src={v1}
                autoPlay
                loop
                muted
                width={644}
                height={410}
                style={{ borderRadius: "10px" }}
              ></video>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <video
                src={v2}
                autoPlay
                loop
                muted
                width={644}
                height={410}
                style={{ borderRadius: "10px" }}
              ></video>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <video
                src={v3}
                autoPlay
                loop
                muted
                width={644}
                height={410}
                style={{ borderRadius: "10px" }}
              ></video>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <video
                src={v4}
                autoPlay
                loop
                muted
                width={644}
                height={410}
                style={{ borderRadius: "10px" }}
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
