import { Row, Col, Image, Button, Flex } from "antd";
import {
  ConsoleSqlOutlined,
  ShoppingOutlined,
  RedEnvelopeOutlined,
  HomeOutlined,
  ContainerOutlined,
  GlobalOutlined,
  CrownOutlined,
  SendOutlined,
  CoffeeOutlined,
  DesktopOutlined,
  SmileOutlined,
  SafetyCertificateOutlined,
  BookOutlined,
  AccountBookOutlined,
  BankOutlined,
} from "@ant-design/icons";
import prevous from "../../assets/image/prevous.png";
import { IconTitleItem } from "./IconTitleItem";
export const CooperateItem = () => {
  return (
    <div className="container">
      <Row justify="space-around" align="middle">
        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <IconTitleItem
              title="帮助中心"
              content="通过搜索,快速获取 问题答案"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem title="合作伙伴" content="共同拓展销售商机 领跑市场">
              <ShoppingOutlined style={{ color: "blue", marginRight: "8px" }} />
            </IconTitleItem>
            <IconTitleItem
              title="开放平台"
              content="灵开放定制，满足 复染业务场景"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
          </Flex>
        </Col>
        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <IconTitleItem
              title="「飞行家」交流社区"
              content="飞书用户的专属学习 交流平台"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem
              title="组织进化论」 播客"
              content="共同探讨企业管理与 职场成长"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem
              title="应用目录"
              content="提供丰富应用与模板 解决特定场景难题"
            >
              <ShoppingOutlined style={{ color: "blue", marginRight: "8px" }} />
            </IconTitleItem>
          </Flex>
        </Col>
        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <IconTitleItem
              title="市场活动"
              content="和大咖一起探讨 先进工作方式 先进工作方式"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem
              title="飞书研习社"
              content="发掘先进管理和高效 愉悦的工作方式"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem
              title="飞书认证官"
              content="面向企业及组织的管理 认证服务平台"
            >
              <ShoppingOutlined style={{ color: "blue", marginRight: "8px" }} />
            </IconTitleItem>
          </Flex>
        </Col>
        <Col span={3}>
          <Flex vertical gap={"30px"} align="start">
            <IconTitleItem
              title="加入我们"
              content="成为飞书团队的一员 开启新工作"
            >
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem title="联系我们" content="工作日24小时 在线咨询服务">
              <ConsoleSqlOutlined
                style={{ color: "blue", marginRight: "8px" }}
              />
            </IconTitleItem>
            <IconTitleItem
              title="公益计划"
              content="为慈善组织和高校组织 提供权益福利"
            >
              <ShoppingOutlined style={{ color: "blue", marginRight: "8px" }} />
            </IconTitleItem>
          </Flex>
        </Col>
        <Col span={6}>
          <div style={{ padding: "30px 0" }}>
            <div
              style={{
                background: "#E2EBFF",
                padding: "0px 0 10px 0",
                borderRadius: "10px",
              }}
            >
              <Flex vertical gap={"10px"} align="center">
                <Image style={{ width: "100%" }} src={prevous} />
                <h1 className="center">客户故事</h1>
                <p className="center">「近先进」是飞书出品的探访先进企业</p>
                <p className="center">
                  活动，与优秀企业家建联，共享行业前瞻洞见。
                </p>
                <Button type="link" style={{ width: "180px" }}>
                  了解详情 &gt;
                </Button>
              </Flex>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
