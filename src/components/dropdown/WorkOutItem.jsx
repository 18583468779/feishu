import { Row, Col, Image, Button, Flex, Tabs } from "antd";

import work from "../../assets/image/work.png";
import p1 from "../../assets/image/p1.png";
import p2 from "../../assets/image/p2.png";

export const WorkOutItem = () => {
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
      label: "行业解决方案",
      key: 1,
      children: (
        <Row justify="space-around" align="start">
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord
                title="制造"
                content={["硬件研发项目管理", "设备安全巡检"]}
              />
              <WorkWord
                title="金融"
                content={["战略落地", "业技融合敏捷机制"]}
              />
              <WorkWord title="企业服务" content={["L2C管理", "流程管理"]} />
              <WorkWord
                title="消费电子"
                content={["消费电子研发管理", "供应链管理"]}
              />
              <WorkWord
                title="半导体"
                content={["芯片研发管理", "研发知识管理"]}
              />
            </Flex>
          </Col>

          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord
                title="消费品"
                content={["商品研发管理", "品牌营销管理"]}
              />
              <WorkWord
                title="餐饮"
                content={["采购寻源管理", "菜品研发管理"]}
              />
              <WorkWord title="汽车" content={["研发数据驾驶舱", "缺料预警"]} />
              <WorkWord title="影视娱乐" content={["剧本创作", "艺人招募"]} />
            </Flex>
          </Col>

          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord title="零售" content={["开店流程管理", "门店巡检"]} />
              <WorkWord
                title="医疗"
                content={["药品研发管理", "医药销售赋能"]}
              />
              <WorkWord
                title="地产"
                content={["投资研判管理", "项目变更管理"]}
              />
              <WorkWord
                title="游戏"
                content={["游戏角色创作", "敏捷项目管理"]}
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
      label: "通用解决方案",
      key: 2,
      children: (
        <Row justify="space-around" align="start">
          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord
                title="项目管理"
                content={["复杂项目管理", "轻量项目管理"]}
              />
              <WorkWord title="客服" content={["胪反馈管理"]} />
            </Flex>
          </Col>

          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord
                title="迁移到飞书"
                content={["保护企业资产", "优化业务流程"]}
              />
            </Flex>
          </Col>

          <Col span={4}>
            <Flex vertical gap={"30px"} align="start">
              <WorkWord
                title="系统集成"
                content={["审批集成", "Salesforce集成"]}
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
      label: "行业实践",
      key: 3,
      children: (
        <>
          <h4 style={{ paddingLeft: "10px", marginBottom: "30px" }}>
            行业实践合集&gt;
          </h4>
          <Row justify="space-around" align="start">
            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="行业通用"
                  content={["减少90 %重复工作", "5个任务管理提效秘籍"]}
                />
                <WorkWord
                  title="金融"
                  content={[
                    "打造一站式智慧党建工作平台",
                    "建设高效学习组织新形态",
                  ]}
                />
                <WorkWord
                  title="文娱传媒"
                  content={["激发创造打造爆款综艺", "万人共创打造全网关注话题"]}
                />
              </Flex>
            </Col>

            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="消费"
                  content={["高效打造消费品牌爆品", "一张表掌握产品与销量情况"]}
                />
                <WorkWord
                  title="制造业"
                  content={[
                    "0代码搭建业务巡检系统",
                    "17條线索月的车企营销方法",
                  ]}
                />
                <WorkWord
                  title="房地产"
                  content={["一张询价表省下20万", "为每个项目变更节省300小时"]}
                />
              </Flex>
            </Col>

            <Col span={6}>
              <Flex vertical gap={"30px"} align="start">
                <WorkWord
                  title="游戏"
                  content={[
                    "通过标准生产线打造爆款游戏",
                    "7大场景加速游戏策划与开发",
                  ]}
                />
                <WorkWord
                  title="互联网"
                  content={[
                    "用原1/4的时间实现功能上线",
                    "10倍提升互联网组织协作效率",
                  ]}
                />
                <WorkWord
                  title="医疗健康"
                  content={[
                    "7大解决方案助力医疗组织升级",
                    "医药代表如何提升销售效率",
                  ]}
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
                    <Image style={{ width: "100%" }} src={p1} />
                    <h4 style={{ paddingLeft: "10px" }} className="center">
                      抖音同款项目管理神器
                    </h4>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      助力抖音在几年时间迅速成长为一款“国
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      民级应用”，既实现敏捷的功能迭代，又
                    </p>
                    <p style={{ fontSize: "12px", paddingLeft: "10px" }}>
                      承载高速的组织增长。
                    </p>
                    <Button
                      type="link"
                      style={{ width: "180px", marginLeft: "-25px" }}
                    >
                      点击试用同款 &gt;
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
      label: "模板中心",
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
