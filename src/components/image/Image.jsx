import { Flex } from "antd";
export const Image = () => {
  return (
    <div className="container">
      <Flex justify="space-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
            }}
          >
            12321
          </div>
        ))}
      </Flex>
    </div>
  );
};
