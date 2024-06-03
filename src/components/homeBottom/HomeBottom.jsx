import { Flex, Image } from "antd";
import bg1 from "../../assets/image/bg1.png";
import { UserAddOutlined } from "@ant-design/icons";
export const HomeBottom = () => {
  const ChildrenOne = ({ p1, p2, p3, p4, children }) => (
    <div className="divdiv">
      <Flex gap={100}>
        <Flex align="center">
          <h1>{p1}</h1>
          {p2 && <span className="span">{p2}</span>}
        </Flex>
        {children}
      </Flex>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontSize: "16px" }}>{p3}</p>
        <p style={{ fontSize: "18px", marginTop: "5px" }}>{p4}</p>
      </div>
    </div>
  );

  return (
    <div className="HomeBottom">
      <div className="container">
        <p style={{ fontSize: "26px", textAlign: "center" }}>
          我们对标国内和国际最⾼标准合规性要求，保护企业的数据安全
        </p>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <Image src={bg1} style={{ width: "1200px" }} />
        </div>
        <div style={{ marginTop: "150px" }}>
          <h1
            style={{ textAlign: "center", fontSize: "40px", fontWeight: 500 }}
          >
            飞书将为企业数字化提供全方位服务
          </h1>
          <Flex
            style={{ marginTop: "100px" }}
            justify="space-between"
            wrap
            gap={20}
          >
            <ChildrenOne p1="人工服务" p2="付费版" p3="7*24h" p4="在线客服解答">
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
            <ChildrenOne
              p1="技术支持"
              p2="含周末"
              p3="工作时段"
              p4=" 1v1在线支持"
            >
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
            <ChildrenOne
              p1="帮助中心"
              p2="有效率"
              p3="员工自助答疑"
              p4="降低企业运营成本"
            >
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
            <ChildrenOne
              p1="售前专家"
              p2="有效率"
              p3="根据您的需求"
              p4="制定解决方案"
            >
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
            <ChildrenOne
              p1="效能顾问"
              p2="有效率"
              p3="定位组织问题"
              p4="制定效能提升方案"
            >
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
            <ChildrenOne
              p1="咨询团队"
              p2="有效率"
              p3="提供组织管理升级"
              p4="咨询服务"
            >
              <UserAddOutlined style={{ fontSize: "30px", color: "#336df4" }} />
            </ChildrenOne>
          </Flex>
          <div>
            <p style={{ textAlign: "center", marginTop: "60px" }}>
              我们将根据您购买飞书情况提供相应上述服务
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
