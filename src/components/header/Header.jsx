import { Image, Space, Button } from "antd";
import logo from "../../assets/image/logo.png";
import styles from "./header.module.scss";
import { Fdropdown } from "../dropdown/Fdropdown";
import { Flex } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <Flex className="container" justify="space-between" align="center">
        <div className={styles.headerLeft}>
          <Space size={"large"}>
            <Image
              style={{ width: "74px", cursor: "pointer" }}
              src={logo}
              preview={false}
              onClick={() => navigate("/")}
            />
            <Fdropdown title="客户案例" />
            <Fdropdown title="解决方案" select={2} />
            <Fdropdown title="产品功能" select={3} />
            <Fdropdown title="合作与支持" select={4} />
            <div>飞书社区</div>
          </Space>
        </div>
        <Flex gap={"30px"} align="center">
          <Space>
            <PhoneFilled />
            400-0682-666
          </Space>
          <p>定价</p>
          <p>登录</p>
          <Button
            style={{
              borderRadius: "20px",
              borderColor: "#1677FF",
              color: "#1677FF",
            }}
          >
            下载飞书
          </Button>
          <Button type="primary" style={{ borderRadius: "20px" }}>
            免费使用
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
