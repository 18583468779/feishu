import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
export const HomeSectionOne = () => {
  return (
    <div
      style={{
        padding: "60px 0",
        background:
          "linear-gradient(92deg,rgba(37,176,231,.1) 0,rgba(20,86,240,.1) 51.56%,rgba(159,111,241,.1) 100%)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          先进团队，先用飞书
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "50px" }}>
          欢迎联系我们，飞书效能顾问将为您提供全力支持
        </p>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <li>
            <CheckCircleOutlined
              style={{
                color: "#3370ff",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            分享先进工作方式
          </li>

          <li>
            <CheckCircleOutlined
              style={{
                color: "#3370ff",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            输送行业最佳实践
          </li>
          <li>
            <CheckCircleOutlined
              style={{
                color: "#3370ff",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            全面协助组织提效
          </li>
        </ul>
        <div style={{ marginTop: "50px" }}>
          <Button
            type="primary"
            style={{ borderRadius: "20px", width: "150px" }}
            size="large"
          >
            联系我们
          </Button>
          <Button
            style={{
              borderRadius: "20px",
              borderColor: "#1677FF",
              color: "#1677FF",
              marginLeft: "40px",
              width: "150px",
            }}
            size="large"
          >
            下载飞书
          </Button>
        </div>
      </div>
    </div>
  );
};
