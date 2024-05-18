import { Image, Space } from "antd";
import logo from "../../assets/image/logo.png";
import styles from "./header.module.scss";
import { Fdropdown } from "../dropdown/Fdropdown";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerLeft}>
          <Space size={"large"}>
            <Image style={{ width: "74px" }} src={logo} />
            <Fdropdown title="客户案例" />
            <Fdropdown title="解决方案" select={2} />
            <Fdropdown title="产品功能" select={3} />
            <Fdropdown title="合作与支持" select={4} />
          </Space>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
