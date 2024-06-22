import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { CustemItem } from "./CustemItem";
import { CooperateItem } from "./CooperateItem";
import { WorkOutItem } from "./WorkOutItem";
import { ProjectItem } from "./ProjectItem";

// 下拉组件封装
export const Fdropdown = (props) => {
  const { title = "标题", select = 1 } = props;
  // select 是根据父组件传递的参数，展示对应的ui

  const SelectDom = () => {
    switch (select) {
      case 1:
        return (
          <div
            style={{
              background: "#fff",
              boxShadow: "4px 4px 10px #eee",
            }}
          >
            <CustemItem />
          </div>
        );
      case 2:
        return (
          <div
            style={{
              background: "#fff",
              boxShadow: "4px 4px 10px #eee",
            }}
          >
            <WorkOutItem />
          </div>
        );
      case 3:
        return (
          <div
            style={{
              background: "#fff",
              boxShadow: "4px 4px 10px #eee",
            }}
          >
            <ProjectItem />
          </div>
        );
      case 4:
        return (
          <div
            style={{
              background: "#fff",
              boxShadow: "4px 4px 10px #eee",
            }}
          >
            <CooperateItem />
          </div>
        );
    }
  };

  return (
    <Dropdown
      dropdownRender={() => {
        return <SelectDom />;
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
