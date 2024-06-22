import { useState, useEffect, useRef } from "react";
import { Flex, Image, Button, Space } from "antd";
import { useSpring, animated } from "react-spring";
import m1 from "../../assets/image/m1.png";
import m2 from "../../assets/image/m2.png";
import m3 from "../../assets/image/m3.png";
import m4 from "../../assets/image/m4.png";
import m5 from "../../assets/image/m5.png";
import m6 from "../../assets/image/m6.png";
import m7 from "../../assets/image/m7.png";
import m8 from "../../assets/image/m8.png";
import m9 from "../../assets/image/m9.png";

export const MessengerBanner = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const imageRef6 = useRef(null);
  const imageRef7 = useRef(null);
  const imageRef8 = useRef(null);
  const imageRef9 = useRef(null);
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
          } else if (entry.target === imageRef8.current) {
            setIsVisible8(entry.isIntersecting);
          } else if (entry.target === imageRef9.current) {
            setIsVisible9(entry.isIntersecting);
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
    observer.observe(imageRef8.current);
    observer.observe(imageRef9.current);
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
  const animationProps8 = useSpring({
    opacity: isVisible8 ? 1 : 0,
    transform: isVisible8 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 600 },
  });

  const animationProps9 = useSpring({
    opacity: isVisible9 ? 1 : 0,
    transform: isVisible9 ? "translateY(0)" : "translateY(50px)",
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
            <h1 style={{ fontSize: "46px" }}>极致降噪的团队沟通</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              经常被刷屏，错过很多重要消息？在飞书可以针对单条消息进行回复，即使同时讨论多个话题也不会混乱，还可以使用快捷表情，减少对他人的干扰，重要通知、信息、文件不被淹没。
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
            <Image src={m1} />
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
            <Image src={m2} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>聚焦“话题”，畅快交流</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              普通群聊消息太杂太多，不如上话题群发帖，聚焦讨论同一话题；一键订阅重要话题，高效获取信息，减少其他噪音；还可以找到志同道合的人交流互动，工作社交两不误。
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
            <h1 style={{ fontSize: "46px" }}> 相关消息自动“串”联</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              针对单条消息进行回复，相关讨论就会自动“串”在一起，点击其中任意一条消息就能快速查看上下文，不用费力翻找聊天记录。
            </p>
          </Space>
          <animated.div ref={imageRef3} style={animationProps3}>
            <Image src={m3} />
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
            <Image src={m4} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>快捷表情静音回复</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              用快捷表情回复消息，展示形式简洁明了，回复的表情也不会对群里其他成员产生消息提醒，再也不用被「收到」刷屏了。
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
            <h1 style={{ fontSize: "46px" }}>历史消息自动同步</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              消息记录存储在云端，并会自动同步到所有设备。新成员加入群组时可随时随地查看历史消息，快速融入团队和项目，降低企业沟通成本，提升上手效率。
            </p>
          </Space>
          <animated.div ref={imageRef5} style={animationProps5}>
            <Image src={m5} />
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
            <Image src={m6} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>重要消息抵达无障碍</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              发出去的消息会显示已读未读状态，紧急情况下，还可以对消息加急，通过弹窗、短信或电话提醒对方，项目推进更高效。
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
            <h1 style={{ fontSize: "46px" }}>随时开启视频会议</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              一对一或群聊过程中可以随时开启高质量音视频会议，即使异地远程办公也能实现面对面高效沟通。
            </p>
          </Space>
          <animated.div ref={imageRef7} style={animationProps7}>
            <Image src={m7} />
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
          <animated.div ref={imageRef8} style={animationProps8}>
            <Image src={m8} />
          </animated.div>
          <Space style={{ maxWidth: "480px" }} direction="vertical">
            <h1 style={{ fontSize: "46px" }}>高频会话置顶显示</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              重要、高频的会话可以置顶显示，每个置顶会话仅展示头像和名称，更加节省屏幕空间，不用担心会话太多导致群组管理混乱。
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
            <h1 style={{ fontSize: "46px" }}>智能机器人小助手</h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              机器人是飞书的高级扩展功能，可以自定义机器人，将集成应用的动态推送到群聊中，实现信息自动同步。也可以在飞书里和机器人对话，让机器人帮忙完成任务，例如发送提醒等。
            </p>
          </Space>
          <animated.div ref={imageRef9} style={animationProps9}>
            <Image src={m9} />
          </animated.div>
        </Flex>
      </div>
    </>
  );
};
