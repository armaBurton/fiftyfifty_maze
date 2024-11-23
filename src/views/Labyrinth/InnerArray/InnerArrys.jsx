const InnerArr = (setPixels, size, pixelRef) => {
  const innerArr = [];
  for (let x = 0; x < size; x++) {
    innerArr.push(
      Array.from({ length: size }, (_, y) => ({
        x: x,
        y: y,
        top: "true",
        bottom: "true",
        right: "true",
        left: "true",
        visited: "false",
        ref: (el) => {
          if (!pixelRef.current[x]) {
            pixelRef.current[x] = [];
          }
          pixelRef.current[x][y] = el;
        },
      })),
    );
  }
  setPixels(innerArr);
};

export default InnerArr;
