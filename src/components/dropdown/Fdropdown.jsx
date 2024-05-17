import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
// 下拉组件封装
export const Fdropdown = (props) => {
  const { title = "标题" } = props;

  return (
    <Dropdown
      dropdownRender={() => {
        return <div style={{ background: "#ccc" }}>1111111</div>;
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
