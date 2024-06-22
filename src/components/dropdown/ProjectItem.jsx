import { Row, Col, Image, Button, Flex, Tabs } from "antd";
import { ConsoleSqlOutlined, ShoppingOutlined } from "@ant-design/icons";
import { IconTitleItem } from "./IconTitleItem";
import { useNavigate } from "react-router";
import work from "../../assets/image/work.png";
import p1 from "../../assets/image/p1.png";
import p2 from "../../assets/image/p2.png";

export const ProjectItem = () => {
  const navigate = useNavigate();
  const WorkWord = ({ title = "", content = [] }) => (
    <Flex vertical gap={"6px"} align="flex-start">
      <Button type="link">{title} &gt;</Button>
      {content.map((item) => (
        <p key={item} className="showBg">
          {item}
        </p>
      ))}
    </Flex>
  );

  const tabs = [
    {
      label: "飞书Office",
      key: 1,
      children: (
        <Row justify="space-around" align="start">
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem title="智能伙伴" content="每个人的智能伙伴">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>
              <IconTitleItem title="文档" content="多人实时编辑共创">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="幻灯片" content="轻松创作生动表达">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem
                title="日历"
                content="轻松掌握团队日程"
                onClick={() => navigate("/calendar")}
              >
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="知识库" content="知识持续创造价值">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="服务台" content="搭建共享服务中心">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="管理后台" content="灵活管理全员权限">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
            </Flex>
          </Col>
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem
                title="即时消息"
                content="极致高效传递信息"
                onClick={() => navigate("/calendar")}
              >
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>
              <IconTitleItem title="多维表格" content="轻松搭建业务统">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="思维笔记" content="完美记绿思考路径">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="网络研讨会" content="信息大规模高效传递">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="邮箱" content="邮件信息灵分享">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="云盘" content="企业资料随取随用">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="会议室" content="智能会议空间">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
            </Flex>
          </Col>{" "}
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem title="飞书OKR" content="聚焦重点直追目标">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>
              <IconTitleItem title="表格" content="强大的在线表格">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="画板" content="好的可视化达">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="妙记" content="音视频精准转文字">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="任务" content="大事小事有始有终">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="词典" content="有效降低沟通门槛">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
              <IconTitleItem title="安全合规" content="保障企业信息安全">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>{" "}
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
                <Flex vertical gap={"10px"} align="start">
                  <Image style={{ width: "100%" }} src={work} />
                  <h4 style={{ paddingLeft: "10px" }} className="center">
                    定制企业专属解决方案
                  </h4>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    从行业核心场景出发，提供组织效能提
                  </p>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    升、业务发展加速双重解决方案，与你共
                  </p>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    行业内提效实践及数字化经验。
                  </p>
                  <Button
                    type="link"
                    style={{ width: "180px", marginLeft: "-45px" }}
                  >
                    立即咨询 &gt;
                  </Button>
                </Flex>
              </div>
            </div>
          </Col>
        </Row>
      ),
    },
    {
      label: "飞书People",
      key: 2,
      children: (
        <Row justify="space-around" align="start">
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem title="飞书人事" content="识别组织优质人才">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>
            </Flex>
          </Col>
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem title="飞书绩效" content="激励人才加速成长">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
              </IconTitleItem>
            </Flex>
          </Col>{" "}
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <IconTitleItem title="飞书招聘" content="精准招聘合适人才">
                <ConsoleSqlOutlined
                  style={{ color: "blue", marginRight: "8px" }}
                />
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
                <Flex vertical gap={"10px"} align="start">
                  <Image style={{ width: "100%" }} src={work} />
                  <h4 style={{ paddingLeft: "10px" }} className="center">
                    定制企业专属解决方案
                  </h4>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    从行业核心场景出发，提供组织效能提
                  </p>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    升、业务发展加速双重解决方案，与你共
                  </p>
                  <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                    行业内提效实践及数字化经验。
                  </p>
                  <Button
                    type="link"
                    style={{ width: "180px", marginLeft: "-45px" }}
                  >
                    立即咨询 &gt;
                  </Button>
                </Flex>
              </div>
            </div>
          </Col>
        </Row>
      ),
    },
    {
      label: "业务工具",
      key: 3,
      children: (
        <>
          <h4 style={{ paddingLeft: "10px", marginBottom: "30px" }}>
            行业实践合集&gt;
          </h4>
          <Row justify="space-around" align="start">
            <Col span={4}>
              <Flex vertical gap={"30px"} align="start">
                <IconTitleItem title="多维表格" content="轻松搭建业务系统">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="飞书项目" content="协同流程更高效">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="机器人助手" content="支持业务提效加速">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
              </Flex>
            </Col>
            <Col span={4}>
              <Flex vertical gap={"30px"} align="start">
                <IconTitleItem title="飞书集成平台" content="实现企业数据互通">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="飞书合同" content="智能审核守护安全">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="定制工作台" content="-站式高效工作">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
              </Flex>
            </Col>{" "}
            <Col span={4}>
              <Flex vertical gap={"30px"} align="start">
                <IconTitleItem title="飞书应引擎" content="大幅降低开发成本">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="飞书审批" content="敲透明加速管理">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
                </IconTitleItem>
                <IconTitleItem title="飞书问卷" content="直接驱动业务流程">
                  <ConsoleSqlOutlined
                    style={{ color: "blue", marginRight: "8px" }}
                  />
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
                  <Flex vertical gap={"10px"} align="start">
                    <Image style={{ width: "100%" }} src={work} />
                    <h4 style={{ paddingLeft: "10px" }} className="center">
                      定制企业专属解决方案
                    </h4>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      从行业核心场景出发，提供组织效能提
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      升、业务发展加速双重解决方案，与你共
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      行业内提效实践及数字化经验。
                    </p>
                    <Button
                      type="link"
                      style={{ width: "180px", marginLeft: "-45px" }}
                    >
                      立即咨询 &gt;
                    </Button>
                  </Flex>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      label: "数字化样板间",
      key: 4,
      children: (
        <>
          <h4 style={{ paddingLeft: "10px", marginBottom: "30px" }}>
            行业模板合集&gt;
          </h4>
          <Row justify="space-around" align="start">
            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="互联网"
                  content={["研发需求及人力排期", "项目验收走查表"]}
                />
                <WorkWord
                  title="新零售"
                  content={["零售ERP管理系统", "供应商及产能管理"]}
                />
                <h4 style={{ paddingLeft: "10px" }}>职能模板合集&gt;</h4>
                <WorkWord
                  title="产品研发"
                  content={["KANO模型产品优先级调研", "项目验收走查表"]}
                />
                <WorkWord
                  title="销售管理"
                  content={["轻型客户关系管理系统", "店铺销售额日报表"]}
                />
              </Flex>
            </Col>

            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="制造业"
                  content={["制造业一张表管公司", "搭建自动化巡检系统"]}
                />
                <WorkWord
                  title="电商"
                  content={["电商售后管理及进展跟踪", "达人商单管理"]}
                />
                <WorkWord
                  title="项目管理"
                  content={["项目管理及进展跟踪", "项目预算汇总提报"]}
                />
                <WorkWord
                  title="人事行政"
                  content={[
                    "团队人员信息及工作表现统计",
                    "轻量级企业资产管理系统",
                  ]}
                />
              </Flex>
            </Col>

            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="新媒体"
                  content={["新媒体播客内容创作管理", "视频拍摄分镜管理"]}
                />
                <WorkWord
                  title="市场营销"
                  content={["营销活动审批管理", "直播数据记录及可视化看板"]}
                />
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
                  <Flex vertical gap={"10px"} align="start">
                    <Image style={{ width: "100%" }} src={p2} />
                    <h4 style={{ paddingLeft: "10px" }} className="center">
                      免费领数字化工具包和模板库
                    </h4>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      体验飞书集成能力，打通各业务单元。获
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      取数字化工具包和模板库，确保企业业务
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      在线上"飞"起来。
                    </p>
                    <Button
                      type="link"
                      style={{ width: "180px", marginLeft: "-25px" }}
                    >
                      立即领福利 &gt;
                    </Button>
                  </Flex>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="container">
        <Tabs
          type="card"
          defaultActiveKey="1"
          tabPosition={"left"}
          style={{
            padding: "30px",
          }}
          tabBarGutter={20}
          items={tabs}
        />
      </div>
    </div>
  );
};
