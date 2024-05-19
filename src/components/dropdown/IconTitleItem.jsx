// 封装图标标题内容组件
export const IconTitleItem = (props) => {
  return (
    <h4>
      {props.children}
      <>
        {props.title}
        <p
          style={{
            color: "#797A89",
            fontSize: "12px",
            fontWeight: 500,
            marginLeft: "25px",
          }}
        >
          {props.content}
        </p>
      </>
    </h4>
  );
};
