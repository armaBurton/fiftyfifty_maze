import React, { forwardRef } from "react";

const ReturnPixel = forwardRef((props, ref) => {
  return (
    <div
      x={props.x}
      y={props.y}
      data-id={`${props.x}-${props.y}`}
      data-visited={"false"}
      data-traversed={"false"}
      data-validpath={"true"}
      data-currentposition={"false"}
      data-exits={0}
      ref={ref}
      style={{
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        backgroundColor: "var(--maze-bkgnd-init)",
        width: props.length / props.size,
        height: props.length / props.size,
        fontSize: "9px",
      }}
      className="pixelComponent"
    ></div>
  );
});

export default ReturnPixel;
