import { Image, Space, Button } from "antd";
import logo from "../../assets/image/logo.png";
import styles from "./header.module.scss";
import { Fdropdown } from "../dropdown/Fdropdown";
import { Flex } from "antd";
import { PhoneFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <Flex className="container" justify="space-between" align="center">
        <div className={styles.headerLeft}>
          <Space size={"large"}>
            <Image style={{ width: "74px" }} src={logo} />
            <Fdropdown title="客户案例" />
            <Fdropdown title="解决方案" select={2} />
            <Fdropdown title="产品功能" select={3} />
            <Fdropdown title="合作与支持" select={4} />
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
