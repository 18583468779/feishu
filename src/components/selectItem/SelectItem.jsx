import { Typography, Flex } from "antd";
import {
  CommentOutlined,
  CopyFilled,
  VideoCameraFilled,
  SignatureFilled,
  SwitcherFilled,
  ScheduleFilled,
  ReadFilled,
  RocketFilled,
} from "@ant-design/icons";
const { Title } = Typography;
export const SelectItem = () => {
  const InfoItem = (props) => (
    <Flex vertical align="center" className="bg_hover">
      {props.children}
      <Title
        level={4}
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          marginBottom: "5px",
          marginTop: "20px",
        }}
      >
        {props.title}
      </Title>
      <p style={{ textAlign: "center", fontSize: "14px" }}>{props.content}</p>
    </Flex>
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <Title style={{ textAlign: "center", marginBottom: "40px" }}>
          先进企业协作与管理平台
        </Title>
        <Flex justify="space-between">
          <InfoItem title="即时消息" content="极致高效传递信息">
            <CommentOutlined style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="文档" content="多人实时编辑共创">
            <CopyFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="视频会议" content="线上会议如临现场">
            <VideoCameraFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="妙记" content="音视频精准转文字">
            <SignatureFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="知识库" content="知识持续创造价值">
            <SwitcherFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="日历" content="轻松掌握团队日程">
            <ScheduleFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="多维表格" content="轻松搭建业务系统">
            <ReadFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
          <InfoItem title="飞书项目" content="保障项目高质量上线">
            <RocketFilled style={{ fontSize: "30px", color: "#427BFF" }} />
          </InfoItem>
        </Flex>
      </div>
    </div>
  );
};
