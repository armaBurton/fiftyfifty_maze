import React from "react";

const ReturnCell = React.forwardRef((props, ref) => {
  console.log(JSON.stringify(props));
  return (
    <div
      x={props.x}
      y={props.y}
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
      visited={props.visited}
      key={`${props.x}-${props.y}`}
      className="cellComponent"
      ref={ref}
      style={{
        borderTop: props?.top ? "1px solid black" : "none",
        borderBottom: props?.bottom ? "1px solid black" : "none",
        borderRight: props?.right ? "1px solid black" : "none",
        borderLeft: props?.left ? "1px solid black" : "none",
        backgroundColor: "yellow",
        width: props.dim,
        height: props.dim,
        fontSize: "9px",
      }}
    >
      {`${props.x}-${props.y}`}
    </div>
  );
});

export default ReturnCell;
