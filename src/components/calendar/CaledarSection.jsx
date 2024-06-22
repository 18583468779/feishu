import { Button } from "antd";
export const CaledarSection = () => {
  return (
    <div
      className="bg1"
      //   style={{
      //     padding: "60px 0",
      //     background:
      //       "linear-gradient(92deg,rgba(37,176,231,.1) 0,rgba(20,86,240,.1) 51.56%,rgba(159,111,241,.1) 100%)",
      //   }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          先进团队，先用飞书
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "50px" }}>
          先进企业协作与管理平台
        </p>
        <div style={{ marginTop: "10px" }}>
          <Button
            type="primary"
            style={{ borderRadius: "5px", width: "150px", height: "50px" }}
            size="large"
          >
            免费试用
          </Button>
          <Button
            style={{
              borderRadius: "5px",
              borderColor: "#1677FF",
              color: "#1677FF",
              marginLeft: "20px",
              width: "150px",
              height: "50px",
            }}
            size="large"
          >
            联系我们
          </Button>
        </div>
      </div>
    </div>
  );
};
