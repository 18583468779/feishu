import { useState, useEffect, useRef } from "react";
import { Flex, Image, Button, Space } from "antd";
import { useSpring, animated } from "react-spring";
import c1 from "../../assets/image/c1.png";
import c2 from "../../assets/image/c2.png";
import c3 from "../../assets/image/c3.png";
import c4 from "../../assets/image/c4.png";
import c5 from "../../assets/image/c5.png";
import c6 from "../../assets/image/c6.png";
import c7 from "../../assets/image/c7.png";

export const CaledarBanner = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const imageRef6 = useRef(null);
  const imageRef7 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imageRef1.current) {
            setIsVisible1(entry.isIntersecting);
          } else if (entry.target === imageRef2.current) {
            setIsVisible2(entry.isIntersecting);
          } else if (entry.target === imageRef3.current) {
            setIsVisible3(entry.isIntersecting);
          } else if (entry.target === imageRef4.current) {
            setIsVisible4(entry.isIntersecting);
          } else if (entry.target === imageRef5.current) {
            setIsVisible5(entry.isIntersecting);
          } else if (entry.target === imageRef6.current) {
            setIsVisible6(entry.isIntersecting);
          } else if (entry.target === imageRef7.current) {
            setIsVisible7(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(imageRef1.current);
    observer.observe(imageRef2.current);
    observer.observe(imageRef3.current);
    observer.observe(imageRef4.current);
    observer.observe(imageRef5.current);
    observer.observe(imageRef6.current);
    observer.observe(imageRef7.current);

    return () => observer.disconnect();
  }, []);

  const animationProps1 = useSpring({
    opacity: isVisible1 ? 1 : 0,
    transform: isVisible1 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps2 = useSpring({
    opacity: isVisible2 ? 1 : 0,
    transform: isVisible2 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps3 = useSpring({
    opacity: isVisible3 ? 1 : 0,
    transform: isVisible3 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps4 = useSpring({
    opacity: isVisible4 ? 1 : 0,
    transform: isVisible4 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps5 = useSpring({
    opacity: isVisible5 ? 1 : 0,
    transform: isVisible5 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps6 = useSpring({
    opacity: isVisible6 ? 1 : 0,
    transform: isVisible6 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps7 = useSpring({
    opacity: isVisible7 ? 1 : 0,
    transform: isVisible7 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  return (
    <>
      <div style={{ background: "#F7F9FF", padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>智能可共享的团队协同日历</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              掌握整个团队的日程安排太困难？飞书日历与即时沟通、在线文档深度整合，团队成员可以便捷规划和共享日程，时刻与大家保持同步，组织会议、项目排期更高效。
            </p>
            <div style={{ marginTop: "50px" }}>
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
                下载飞书
              </Button>
            </div>
          </Space>
          <animated.div ref={imageRef1} style={animationProps1}>
            <Image src={c1} />
          </animated.div>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <animated.div ref={imageRef2} style={animationProps2}>
            <Image src={c2} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>便捷订阅同事日历</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              订阅同事日历，可以直观查看对方忙闲状态，不必反复沟通协调，制定日程、安排会议更合理、更高效。
            </p>
          </Space>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>高效组织团队会议</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              通过日历组织会议，可快速向同事或整个群组发出邀约，参与者会在飞书里收到通知，日程也会自动同步到其日历中，组织团队会议轻松无比。
            </p>
          </Space>
          <animated.div ref={imageRef3} style={animationProps3}>
            <Image src={c3} />
          </animated.div>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <animated.div ref={imageRef4} style={animationProps4}>
            <Image src={c4} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>极速查找空闲会议室</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              在会议室视图下，可以同时查看多个会议室的预约安排，哪个会议室可用一目了然，快速找到合适的会议室，合理规划会议。
            </p>
          </Space>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>一键开启会议群聊</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              创建会议邀约后，可一键创建会议群聊，共享会议相关文档，一事一议，让讨论更专注更充分。
            </p>
          </Space>
          <animated.div ref={imageRef5} style={animationProps5}>
            <Image src={c5} />
          </animated.div>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <animated.div ref={imageRef6} style={animationProps6}>
            <Image src={c6} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>轻松创建公共日历</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              创建“项目排期”、“节假日安排”等公共日程，可以快速和大家分享项目计划，时刻与团队保持同步。
            </p>
          </Space>
        </Flex>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Flex
          className="container"
          align="center"
          justify="between"
          gap={"50px"}
        >
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>智能日程通知提醒</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              收到会议邀请、日程开始前、日程时间地点发生变更、或日程有冲突时，日历助手小机器人会及时发送消息提醒，以防忘记。
            </p>
          </Space>
          <animated.div ref={imageRef7} style={animationProps7}>
            <Image src={c7} />
          </animated.div>
        </Flex>
      </div>
    </>
  );
};
