import { Image } from "antd";
import logo from "../../assets/image/logo.png";
import f1 from "../../assets/image/f1.png";

export const CaledarFooter = () => {
  return (
    <div style={{ background: "#fff", padding: "30px 0 0px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#51565d",
        }}
      >
        <div className="footer_div">
          <Image style={{ width: "74px" }} src={logo} preview={false} />
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>热门链接</h2>
          <ul>
            <li>客户案例 </li>
            <li>下载飞书</li>
            <li>定价</li>
            <li>OKR</li>
            <li>管理后台</li>
            <li>OKR.com</li>
            <li>友情链接</li>
          </ul>
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>解决方案 </h2>
          <ul>
            <li>互联网</li>
            <li>高科技</li>
            <li>媒体</li>
            <li>人力资源</li>
            <li>销售</li>
          </ul>
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>帮助和支持</h2>
          <ul>
            <li>帮助中心 </li>
            <li>应用目录</li>
            <li>开放平台</li>
            <li>合作伙伴</li>
            <li>联系我们</li>
            <li>更新日志</li>
          </ul>
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>探索飞书</h2>
          <ul>
            <li>加入我们 </li>
            <li>关于飞书</li>
            <li>新闻中心</li>
            <li>飞书研习社 </li>
            <li>生态快讯</li>
          </ul>
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>飞书系列产品</h2>
          <ul>
            <li>飞书文档 </li>
            <li>飞书多维表格</li>
            <li>飞书妙记</li>
            <li>飞书会议室</li>
          </ul>
        </div>
        <div className="footer_div">
          <h2 style={{ marginBottom: "10px" }}>法律与合规 </h2>
          <ul>
            <li>服务协议 </li>
            <li>隐私政策</li>
            <li>安全合规</li>
          </ul>
        </div>
      </div>
      <div style={{ background: "#F8F9FA", paddingBottom: "50px" }}>
        <div className="container">
          <div
            style={{
              padding: "20px 0 30px 0",
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Image style={{ width: "251px" }} src={f1} />
          </div>
          <div style={{ margin: "0 auto" }}>
            <ul
              style={{
                display: "flex",
                margin: "0 auto",
                justifyContent: "space-around",
                gap: "30px",
                fontSize: "12px",
              }}
            >
              <li>Copyright © 2024 北京飞书科技有限公司</li>
              <li>京ICP备16045432号-4</li>
              <li>京公网安备 11010802029085号</li>
              增值电信业务经营许可证：京B2-20190249
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
