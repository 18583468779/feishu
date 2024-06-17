import { Button, Image } from "antd";
import { DownloadOutlined, PhoneOutlined } from "@ant-design/icons";
import logo from "../../assets/image/logo1.png";
import tags from "../../assets/image/tags.png";

export const Footer = () => {
  return (
    <div style={{ background: "#1F2329", padding: "30px 0 100px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#dee0e3",
        }}
      >
        <div className="footer_div">
          <h1>飞书产品</h1>
          <ul>
            <li>飞书智能伙伴 </li>
            <li>多维表格</li>
            <li>飞书项目</li>
            <li>即时消息</li>
            <li>文档</li>
            <li>视频会议</li>
            <li>妙记</li>
            <li>知识库</li>
          </ul>
        </div>
        <div className="footer_div">
          <h1>解决方案 </h1>
          <ul>
            <li>制造 </li>
            <li>消费品</li>
            <li>零售</li>
            <li>金融</li>
            <li>餐饮</li>
            <li>医疗</li>
            <li>企业服务</li>
            <li>汽车</li>
          </ul>
        </div>
        <div className="footer_div">
          <h1>定价 </h1>
          <ul>
            <li>版本对比 </li>
            <li>购买咨询</li>
          </ul>
        </div>
        <div className="footer_div">
          <h1>探索飞书</h1>
          <ul>
            <li>加入我们 </li>
            <li>关于飞书</li>
            <li>新闻中心</li>
            <li>飞书研习社</li>
            <li>飞书认证官</li>
            <li>公益计划</li>
            <li>生态快讯</li>
            <li>飞书社区</li>
          </ul>
        </div>
        <div className="footer_div">
          <h1>合作与支持</h1>
          <ul>
            <li>帮助中心 </li>
            <li>开放平台</li>
            <li>应用目录</li>
            <li>合作伙伴</li>
            <li>联系我们</li>
            <li>更新日志</li>
            <li>管理后台</li>
            <li>友情链接</li>
            <li>举报与反馈</li>
          </ul>
        </div>
        <div className="footer_div">
          <h1>法律与合规 </h1>
          <ul>
            <li>服务协议 </li>
            <li>隐私政策</li>
            <li>安全合规</li>
            <li>飞书安全白皮书</li>
          </ul>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Button
              style={{
                borderRadius: "20px",
                borderColor: "#1677FF",
                color: "#1677FF",
              }}
            >
              <DownloadOutlined />
              下载飞书
            </Button>
            <Button type="primary" style={{ borderRadius: "20px" }}>
              <PhoneOutlined />
              联系顾问
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
        <div
          style={{
            padding: "20px 0 0 0",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Image style={{ width: "74px" }} src={logo} />
          <Image style={{ width: "251px" }} src={tags} />
        </div>
        <div>
          <ul style={{ display: "flex", marginTop: "50px", gap: "30px" }}>
            <li>Copyright © 2024 北京飞书科技有限公司</li>
            <li>京ICP备16045432号-4</li>
            <li>京公网安备 11010802029085号</li>
            增值电信业务经营许可证：京B2-20190249
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
