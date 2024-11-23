import { pixelPath } from "../../../utils/utils";

const getUpdatedWalls = (fromPixel, toPixel) => {
  // console.log(toPixel);
  fromPixel.style.backgroundColor = pixelPath;
  toPixel.style.backgroundColor = pixelPath;
  if (
    parseInt(fromPixel.getAttribute("y")) -
      parseInt(toPixel.getAttribute("y")) <
    0
  ) {
    fromPixel.style.borderRight = "none";
    toPixel.style.borderLeft = "none";
  }
  if (
    parseInt(fromPixel.getAttribute("y")) -
      parseInt(toPixel.getAttribute("y")) >
    0
  ) {
    fromPixel.style.borderLeft = "none";
    toPixel.style.borderRight = "none";
  }
  if (
    parseInt(fromPixel.getAttribute("x")) -
      parseInt(toPixel.getAttribute("x")) <
    0
  ) {
    fromPixel.style.borderBottom = "none";
    toPixel.style.borderTop = "none";
    // toPixel.setAttribute("top", "false");
    // toPixel.setAttribute("Bottom", "false");
    // toPixel.style.borderTop = "none";
  }
  if (
    parseInt(fromPixel.getAttribute("x")) -
      parseInt(toPixel.getAttribute("x")) >
    0
  ) {
    fromPixel.style.borderTop = "none";
    toPixel.style.borderBottom = "none";
  }
};

export default getUpdatedWalls;
