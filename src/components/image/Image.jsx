import { Flex, Image } from "antd";
import p3 from "../../assets/image/p3.png";
import p4 from "../../assets/image/p4.png";
import p5 from "../../assets/image/p5.png";
import p6 from "../../assets/image/p6.png";
import p7 from "../../assets/image/p7.png";
import p8 from "../../assets/image/p8.png";
import p9 from "../../assets/image/p9.png";
import p10 from "../../assets/image/p10.png";

export const Images = () => {
  const arr = [p3, p4, p5, p6, p7, p8, p9, p10];
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <Flex justify="space-between">
        {arr.map((src, i) => (
          <div key={i} style={{}}>
            <Image style={{ width: "128px" }} src={src} />
          </div>
        ))}
      </Flex>
    </div>
  );
};
